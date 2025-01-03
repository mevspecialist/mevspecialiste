import React from 'react';
import Image from 'next/image';

const facilities: { title: string; content: string; image: string }[] = [
    {
        title: 'Operating Room',
        content:
            'Our state-of-the-art operating room is equipped with the latest medical technology and staffed by skilled surgeons and healthcare professionals. It’s a place where precision meets care, ensuring that patients receive the best surgical treatment available.',
        image: '/images/facilityhub/facility-1.jpeg',
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
            <section className="banner bg-[url('/images/facilityhub/facilityhub.jpeg')] bg-cover bg-center relative px-10 md:px-40 -mx-10 md:-mx-32">
                <div className="banner-content flex flex-col py-60 relative z-10 text-center">
                    <h1 className="font-semibold">Facility Hub</h1>
                    <p className="text-[#FDFDFD] md:w-2/3 mx-auto pt-4">
                        Welcome to our Facility Hub, where state-of-the-art
                        infrastructure meets patient-centered care. Explore our
                        well-equipped spaces designed to provide comfort,
                        safety, and advanced medical support, ensuring the
                        highest quality of healthcare in a welcoming
                        environment.
                    </p>
                </div>
            </section>
            <section className="py-20">
                {facilities.map((facility, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        <div key={index} className="py-10">
                            <h2>{facility.title}</h2>
                            <p>{facility.content}</p>
                        </div>
                        <Image
                            src={facility.image}
                            alt={facility.title}
                            width={500}
                            height={300}
                            className="rounded-3xl"
                        />
                    </div>
                ))}
            </section>
        </main>
    );
};

export default FacilityHub;
