'use client';
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaHamburger, FaTimes } from 'react-icons/fa';
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
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="banner px-10 pt-10 text-sm md:text-base">
            <div className="navigation py-4 px-10 md:py-6 md:px-20 relative z-10 flex justify-between items-center rounded-full">
                <h1 className="nav-logo">
                    <Link href="/">
                        <Image
                            width={150}
                            height={150}
                            src="/mev-logo-text.png"
                            alt="mevspecialist Logo"
                        />
                    </Link>
                </h1>
                <nav className="hidden lg:flex">
                    <ul className="flex justify-evenly gap-8">
                        {navigation.map((nav) => (
                            <li key={nav.name}>
                                <Link href={nav.href} className="uppercase">
                                    <span>{nav.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-4 ml-20">
                        <FaPhoneAlt className="icon" />
                        <FaEnvelope className="icon" />
                    </div>
                </nav>

                {/* Mobile Navigation */}
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="absolute z-10 lg:hidden top-1/2 -translate-y-1/2 right-12 text-2xl"
                >
                    {showMenu ? <FaTimes /> : <FaHamburger />}
                </button>
                {showMenu && (
                    <nav className="lg:hidden absolute z-20 top-full">
                        <ul className="">
                            {navigation.map((nav) => (
                                <li key={nav.name} className="mb-4">
                                    <Link href={nav.href} className="uppercase">
                                        <span>{nav.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-4">
                            <FaPhoneAlt />
                            <FaEnvelope />
                        </div>
                    </nav>
                )}
            </div>

            {/* Banner content */}
            <div className="banner-content flex flex-col md:px-20 relative z-10">
                <div className="order-2">
                    <h1 className="font-light text-4xl md:text-[4rem] md:leading-[87.42px] relative w-max">
                        Welcome to MEV <br /> Specialist Hospital
                    </h1>
                    <p className="py-6 text-white">
                        5 star one stop facility providing <br />
                        Comprehensive solution to most Health care needs
                    </p>
                    <Button
                        onClick={() => console.log('Button clicked')}
                        label="Schedule Appointment"
                    />
                </div>
                <div className="flex flex-col md:flex-row justify-between pb-10 order-1 font-light">
                    <span className="uppercase font-marcellus order-2 md:order-none mt-6 md:mt-0">
                        MEV Specialist Hospital
                    </span>
                    <span>Watch Our Story</span>
                </div>
                <div className="order-3 md:flex justify-between items-baseline">
                    <div className="banner-card flex flex-col order-2 my-6 lg:my-0 lg:-mt-36">
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
                    <p className="text-white order-1 text-center md:text-left md:relative top-40">
                        {' '}
                        <span className="text-btn-color font-marcellus mr-1">
                            5/5
                        </span>{' '}
                        Rating From Our Clients
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Nav;
