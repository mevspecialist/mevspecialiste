'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FaPhoneAlt, FaEnvelope, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useCloseElementOnClick } from '@/utils/useClickOutside';
import { usePathname } from 'next/navigation'; //

const navigation: { name: string; href: string; hasSubmenu: boolean }[] = [
    { name: 'Home', href: '/', hasSubmenu: false },
    { name: 'About Us', href: '/about-us', hasSubmenu: true },
    { name: 'Contact', href: '/contact', hasSubmenu: false },
    { name: 'Services', href: '/services', hasSubmenu: false },
    { name: 'Blog', href: '/blog', hasSubmenu: false },
    { name: 'Career', href: '/career', hasSubmenu: false },
    { name: 'Facility Hub', href: '/facility-hub', hasSubmenu: false },
];

const ContactIcon: React.FC = () => {
    return (
        <div className="flex gap-4 ml-10 text-white">
            <Link
                href="tel:+2348063583111"
                className="w-10 h-10 bg-btn-color rounded-full flex items-center justify-center"
            >
                <FaPhoneAlt className="icon" />
            </Link>
            <Link
                href="mailto:mevspecialist4@gmail.com"
                className="w-10 h-10 bg-[#514A4A] rounded-full flex items-center justify-center"
            >
                <FaEnvelope className="icon" />
            </Link>
        </div>
    );
};

const Nav: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const ref = useRef<HTMLElement>(null);
    const [showStickyNav, setShowStickyNav] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

    const pathname = usePathname(); // Get current route

    // To keep track of the currently clicked nav link
    const [recent, setRecent] = useState<string | null>(null);

    // Effect to handle route changes including back/forward navigation
    useEffect(() => {
        const handleRouteChange = () => {
            const path = window.location.pathname;
            const activeNav = navigation.find((nav) => nav.href === path)?.name || 'Home';
            setRecent(activeNav);
            window.localStorage.setItem('key', activeNav);
        };

        // Initialize the active link on first render
        handleRouteChange();

        // Listen to Next.js route changes
        window.addEventListener('popstate', handleRouteChange);

        return () => {
            window.removeEventListener('popstate', handleRouteChange);
        };
    }, [pathname]);

    // close the menu when clicked outside of it
    useCloseElementOnClick({ ref, onClickOutside: () => setShowMenu(false) });

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 100 && currentScrollY > lastScrollY) {
                // Scrolling down, hide nav
                setShowStickyNav(false);
                setShowMenu(false);
            } else if (currentScrollY > 100 && currentScrollY < lastScrollY) {
                // Scrolling up, show nav
                setShowStickyNav(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    // Handle link click
    const handleLinkClick = (name: string) => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('key', name); // Update localStorage
            setRecent(name); // Update state to trigger re-render
        }
    };

    return (
        <header
            ref={ref}
            className={`max-w-7xl mx-auto fixed left-0 z-20 right-0 px-10 pt-10 text-sm md:text-base transition-transform duration-300 ${
                showStickyNav ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div
                className={`navigation py-4 px-10 md:py-6 md:px-20 relative flex justify-between items-center ${
                    showMenu ? 'rounded-t-full' : 'rounded-full'
                }`}
            >
                <h1>
                    <Link href="/">
                        <Image
                            width={150}
                            height={150}
                            src="/mev-logo-text.png"
                            alt="mevspecialist Logo"
                            className="w-32"
                        />
                    </Link>
                </h1>
                <nav className="hidden xl:flex items-center">
                    <ul className="flex justify-evenly gap-8 font-marcellus border-r-2 pr-6">
                        {navigation.map((nav) => (
                            <li key={nav.name} className="nav-list group">
                                <Link
                                    href={nav.href}
                                    onClick={() => handleLinkClick(nav.name)}
                                    className={`uppercase relative ${
                                        nav.name === (recent ?? 'Home') ? 'current' : ''
                                    }`}
                                >
                                    <span>{nav.name}</span>
                                </Link>

                                {nav.hasSubmenu && (
                                    <ul className="absolute left-0 hidden pt-1 group-hover:block">
                                        <li>
                                            <Link href="/doctors" className="uppercase">
                                                Doctors
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                    <ContactIcon />
                </nav>

                {/* Mobile Navigation */}
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="flex justify-center items-center absolute xl:hidden top-1/2 w-[30px] h-[20px] -translate-y-1/2 right-12 text-2xl text-white"
                >
                    {showMenu ? (
                        <FaTimes />
                    ) : (
                        <span className="hamburger" aria-hidden="true"></span>
                    )}
                </button>
                {showMenu && (
                    <nav className="navigation px-12 md:px-20 pb-10 pt-4 w-full xl:hidden absolute left-0 top-full rounded-b-[6rem]">
                        <ul>
                            {navigation.map((nav) => (
                                <li key={nav.name} className="mb-6 font-marcellus">
                                    <Link href={nav.href} className="uppercase">
                                        <span>{nav.name}</span>
                                    </Link>
                                </li>
                            ))}
                            <li className="mb-6 font-marcellus">
                                <Link href="/doctors" className="uppercase">
                                    <span>doctors</span>
                                </Link>
                            </li>
                        </ul>
                        <ContactIcon />
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Nav;
