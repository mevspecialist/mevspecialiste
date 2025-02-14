import React from 'react';
import { PageBanner } from '@/components/PageBanner';
import { DoctorCard } from '@/components/DoctorCard';

export const doctors: { name: string; image: string; title: string }[] = [
    {
        name: 'Dr. Omolara Olagunju',
        title: 'Family Physician (MBBS, FWACP, FM)',
        image: '/images/doctors/doctor-5.jpeg',
    },
    {
        name: 'Dr. Ayorinde Davis Olusanya',
        title: 'Medical Officer (MBBS)',
        image: '/images/landingpage/doctor-1.jpeg',
    },
    {
        name: 'Dr. Rhoda Elendu',
        title: 'Medical Officer (MBBS)',
        image: '/images/doctors/doctor-3.jpg',
    },
    {
        name: 'Dr. Anita Omoruyi',
        title: 'Medical Officer (MBBS)',
        image: '/images/doctors/doctor-1.jpg',
    },
    {
        name: 'Dr. Agbo Ene Joy',
        title: 'Medical Officer (MBBS)',
        image: '/images/doctors/doctor-4.jpg',
    },
    {
        name: 'Dr. Ibe Jane',
        title: 'Medical Officer (MBBS)',
        image: '/images/doctors/doctor-2.jpg',
    },
];

const DoctorsPage: React.FC = () => {
    return (
        <main className="px-10 md:px-32">
            <PageBanner
                title="Doctors"
                content="Meet our team of experienced and compassionate doctors dedicated to providing exceptional care across various specialties. Each doctor brings a wealth of knowledge and expertise to ensure you receive the best possible treatment."
                image="/images/doctors/doctors-banner.jpeg"
            />
            <section className="py-20">
                <div className="text-center lg:text-left">
                    <header className="header-star font-marcellus uppercase">Our team</header>
                    <h2 className="text-2xl font-semibold py-4 lg:text-inherit ">
                        Meet Our Medical Specialists
                    </h2>
                    <p>Our Doctors are well trained, licensed and experienced</p>
                </div>
                <div className="py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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

export default DoctorsPage;
