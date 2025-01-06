import React from 'react';
import { PageBanner } from '@/components/PageBanner';
import Image from 'next/image';

const Doctors: React.FC = () => {
    return (
        <main className="px-10 md:px-32">
            <PageBanner
                title="Doctors"
                content="Meet our team of experienced and compassionate doctors dedicated to providing exceptional care across various specialties. Each doctor brings a wealth of knowledge and expertise to ensure you receive the best possible treatment."
                image="/images/doctors/doctors-banner.jpeg"
            />
            <section className="py-20"></section>
        </main>
    );
};

export default Doctors;
