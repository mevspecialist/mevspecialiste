'use client';
import React, { useState } from 'react';
import { PageBanner } from '@/components/PageBanner';
import Button from '@/components/Button';
import { LoadingStatus } from '@/components/Contact';
import { Notification, NotificationType } from '@/components/Notification';

interface FormData {
    fullname: string;
    telephone: string;
    dob: string;
    email: string;
    time: string;
    subject: string;
    comment: string;
}

const AppointmentPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullname: '',
        telephone: '',
        dob: '',
        email: '',
        time: '',
        subject: '',
        comment: '',
    });

    const [status, setStatus] = useState<LoadingStatus>(LoadingStatus.idle);
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus(LoadingStatus.loading);

        try {
            const response = await fetch('/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus(LoadingStatus.success);
                setMessage('Appointment booked successfully!');
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
                setStatus(LoadingStatus.success);
                setMessage(`Error: ${errorData.message || 'Failed to book appointment'}`);
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            setMessage('Something went wrong. Please try again later.');
            setStatus(LoadingStatus.error);
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
                <h2 className="text-btn-color mb-10 text-center">Book an Appointment</h2>
                <form onSubmit={handleSubmit} className="booking relative max-w-2xl mx-auto">
                    <div className="form-wrapper gap-4">
                        <label htmlFor="fullname">Full name:</label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            placeholder="Ibiwoye Joshua Olaolorun"
                            value={formData.fullname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="lg:flex justify-between">
                        <div className="form-wrapper gap-4">
                            <label htmlFor="telephone">Telephone:</label>
                            <input
                                type="tel"
                                id="telephone"
                                name="telephone"
                                placeholder="123-456-789"
                                value={formData.telephone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-wrapper gap-4">
                            <label htmlFor="dob">Date of Birth:</label>
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-wrapper gap-4">
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
                    <div className="form-wrapper gap-4">
                        <label htmlFor="">Time</label>
                        <input
                            type="datetime-local"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="py-10">
                        <div className="py-10">
                            <h3 className="text-btn-color font-semibold">How Can We Help You?</h3>
                            <p className="text-black">
                                Feel free to ask a question or simply leave a comment
                            </p>
                        </div>
                        <div className="form-wrapper gap-4">
                            <label htmlFor="subject">Subject:</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="how can we help you"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-wrapper gap-4">
                            <label htmlFor="comment">Comment/Questions:</label>
                            <textarea
                                id="comment"
                                name="comment"
                                rows={8}
                                value={formData.comment}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <Button
                        onClick={() => console.log('clicked')}
                        label={status === LoadingStatus.loading ? 'Sending...' : 'Send Message'}
                        disabled={status === LoadingStatus.loading}
                    />
                    {status === LoadingStatus.success && (
                        <Notification
                            type={NotificationType.success}
                            message={message}
                            onClose={() => setStatus(LoadingStatus.idle)}
                        />
                    )}
                    {status === LoadingStatus.error && (
                        <Notification
                            type={NotificationType.error}
                            message={message}
                            onClose={() => setStatus(LoadingStatus.idle)}
                        />
                    )}
                </form>
            </section>
        </main>
    );
};

export default AppointmentPage;
