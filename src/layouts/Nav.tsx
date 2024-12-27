'use client';
import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Services', href: '/Services' },
    { name: 'Career', href: '/Career' },
    { name: 'Facility Hub', href: '/hub' },
];

const Nav: React.FC = () => {
    return (
        <header className="banner px-10 pt-10 text-sm md:text-base">
            <div className="navigation py-6 px-20 relative z-10 flex justify-between items-center rounded-full">
                <h1 className="nav-logo">
                    <Link href="/">
                        <Image
                            width={150}
                            height={150}
                            src="/mev-logo-text.png"
                            alt="Logo"
                            className="logo"
                        />
                    </Link>
                </h1>
                <nav>
                    <ul className="flex justify-evenly gap-8">
                        {navigation.map((nav) => (
                            <li key={nav.name}>
                                <Link href={nav.href} className="uppercase">
                                    <span>{nav.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex gap-4">
                    <FaPhone className="icon" />
                    <FaEnvelope className="icon" />
                </div>
            </div>
            <div className="banner-content flex flex-col md:px-20 relative z-10">
                <div className="order-2">
                    <h1 className="font-light">
                        Welcome to MEV <br /> Specialist Hospital
                    </h1>
                    <p className="font-extralight py-6">
                        5 star one stop facility providing <br />
                        Comprehensive solution to most Health care needs
                    </p>
                    <Button
                        onClick={() => console.log('Button clicked')}
                        label="Schedule Appointment"
                    />
                </div>
                <div className="flex flex-col md:flex-row justify-between pb-10 order-1 font-light">
                    <span className="uppercase">MEV Specialist Hospital</span>
                    <span>Watch Our Story</span>
                </div>
                <div className="order-3 md:flex justify-between items-baseline">
                    <div className="banner-card flex flex-col order-2 md:-mt-40">
                        <div className="order-2 p-6">
                            <header className="mb-4">Core Services</header>
                            <ul className="font-light">
                                <li>Patient Safety</li>
                                <li>Service Excellence</li>
                                <li>Service Excellence</li>
                            </ul>
                        </div>
                        <Image
                            width={200}
                            height={200}
                            src="/images/banner-card-image.jpeg"
                            alt="Logo"
                            className="order-1 w-full rounded-t-xl"
                        />
                    </div>
                    <p className="font-extralight order-1">
                        {' '}
                        <span className="text-btn-color">5/5</span> Rating From
                        Our Clients
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Nav;
