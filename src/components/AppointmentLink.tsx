import React from 'react';
import Link from 'next/link';

export const AppointmentLink: React.FC = () => {
    return (
        <Link
            href={"/contact?tab=appointment"}
            className="bg-btn-color text-white px-8 py-3 rounded-full font-light hover:bg-hover-color hover:text-gray-800 transform transition duration-300"
        >
            Schedule Appointment
        </Link>
    );
};
