import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
// import './Nav.css'; // Nav CSS file for styling

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
        <header className="px-6 py-3 md:px-10 text-sm md:text-base flex justify-between items-center">
            <h1 className="nav-logo">
                <Link href="#">
                    <Image
                        width={50}
                        height={50}
                        src="/path/to/logo.png"
                        alt="Logo"
                        className="logo"
                    />
                    <span className="nav-name">MevSpecialiste</span>
                </Link>
            </h1>
            <nav className="">
                <ul className="flex justify-evenly gap-8">
                    {navigation.map((nav) => (
                        <li key={nav.name} className="t">
                            <Link
                                href={nav.href}
                                className="hover:text-btn-color"
                            >
                                <span>{nav.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="nav-icons">
                    <FaPhone className="icon" />
                    <FaEnvelope className="icon" />
                </div>
            </nav>
        </header>
    );
};

export default Nav;
