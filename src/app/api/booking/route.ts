import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

// Load service account credentials
if (!process.env.GOOGLE_SERVICE_ACCOUNT) {
    throw new Error('GOOGLE_SERVICE_ACCOUNT environment variable is not defined');
}
const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);

// Initialize JWT client
const jwtClient = new google.auth.JWT(
    credentials.client_email,
    undefined,
    credentials.private_key,
    ['https://www.googleapis.com/auth/calendar']
);

interface AppointmentBody {
    fullname: string;
    email: string;
    telephone: string;
    dob: string;
    subject: string;
    comment: string;
    time: string;
}

// Initialize the Google Calendar API
const calendar = google.calendar({ version: 'v3', auth: jwtClient });

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        const { fullname, email, telephone, time, dob, subject, comment }: AppointmentBody =
            await req.json();

        // Ensure the time string is valid for Date
        const completeTime = `${time}:00`; // Add seconds

        // Parse the time string into a Date object
        const startDate: Date = new Date(completeTime);

        const endDate: Date = new Date(startDate.getTime() + 3600000); // 1 hour later

        // Define the event details
        const event = {
            summary: subject,
            description: comment,
            start: {
                dateTime: startDate.toISOString(), // booking time
                timeZone: 'Africa/Lagos',
            },
            end: {
                dateTime: endDate.toISOString(), // booking time + 1 hour later
                timeZone: 'Africa/Lagos',
            },
            // attendees: [{ email }], // Optional attendee's email
        };

        // Insert the event into Google Calendar
        const calendarResponse = await calendar.events.insert({
            calendarId: process.env.MEVSPECIALISTE_CALENDAR, // Use the service account's primary calendar or a shared calendar
            requestBody: event,
        });

        console.log('Event created:', calendarResponse.data.htmlLink);

        // Send email notification using Nodemailer
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 465,
            secure: true, // Use true for port 465
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: email,
            subject: 'Appointment Confirmation',
            text: `Dear ${fullname},\n\nYour appointment for "${subject}" has been confirmed.\n\nDetails:\n- Phone: ${telephone}\n- Date of Birth: ${dob}\n- calendar: ${calendarResponse.data.htmlLink}\n- Comments: ${comment}\n\nThank you.`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Booking confirmed' }, { status: 200 });
    } catch (error) {
        console.error('Error processing booking:', error);
        return NextResponse.json({ message: 'Error processing booking' }, { status: 500 });
    }
}
