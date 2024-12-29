'use client';
import Button from '@/components/Button';
import Image from 'next/image';
import {
    FaPhoneAlt,
    FaAddressCard,
    FaMapMarker,
    FaWhatsapp,
    FaClock,
} from 'react-icons/fa';

const serviceOne: { title: string; image: string }[] = [
    { title: 'Operating Room', image: '/images/landingpage/why-choose-2.jpeg' },
    { title: 'Reception', image: '/images/landingpage/why-choose-3.jpeg' },
    { title: 'Inpatient Care', image: '/images/landingpage/why-choose-4.jpeg' },
    { title: 'View More', image: '' },
];

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
        icon: FaAddressCard,
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

const mainServices: { title: string; content: string }[] = [
    {
        title: 'Primary Care',
        content:
            'Comprehensive, patient-focused healthcare for all your needs, from prevention to managing chronic conditions.',
    },
    {
        title: 'Paediatrics',
        content:
            'Specialized care for children, ensuring their health, growth, and development at every stage.',
    },
    {
        title: 'Surgery',
        content:
            'Comprehensive surgical care with advanced techniques for precise treatment and faster recovery.',
    },
    {
        title: 'Diagnostics services',
        content:
            'Accurate and timely diagnostic tests to support effective treatment and care decisions.',
    },
    {
        title: 'Out patient clinics',
        content:
            'Comprehensive medical consultations and treatments tailored for patients without the need for hospital admission.',
    },
    {
        title: 'Physiotherapy',
        content:
            'Personalized therapy sessions to restore movement, improve strength, and enhance overall physical well-being.',
    },
];

const doctors: { name: string; image: string; title: string }[] = [
    {
        name: 'Dr. Innocent Onu',
        title: 'Trauma & Orthopedics',
        image: '/images/landingpage/doctor-1.jpeg',
    },
    {
        name: 'Dr. Brian Egwa',
        title: 'Medical Officer',
        image: '/images/landingpage/doctor-2.jpeg',
    },
    {
        name: 'Dr. Teniola Edgal',
        title: 'Clinical Psychologist',
        image: '/images/landingpage/doctor-3.jpeg',
    },
    {
        name: 'Dr. Isabella Abo',
        title: 'Medical Officer',
        image: '/images/landingpage/doctor-5.jpeg',
    },
];

export default function Home() {
    return (
        <main className="px-10 py-20 md:px-32 md:py-40">
            <section className="pb-36 md:grid grid-cols-2 gap-20">
                <div className="flex flex-col gap-4">
                    <header className="font-marcellus">
                        MEV SPECIALIST HOSPITAL
                    </header>
                    <h2 className="text-[42px] leading-[67.2px] font-normal">
                        Excellent Healthcare Service Delivery
                    </h2>
                    <p className="text-pry-text-color-2">
                        This facility was setup as a Tertiary centre with
                        Multiple Specialities, Mev Specialist Hospital has been
                        established to deliver excellent service in the Medical
                        field, with all departments supported by the latest
                        technology and state-of-the-art Medical equipment.
                    </p>
                    <div className="w-max">
                        <Button
                            onClick={(): void => console.log('clicked')}
                            label="More About Us"
                        />
                    </div>
                </div>
                <div className="mt-6 relative">
                    <Image
                        src={'/images/banner-card-image.jpeg'}
                        width={100}
                        height={100}
                        alt="family of father, mother and child"
                        className="w-full rounded-3xl"
                    />
                    <span className="absolute top-10 text-[#3D4195] text-[7.7px] leading-[10.1px] bg-white px-6 py-20 border-[1px] border-btn-color rounded-full">
                        Mev Specialist Hospital is a 5 star one stop facility
                        providing Comprehensive solution to most Health care
                        needs.
                    </span>
                </div>
            </section>
            <section className="service relative bg-black py-10 px-6 -mx-10 md:-mx-32">
                <div className="rounded-3xl text-center text-white py-24">
                    <div className="relative z-10 px-10">
                        <h2 className="text-2xl md:text-5xl font-light">
                            Why Choose Our Medical Services
                        </h2>
                        <p className="text-white py-10">
                            MEV has excellent technology right on site to meet
                            the needs of our obstetrical/gynecological patients
                        </p>
                        <Button
                            onClick={(): void => console.log('clicked')}
                            label="Schedule Appointment"
                        />
                    </div>
                </div>
                <div className="pt-10">
                    <ul className="flex flex-col md:flex-row gap-4">
                        {serviceOne.map((service, index) => (
                            <li
                                key={index}
                                className="relative flex items-center justify-center rounded-3xl bg-cover bg-center h-96 w-full uppercase text-white text-center text-4xl font-marcellus"
                                style={{
                                    backgroundImage: `url(${service.image})`,
                                }}
                            >
                                <span className='relative z-10'>{service.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section>
                <header className="font-marcellus">Our Services</header>
                <div>
                    <div>
                        <h2>Services We Offer</h2>
                        <p>
                            The hospital offers a calm ambience to help you
                            recover from the discomfort that comes with ailment
                        </p>
                        <Button
                            onClick={(): void => console.log('clicked')}
                            label="Schedule Appointment"
                        />
                    </div>
                    <div>
                        <Button
                            onClick={(): void => console.log('clicked')}
                            label="Explore other services"
                        />
                    </div>
                </div>
                <div>
                    {mainServices.map((service, index) => (
                        <div key={index}>
                            <h3>{service.title}</h3>
                            <p>{service.content}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <div>
                    <header>Get in Touch</header>
                    <div>
                        <h2>We’d Love to Hear From You</h2>
                        <p>
                            For urgent care, simply call our 24 hours emergency
                            hotlines
                        </p>
                    </div>
                    <div>
                        {contactDetails.map((contact, index) => (
                            <div key={index}>
                                <contact.icon />
                                <h3>{contact.title}</h3>
                                <p>{contact.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <form action="">
                    <div>
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="">Message</label>
                        <textarea
                            name=""
                            id=""
                            placeholder="Enter your message"
                        ></textarea>
                    </div>
                    <Button
                        onClick={(): void => console.log('clicked')}
                        label="Send Message"
                    />
                </form>
            </section>
            <section>
                <header>our team</header>
                <div>
                    <h2>Meet Our Medical Specialists</h2>
                    <p>
                        Our Doctors are well trained, licensed and experienced
                    </p>
                </div>
                <div>
                    {doctors.map((doctor, index) => (
                        <figure key={index}>
                            <Image
                                src={doctor.image}
                                alt={doctor.name}
                                width={100}
                                height={100}
                            />
                            <figcaption>
                                <p>{doctor.name}</p>
                                <p>{doctor.title}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </section>
        </main>
    );
}
