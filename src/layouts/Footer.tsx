'use client';
import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';
import Image from 'next/image';
import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaPhone,
    FaLocationArrow,
} from 'react-icons/fa';

const socialLinks = [
    { name: 'Facebook', href: '/', icon: FaFacebook },
    { name: 'Twitter', href: '/blog', icon: FaTwitter },
    { name: 'LinkedIn', href: '/contact', icon: FaLinkedin },
    { name: 'Instagram', href: '/Services', icon: FaInstagram },
];

const services = [
    'primary care',
    'obs & gyn',
    'pediatrics',
    'surgery',
    'cardiology',
    'orthopaedics',
    'full laboratory',
    '24hr emergency/ambulance service',
];

// const FooterBanner: React.FC = () => {
//     return (
//         <div>
//             <h4 className="capitalize">Start Your Journey</h4>
//             <p className="text-white">
//                 We believe in affordable <br></br> specialty healthcare for all.
//             </p>
//             <Image
//                 src="/footer-banner-lg.jpeg"
//                 alt="Logo"
//                 width={700}
//                 height={50}
//             />
//             <Button
//                 onClick={() => console.log('Button clicked')}
//                 label="Shedule Appointment"
//             />
//         </div>
//     );
// };

const Footer: React.FC = () => {
    return (
        <footer className="px-10 py-20 md:text-center md:px-20 bg-footer-bg text-pry-text-color-2">
            <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="md:w-1/3">
                    <Link href="/">
                        <Image
                            src="/mev-logo-text.png"
                            width={200}
                            height={200}
                            alt="Logo"
                        />
                    </Link>
                    <p className="text-left my-6 font-light">
                        Mev Specialist Hospital is renowned at home and abroad
                        for Medical excellence and attracts world-class
                        specialist Doctors and Surgeons.
                    </p>
                    <ul className="flex gap-4">
                        {socialLinks.map((link) => (
                            <li
                                key={link.name}
                                className="bg-[#A9518B] text-white p-2 rounded-full"
                            >
                                <a href={link.href}>
                                    <link.icon />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="text-left">
                    <h3 className="mb-4">Services</h3>
                    <ul className="capitalize font-light">
                        {services.map((service) => (
                            <li key={service} className="mb-2">
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-6 text-left">
                    <form>
                        <h3 className="mb-4">Subscribe To Newsletter</h3>
                        <input
                            type="text"
                            placeholder="Enter text"
                            className="py-2 px-4 rounded-md mb-4"
                        />
                        <div>
                            <Button
                                onClick={() => console.log('Button clicked')}
                                label="Submit"
                            />
                        </div>
                    </form>
                    <div className="font-light">
                        <li className="flex gap-2 items-center mb-4">
                            <span className="bg-[#A9518B] text-white p-2 rounded-full">
                                <FaPhone />
                            </span>
                            <span>+2348063583111</span>
                        </li>
                        <li className="flex gap-2 items-center">
                            <span className="bg-[#A9518B] text-white p-2 rounded-full">
                                <FaLocationArrow />
                            </span>
                            <span>6 Djibouti Street Wuse 2, FCT Abuja </span>
                        </li>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between text-[#232323] pt-20">
                <p>Copyright &copy; 2024 MevSpecialist Hospital Abuja </p>
                <p>
                    <span>Terms of Use</span>
                    <span>Privacy Policy</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
