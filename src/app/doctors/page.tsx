import React from 'react';
import { PageBanner } from '@/components/PageBanner';
import { DoctorCard } from '@/components/DoctorCard';

const doctors: { name: string; image: string; title: string }[] = [
    {
        name: 'Dr. Innocent Onu',
        title: 'Trauma & Orthopedics',
        image: '/images/landingpage/doctor-1.jpeg',
    },
    {
        name: 'Dr. Brian Egwa',
        title: 'Medical Officer',
        image: '/images/landingpage/doctor-2.jpeg',
    },
    {
        name: 'Dr. Teniola Edgal',
        title: 'Clinical Psychologist',
        image: '/images/landingpage/doctor-3.jpeg',
    },
    {
        name: 'Dr. Isabella Abo',
        title: 'Medical Officer',
        image: '/images/landingpage/doctor-5.jpeg',
    },
];

const Doctors: React.FC = () => {
    return (
        <main className="px-10 md:px-32">
            <PageBanner
                title="Doctors"
                content="Meet our team of experienced and compassionate doctors dedicated to providing exceptional care across various specialties. Each doctor brings a wealth of knowledge and expertise to ensure you receive the best possible treatment."
                image="/images/doctors/doctors-banner.jpeg"
            />
            <section className="py-20">
                <div className="text-center lg:text-left">
                    <header className="header-star font-marcellus uppercase">
                        Our team
                    </header>
                    <h2 className="text-2xl font-semibold py-4 lg:text-inherit ">Meet Our Medical Specialists</h2>
                    <p>
                        Our Doctors are well trained, licensed and experienced
                    </p>
                </div>
                <div className="py-10 flex flex-col lg:flex-row gap-4">
                    {doctors.map((doctor, index) => (
                        <DoctorCard
                            key={index}
                            name={doctor.name}
                            title={doctor.title}
                            image={doctor.image}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Doctors;
