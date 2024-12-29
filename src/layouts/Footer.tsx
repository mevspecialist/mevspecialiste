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
    FaPhoneAlt,
    FaMapMarker,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

const socialLinks: { name: string; href: string; icon: IconType }[] = [
    { name: 'Facebook', href: '/', icon: FaFacebook },
    { name: 'Twitter', href: '/blog', icon: FaTwitter },
    { name: 'LinkedIn', href: '/contact', icon: FaLinkedin },
    { name: 'Instagram', href: '/Services', icon: FaInstagram },
];

const services: string[] = [
    'primary care',
    'obs & gyn',
    'pediatrics',
    'surgery',
    'cardiology',
    'orthopaedics',
    'full laboratory',
    '24hr emergency/ambulance service',
];

export const FooterBanner: React.FC = () => {
    return (
        <section className="footer-banner relative bg-[url('/footer-banner-lg.jpeg')] w-full bg-cover bg-center text-center py-40 lg:py-60">
            <div className="relative z-10">
                <header className="font-marcellus uppercase text-white">
                    Start Your Journey
                </header>
                <p className="text-white text-xl lg:text-4xl py-6">
                    We believe in affordable <br></br> specialty healthcare for
                    all.
                </p>
                <Button
                    onClick={() => console.log('Button clicked')}
                    label="Shedule Appointment"
                />
            </div>
        </section>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="px-10 pt-20 pb-10 md:text-center md:px-20 bg-footer-bg text-pry-text-color-2">
            <div className="relative flex flex-col md:flex-row justify-between gap-8 pb-6">
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
                                className="bg-btn-color text-white p-2 rounded-full"
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
                                label="Subscribe"
                            />
                        </div>
                    </form>
                    <div className="font-light">
                        <li className="flex gap-2 items-center mb-4">
                            <span className="bg-btn-color text-white p-2 rounded-full">
                                <FaPhoneAlt />
                            </span>
                            <span>+2348063583111</span>
                        </li>
                        <li className="flex gap-2 items-center">
                            <span className="bg-btn-color text-white p-2 rounded-full">
                                <FaMapMarker />
                            </span>
                            <span>6 Djibouti Street Wuse 2, FCT Abuja </span>
                        </li>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center md:flex-row md:justify-between pt-10">
                <p className="text-[#232323] text-[14px]">
                    Copyright &copy; 2024 {''} Mevspecialist Hospital Abuja{' '}
                </p>
                <p className="text-[#232323] text-[14px] flex gap-4">
                    <span className="border-r-[1px] border-[#232323] pr-4">
                        Terms of Use
                    </span>
                    <span>Privacy Policy</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
