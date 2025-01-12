import React from 'react';
import Link from 'next/link';

export const AppointmentLink: React.FC = () => {
    return (
        <Link
            href={"/contact?tab=appointment"}
            className="bg-btn-color text-white px-8 py-3 rounded-full font-light"
        >
            Schedule Appointment
        </Link>
    );
};
