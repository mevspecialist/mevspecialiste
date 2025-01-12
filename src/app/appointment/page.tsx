'use client';
import React, { useState } from 'react';
import { PageBanner } from '@/components/PageBanner';

const AppointmentPage: React.FC = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        telephone: '',
        dob: '',
        email: '',
        time: '',
        subject: '',
        comment: '',
    });

    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Appointment booked successfully!');
                setFormData({
                    fullname: '',
                    telephone: '',
                    dob: '',
                    email: '',
                    time: '',
                    subject: '',
                    comment: '',
                });
            } else {
                const errorData = await response.json();
                setStatus(`Error: ${errorData.message || 'Failed to book appointment'}`);
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            setStatus('Error: Something went wrong. Please try again.');
        }
    };

    return (
        <main className="px-10 md:px-32">
            <PageBanner
                title="Schedule Appointment"
                content="We’re here to assist you! Reach out for inquiries, appointments, or more information. Let’s connect and care for your health together"
                image="/images/contact/contact.jpeg"
            />
            <section className="py-20">
                <h1>Book an Appointment</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="fullname">Full Name:</label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="telephone">Telephone:</label>
                        <input
                            type="tel"
                            id="telephone"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="dob">Date of Birth:</label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="">Time</label>
                        <input
                            type="datetime-local"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="subject">Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="comment">Comment:</label>
                        <textarea
                            id="comment"
                            name="comment"
                            value={formData.comment}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </section>
            {status && <p>{status}</p>}
        </main>
    );
};

export default AppointmentPage;
