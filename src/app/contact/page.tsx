'use client';
import React from 'react';
import { Contact } from '@/components/Contact';
import { PageBanner } from '@/components/PageBanner';

const ContactPage: React.FC = () => {
    return (
        <main className="px-10 md:px-32">
            <PageBanner
                title="Contact Us"
                content="We’re here to assist you! Reach out for inquiries, appointments, or more information. Let’s connect and care for your health together"
                image="/images/contact/contact.jpeg"
            />
            <Contact />
        </main>
    );
};

export default ContactPage;
