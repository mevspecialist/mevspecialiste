import React from 'react';
import Button from './Button';
import {
    FaPhoneAlt,
    FaMapMarker,
    FaWhatsapp,
    FaClock,
    FaEnvelope,
} from 'react-icons/fa';

const contactDetails: {
    title: string;
    content: string;
    icon: React.ComponentType;
}[] = [
    {
        title: 'Phone Number',
        content: '+2348063583111',
        icon: FaPhoneAlt,
    },
    {
        title: 'Whatsapp',
        content: '+2348118663567',
        icon: FaWhatsapp,
    },
    {
        title: 'Email Address',
        content: 'care@mevspecialisthospital.com',
        icon: FaEnvelope,
    },
    {
        title: 'Address',
        content: '6 Djibouti Street Wuse 2, FCT Abuja',
        icon: FaMapMarker,
    },
    {
        title: 'Business Hours',
        content: '24/7',
        icon: FaClock,
    },
];

export const Contact: React.FC = () => {
    return (
        <section className="py-20 lg:flex justify-between">
            <div className="lg:w-1/2 lg:mr-14">
                <header className="font-marcellus uppercase text-center lg:text-left">
                    Get in Touch
                </header>
                <div className="py-6 text-center lg:text-left">
                    <h2>We’d Love to Hear From You</h2>
                    <p>
                        For urgent care, simply call our 24 hours emergency
                        hotlines
                    </p>
                </div>
                <div>
                    {contactDetails.map((contact, index) => (
                        <div
                            key={index}
                            className="flex gap-4 items-baseline border-b-[1px] last:border-b-0 py-3"
                        >
                            <div className="p-2 bg-btn-color text-white w-max rounded-full">
                                <contact.icon />
                            </div>
                            <div className="relative -top-3">
                                <h3>{contact.title}</h3>
                                <p>{contact.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <form className="homepage lg:w-1/2 bg-[#FFF2FB] p-10 rounded-3xl text-btn-color">
                <div>
                    <label htmlFor="">Your Name</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label htmlFor="">Your Email</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label htmlFor="">Your Message</label>
                    <textarea
                        name=""
                        id=""
                        placeholder="Enter your message"
                        rows={8}
                    ></textarea>
                </div>
                <Button
                    onClick={(): void => console.log('clicked')}
                    label="Send Message"
                />
            </form>
        </section>
    );
};
