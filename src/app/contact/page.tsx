'use client';
import React, { useState, Suspense } from 'react';
import { Contact } from '@/components/Contact';
import { PageBanner } from '@/components/PageBanner';
import { AppointmentPage } from '@/components/Appointment';
import { useSearchParams } from 'next/navigation';

const ContactPage: React.FC = () => {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get('tab'); // Get 'tab' query parameter
    const [activeTab, setActiveTab] = useState<'contact' | 'appointment'>(
        tabParam === 'appointment' ? 'appointment' : 'contact'
    );

    return (
        <main className="px-10 md:px-32">
            <PageBanner
                title="Contact Us"
                content="We’re here to assist you! Reach out for inquiries, appointments, or more information. Let’s connect and care for your health together"
                image="/images/contact/contact.jpeg"
            />

            {/* Tabs Navigation */}
            <div className="flex justify-center my-6">
                <button
                    className={`px-6 py-3 text-sm md:text-lg font-semibold transition ${
                        activeTab === 'contact'
                            ? 'border-b-4 rounded-lg border-btn-color text-btn-color'
                            : 'text-gray-600'
                    }`}
                    onClick={() => setActiveTab('contact')}
                >
                    Contact Us
                </button>
                <button
                    className={`px-6 py-3 text-sm md:text-lg font-semibold transition ${
                        activeTab === 'appointment'
                            ? 'border-b-4 rounded-lg border-btn-color text-btn-color'
                            : 'text-gray-600'
                    }`}
                    onClick={() => setActiveTab('appointment')}
                >
                    Book Appointment
                </button>
            </div>

            {/* Tab Content */}
            <div>
                {activeTab === 'contact' && <Contact />}
                {activeTab === 'appointment' && <AppointmentPage />}
            </div>
        </main>
    );
};

const ContactPageWithSuspense: React.FC = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <ContactPage />
    </Suspense>
);

export default ContactPageWithSuspense;
