import React from 'react';
import { PageBanner } from '@/components/PageBanner';
import { FaPlay } from 'react-icons/fa';

const aboutUs: { title: string; content: string }[] = [
    {
        title: 'Our Mission',
        content:
            'To Provide quality healthcare in all specialties in medicine with the highest level of standards with respect to medical ethics and patient focused care at a five star comfort to achieve best medical outcome and patient satisfaction.',
    },
    {
        title: 'Our Vision',
        content:
            'To be one of the best healthcare providers in Africa in the private setting, delivering quality care to patients and creating maximum value for all stakeholders.',
    },
];

const coreValues: string[] = [
    'Team Work',
    'Open Communication',
    'Professionalism',
    'Patient Satisfaction',
    'Motivation',
    'Patient Safety',
];

const AboutUs: React.FC = () => {
    return (
        <main className="px-10 md:px-32">
            <PageBanner
                title="About Us"
                content="Over 7 years of  highest levels of patient safety, service excellence and quality clinical care in Nigeria"
                image="/images/doctors/doctors-banner.jpeg"
            />
            <div className="py-20">
                <div className="bg-footer-bg px-10 lg:px-20 lg:py-10 rounded-2xl">
                    {aboutUs.map((about, index) => (
                        <div key={index} className="py-10 relative border-b-[1px] last:border-none">
                            <div>
                                <h3 className="text-2xl lg:text-4xl mb-4">{about.title}</h3>
                                <p className="lg:w-3/4">{about.content}</p>
                            </div>
                            <span className="absolute top-10 -right-2 lg:top-10 lg:right-10 text-white flex items-center justify-center bg-btn-color w-10 h-10 rounded-full">
                                <FaPlay />
                            </span>
                        </div>
                    ))}
                    <div className="py-10 relative">
                        <h3 className="text-2xl lg:text-4xl mb-10">Core Values</h3>
                        <ul className="pl-4 list-disc">
                            {coreValues.map((value, index) => (
                                <li key={index} className="mb-4">
                                    {value}
                                </li>
                            ))}
                        </ul>
                        <span className="absolute top-10 -right-2 lg:top-10 lg:right-10 text-white flex items-center justify-center bg-btn-color w-10 h-10 rounded-full">
                            <FaPlay />
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutUs;
