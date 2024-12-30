'use client';
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaHamburger, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

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
        <header className="absolute left-0 z-20 right-0 px-10 pt-10 text-sm md:text-base">
            <div className="navigation py-4 px-10 md:py-6 md:px-20 relative flex justify-between items-center rounded-full">
                <h1>
                    <Link href="/">
                        <Image
                            width={150}
                            height={150}
                            src="/mev-logo-text.png"
                            alt="mevspecialist Logo"
                        />
                    </Link>
                </h1>
                <nav className="hidden lg:flex items-center">
                    <ul className="flex justify-evenly gap-8 font-marcellus border-r-2 pr-6">
                        {navigation.map((nav) => (
                            <li key={nav.name}>
                                <Link href={nav.href} className="uppercase">
                                    <span>{nav.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-4 ml-10 text-white">
                        <span className="w-10 h-10 bg-btn-color rounded-full flex items-center justify-center">
                            <FaPhoneAlt className="icon" />
                        </span>
                        <span className="w-10 h-10 bg-[#514A4A] rounded-full flex items-center justify-center">
                            <FaEnvelope className="icon" />
                        </span>
                    </div>
                </nav>

                {/* Mobile Navigation */}
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="absolute lg:hidden top-1/2 -translate-y-1/2 right-12 text-2xl text-white"
                >
                    {showMenu ? <FaTimes /> : <FaHamburger />}
                </button>
                {showMenu && (
                    <nav className="navigation px-10 w-full lg:hidden absolute left-0 top-full">
                        <ul>
                            {navigation.map((nav) => (
                                <li
                                    key={nav.name}
                                    className="mb-4 font-marcellus"
                                >
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
        </header>
    );
};

export default Nav;
