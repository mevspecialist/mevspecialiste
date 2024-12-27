'use client';
import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';
import Image from 'next/image';

const socialLinks = [
    { name: 'Facebook', href: '/' },
    { name: 'Twitter', href: '/blog' },
    { name: 'LinkedIn', href: '/contact' },
    { name: 'Instagram', href: '/Services' },
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

const Footer: React.FC = () => {
    return (
        <footer className="px-6 md:text-center md:px-16 bg-footer-bg text-pry-text-color-2">
            <div>
                <h4 className='capitalize'>
                    Mev specialist <br /> hospital
                </h4>
                <Image
                    src="/footer-banner-lg.jpeg"
                    alt="Logo"
                    width={50}
                    height={50}
                />
                <Button
                    onClick={() => console.log('Button clicked')}
                    label="Shedule Appointment"
                />
            </div>
            <div>
                {/* <img src="/path-to-logo.png" alt="Logo" /> */}
                <Link href="/some-link">Link</Link>
                <p>Some paragraph text here.</p>
            </div>
            <ul>
                {socialLinks.map((link) => (
                    <li key={link.name}>
                        <a href={link.href}>{link.name}</a>
                    </li>
                ))}
            </ul>

            <div>
                <h3>Services</h3>
                <ul>
                    {services.map((service) => (
                        <li key={service}>{service}</li>
                    ))}
                </ul>
            </div>
            <div>
                <form>
                    <input type="text" placeholder="Enter text" />
                    <Button
                        onClick={() => console.log('Button clicked')}
                        label="Submit"
                    />
                </form>
                <div>
                    <span>+2348063583111</span>
                    <span>6 djibouti Street Wuse 2, FCT Abuja </span>
                </div>
            </div>
            <div>
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
