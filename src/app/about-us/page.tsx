import React from 'react';
import { PageBanner } from '@/components/PageBanner';
import { FaPlay } from 'react-icons/fa';

const aboutUs: { title: string; content: string }[] = [
    {
        title: 'Our Mission',
        content:
            'At MEV Specialist Hospital, our mission is to provide compassionate, high-quality healthcare that transforms lives. We are dedicated to delivering expert medical care, fostering innovation, and embracing the latest advancements in healthcare technology. We strive to improve the well-being of our patients and the communities we serve, placing their health and happiness at the forefront of our practice.',
    },
    {
        title: 'Our Vision',
        content:
            'Our vision at MEV Specialist Hospital is to be a beacon of excellence in healthcare, setting the standard for patient-centered care, innovation, and community well-being. We aspire to be recognized as a leading healthcare institution in Abuja, Nigeria, and beyond, driven by our commitment to advancing medical knowledge, enhancing patient experiences, and making a positive impact on the health and lives of those we serve.',
    },
    {
        title: 'Core Values',
        content:
            'MEV Specialist Hospital’s core values revolve around compassion, excellence, innovation, teamwork, integrity, community engagement, and safety. We prioritize patient well-being with empathy, strive for healthcare excellence, embrace innovation, promote teamwork, uphold ethical standards, engage with our community, and ensure a safe environment for all.',
    },
];

const AboutUs: React.FC = () => {
    return (
        <main className="px-10 md:px-32">
            <PageBanner
                title="About Us"
                content="Over 7 years of  highest levels of patient safety, service excellence and quality clinical care in Nigeria"
                image="/images/doctors/doctors-banner.jpeg"
            />
            <section className="py-20">
                <div className="bg-footer-bg px-10 lg:px-20 lg:py-10 rounded-2xl">
                    {aboutUs.map((about, index) => (
                        <div key={index} className="py-10 relative border-b-[1px] last:border-none">
                            <div>
                                <h3 className="text-2xl lg:text-4xl mb-4">
                                    {about.title}
                                </h3>
                                <p className="lg:w-3/4">{about.content}</p>
                            </div>
                            <span className="absolute top-10 -right-2 lg:top-10 lg:right-10 text-white flex items-center justify-center bg-btn-color w-10 h-10 rounded-full">
                                <FaPlay />
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default AboutUs;
