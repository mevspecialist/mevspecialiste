import React from 'react';
import Image from 'next/image';
import { PageBanner } from '@/components/PageBanner';

const facilities: { title: string; content: string; image: string }[] = [
    {
        title: 'Operating Room',
        content:
            'Our state-of-the-art operating room is equipped with the latest medical technology and staffed by skilled surgeons and healthcare professionals. It’s a place where precision meets care, ensuring that patients receive the best surgical treatment available.',
        image: '/images/facilityhub/facility-5.jpg',
    },
    {
        title: 'Reception',
        content:
            'The heart of our hospital, our reception area is your first point of contact when you visit us. Our friendly and well-trained receptionists are here to assist you with check-ins, appointments, and general inquiries.',
        image: '/images/facilityhub/facility-2.jpeg',
    },
    {
        title: 'Inpatient Ward',
        content:
            'Our inpatient ward is designed to provide round-the-clock care and comfort to patients requiring hospitalization. With spacious and well-appointed rooms, our priority is your well-being and recovery.',
        image: '/images/facilityhub/facility-3.jpeg',
    },
    {
        title: 'Ambulance',
        content:
            'At MEV Specialist hospital Abuja, Nigeria, we are committed to expanding our services to meet the growing healthcare needs of the community. Stay tuned for the upcoming addition of our state-of-the-art ambulance facility.',
        image: '/images/facilityhub/facility-4.jpeg',
    },
];

const FacilityHub: React.FC = () => {
    return (
        <main className="px-10 md:px-32">
            <PageBanner
                title="Facility Hub"
                content="Welcome to our Facility Hub, where state-of-the-art infrastructure meets patient-centered care. Explore our well-equipped spaces designed to provide comfort, safety, and advanced medical support, ensuring the highest quality of healthcare in a welcoming environment."
                image="/images/facilityhub/facilityhub.jpeg"
            />
            <section className="py-20">
                {facilities.map((facility, index) => (
                    <div
                        key={index}
                        className={`lg:flex justify-between items-center gap-14 lg:py-20 ${
                            index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                        }`}
                    >
                        <div key={index} className="py-10 flex-1">
                            <h2>{facility.title}</h2>
                            <p>{facility.content}</p>
                        </div>
                        <div className="decorator relative rounded-3xl overflow-clip">
                            <Image
                                src={facility.image}
                                alt={facility.title}
                                width={500}
                                height={300}
                                className="w-full h-96 object-cover"
                            />
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default FacilityHub;
