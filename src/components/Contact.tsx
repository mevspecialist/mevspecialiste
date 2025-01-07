'use client';
import React, { useState } from 'react';
import Button from './Button';
import {
    FaPhoneAlt,
    FaMapMarker,
    FaWhatsapp,
    FaClock,
    FaEnvelope,
} from 'react-icons/fa';

const contactDetails: {
    title: string;
    content: string;
    icon: React.ComponentType;
}[] = [
    {
        title: 'Phone Number',
        content: '+2348063583111',
        icon: FaPhoneAlt,
    },
    {
        title: 'Whatsapp',
        content: '+2348118663567',
        icon: FaWhatsapp,
    },
    {
        title: 'Email Address',
        content: 'care@mevspecialisthospital.com',
        icon: FaEnvelope,
    },
    {
        title: 'Address',
        content: '6 Djibouti Street Wuse 2, FCT Abuja',
        icon: FaMapMarker,
    },
    {
        title: 'Business Hours',
        content: '24/7',
        icon: FaClock,
    },
];

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                const data = await response.json();
                setErrorMessage(data.message || 'Failed to send message');
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('Something went wrong. Please try again later.');
            setStatus('error');
        }
    };

    return (
        <section className="py-20 lg:flex justify-between">
            <div className="lg:w-1/2 lg:mr-14">
                <header className="font-marcellus uppercase text-center lg:text-left">
                    Get in Touch
                </header>
                <div className="py-6 text-center lg:text-left">
                    <h2>We’d Love to Hear From You</h2>
                    <p>
                        For urgent care, simply call our 24 hours emergency
                        hotlines
                    </p>
                </div>
                <div>
                    {contactDetails.map((contact, index) => (
                        <div
                            key={index}
                            className="flex gap-4 items-baseline border-b-[1px] last:border-b-0 py-3"
                        >
                            <div className="p-2 bg-btn-color text-white w-max rounded-full">
                                <contact.icon />
                            </div>
                            <div className="relative -top-3">
                                <h3>{contact.title}</h3>
                                <p>{contact.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <form 
                className="homepage lg:w-1/2 bg-[#FFF2FB] p-10 rounded-3xl text-btn-color" 
                onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor="">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="">Your Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="">Your Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        rows={8}
                        className="w-full px-4 py-2 border rounded"
                        required
                    ></textarea>
                </div>
                <Button
                    onClick={(): void => console.log('clicked')}
                    label= {status === 'loading' ? 'Sending...' : 'Send Message'}
                    disabled={status === 'loading'}
                />
                {status === 'success' && (
                    <p className="mt-4 text-green-500">Message sent successfully!</p>
                )}
                {status === 'error' && (
                    <p className="mt-4 text-red-500">{errorMessage}</p>
                )}
            </form>
        </section>
    );
};
