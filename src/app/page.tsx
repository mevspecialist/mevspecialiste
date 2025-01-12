'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaCheckCircle, FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';
import { Contact } from '@/components/Contact';
import { DoctorCard } from '@/components/DoctorCard';
import { BlogCard } from '@/components/BlogCard';
import ServiceCard from '@/components/ServiceCard';
import { AppointmentLink } from '@/components/AppointmentLink';

const serviceOne: { title: string; image: string }[] = [
    { title: 'Operating Room', image: '/images/landingpage/why-choose-2.jpeg' },
    { title: 'Reception', image: '/images/landingpage/why-choose-3.jpeg' },
    { title: 'Inpatient Care', image: '/images/landingpage/why-choose-4.jpeg' },
    { title: 'View More', image: '' },
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

const faq: { question: string; answer: string }[] = [
    {
        question: 'What is dental care?',
        answer: 'Tooth valuable resources, dental care should take us regularly to stay healthy. Oral Health Overview. Good dental or oral care is important to maintaining healthy teeth, gums, and tongue. Oral problems, including bad breath, dry mouth, canker or cold sores, TMD, tooth decay, or thrush are all treatable with proper diagnosis and care.',
    },
    {
        question: 'Do you offer emergency care?',
        answer: 'Yes, we offer emergency care services. Our emergency care services are available 24/7. We have a team of doctors and nurses who are always available to attend to you in case of an emergency.',
    },
    {
        question: 'Do you take my insurance?',
        answer: 'We accept most insurance plans. Please call our office to verify acceptance of your plan. Qualifications for insurance coverage may differ due to the uniqueness of each procedure.',
    },
];

const blogPosts: { title: string; image: string; content: string }[] = [
    {
        title: ' Childhood Nutrition: Feeding Your Child For Optimal Development',
        image: '/images/landingpage/blog-1.jpeg',
        content:
            'Your kids are growing fast, and what they eat matters! As parents, we can choose…',
    },
    {
        title: 'Lifestyle Changes For Cancer Prevention: A Journey Towards Wellness',
        image: '/images/landingpage/blog-2.jpeg',
        content: 'Lifestyle Changes For Cancer Prevention: A Journey Towards Wellness',
    },
    {
        title: 'The Diabetes Fight: How To Manage Your Blood Sugar Levels',
        image: '/images/landingpage/blog-3.png',
        content: 'The Diabetes Fight: How To Manage Your Blood Sugar Levels',
    },
];

export default function Home() {
    const [showFaQ, setShowFaQ] = useState<number>(0);

    return (
        <main className="px-10 md:px-32">
            <article className="banner relative px-10 md:px-24 -mx-10 md:-mx-32">
                <div className="banner-content-home flex flex-col py-40 relative z-10">
                    <div className="order-2">
                        <h1 className="font-extralight font-marcellus text-4xl md:text-[4rem] md:leading-[87.42px] relative w-max">
                            Welcome to MEV <br /> Specialist Hospital
                        </h1>
                        <p className="py-6 text-white">
                            5 star one stop facility providing <br />
                            Comprehensive solution to most Health care needs
                        </p>
                        <AppointmentLink />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between py-10 order-1 font-light">
                        <span className="uppercase font-marcellus order-2 md:order-none mt-6 md:mt-0">
                            MEV Specialist Hospital
                        </span>
                        <span>Watch Our Story</span>
                    </div>
                    <div className="order-3 md:flex justify-between items-baseline">
                        <div className="banner-card flex flex-col order-2 my-6 lg:my-0 lg:-mt-36">
                            <div className="order-2 p-6">
                                <header className="mb-4">Core Services</header>
                                <ul className="font-light text-sm">
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
                            <span className="text-btn-color font-marcellus mr-1">5/5</span> Rating
                            From Our Clients
                        </p>
                    </div>
                </div>
            </article>
            {/* Brief about us */}
            <section className="py-36 lg:grid grid-cols-2 gap-36">
                <div className="flex flex-col gap-4">
                    <header className="header-star font-marcellus">MEV SPECIALIST HOSPITAL</header>
                    <h2 className="text-[42px] leading-[67.2px] font-normal">
                        Excellent Healthcare Service Delivery
                    </h2>
                    <p className="text-pry-text-color-2">
                        This facility was setup as a Tertiary centre with Multiple Specialities, Mev
                        Specialist Hospital has been established to deliver excellent service in the
                        Medical field, with all departments supported by the latest technology and
                        state-of-the-art Medical equipment.
                    </p>
                    <div className="w-max">
                        <Link
                            href="/about-us"
                            className="bg-btn-color text-white px-8 py-3 rounded-full font-light"
                        >
                            More About Us
                        </Link>
                    </div>
                </div>
                <div className="mt-6 relative">
                    <Image
                        src={'/images/banner-card-image.jpeg'}
                        width={100}
                        height={200}
                        alt="family of father, mother and child"
                        className="w-full h-full rounded-3xl object-cover"
                        quality={100}
                    />
                    <span className="absolute -right-8 w-48 -top-10 text-[8px] leading-3 py-6 px-10 lg:top-10 lg:w-2/3 lg:-left-28 text-[#3D4195] lg:text-[14px] lg:leading-[19.5px] bg-white lg:px-6 lg:py-10 border-[1px] border-btn-color rounded-full font-marcellus">
                        Mev Specialist Hospital is a 5 star one stop facility providing
                        Comprehensive solution to most Health care needs.
                        <FaCheckCircle className="absolute z-20 -top-4 left-4 text-btn-color w-10 h-10" />
                    </span>
                </div>
            </section>
            {/* service introduction */}
            <section className="service relative bg-black py-10 px-6 -mx-10 md:-mx-32">
                <div className="rounded-3xl text-center text-white py-24">
                    <div className="relative z-10 px-10">
                        <h2 className="text-2xl md:text-5xl font-marcellus font-light">
                            Why Choose Our Medical Services
                        </h2>
                        <p className="text-white py-10">
                            MEV has excellent technology right on site to meet the needs of our
                            obstetrical/gynecological patients
                        </p>
                        <AppointmentLink />
                    </div>
                </div>
                <div className="pt-10">
                    <ul className="flex flex-col lg:flex-row gap-4">
                        {serviceOne.map((service, index) => (
                            <li
                                key={index}
                                className="relative flex items-center justify-center rounded-3xl bg-cover bg-center h-96 w-full uppercase text-white text-center text-4xl font-marcellus"
                                style={{
                                    backgroundImage: `url(${service.image})`,
                                }}
                            >
                                {index === serviceOne.length - 1 ? (
                                    <Link href="/services" className="relative z-10">
                                        {service.title}
                                    </Link>
                                ) : (
                                    <span className="relative z-10">{service.title}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            {/* Main services */}
            <section className="py-20 relative">
                <header className="header-star font-marcellus uppercase text-center lg:text-left mb-6">
                    Our Services
                </header>
                <div className="flex flex-col md:flex-row justify-between md:items-baseline">
                    <div className="text-center lg:text-left">
                        <h2>Services We Offer</h2>
                        <p className="pt-6 pb-4 lg:w-1/2">
                            The hospital offers a calm ambience to help you recover from the
                            discomfort that comes with ailment
                        </p>
                        <AppointmentLink />
                    </div>
                    <div className="absolute bottom-2 self-center lg:static">
                        <Link
                            href="/services"
                            className="bg-btn-color text-white px-8 py-3 rounded-full font-light"
                        >
                            Explore other services
                        </Link>
                    </div>
                </div>
                <div className="relative grid lg:grid-cols-3 gap-4 py-6">
                    {mainServices.map((service, index) => (
                        <ServiceCard key={index} title={service.title} content={service.content} />
                    ))}
                </div>
            </section>
            <Contact />
            {/* Team Doctors */}
            <section className="py-20">
                <header className="header-star font-marcellus uppercase text-center lg:text-left">
                    our team
                </header>
                <div className="text-center lg:text-left">
                    <h2 className="text-2xl font-semibold py-4">Meet Our Medical Specialists</h2>
                    <p>Our Doctors are well trained, licensed and experienced</p>
                </div>
                <div className="py-10 flex flex-col lg:flex-row gap-4">
                    {doctors.map((doctor, index) => (
                        <DoctorCard
                            key={index}
                            name={doctor.name}
                            title={doctor.title}
                            image={doctor.image}
                        />
                    ))}
                </div>
            </section>
            {/* Blog */}
            <section className="py-28">
                <div className="pb-6 flex flex-col justify-between text-center lg:text-left lg:flex-row ">
                    <div>
                        <h2 className="text-blog-color text-3xl font-bold">
                            Explore Our Blog Posts
                        </h2>
                        <p className="py-4">
                            Get updates on latest news, health and lifestyle tips
                        </p>
                    </div>
                    <div>
                        <Link
                            href={'/blog'}
                            className="bg-btn-color text-white px-8 py-3 rounded-full font-light"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 gap-4">
                    {blogPosts.map((post, index) => (
                        <BlogCard
                            key={index}
                            image={post.image}
                            title={post.title}
                            content={post.content}
                        />
                    ))}
                </div>
            </section>
            {/* FAQ */}
            <section className="py-20 lg:px-4 lg:flex gap-20 justify-between">
                <div className="lg:w-[50%]">
                    <header className="header-star font-marcellus uppercase text-center lg:text-left">
                        faq
                    </header>
                    <div>
                        <h2 className="text-center lg:text-left">Your Questions Answered</h2>
                        <div className="pt-6 pb-10">
                            {faq.map((question, index) => (
                                <div key={index} className="py-2">
                                    <button
                                        onClick={() =>
                                            setShowFaQ((prev) => (prev === index ? 0 : index))
                                        }
                                        className={`relative font-semibold text-left w-full px-6 py-3 bg-[#F8F8F8] hover:bg-hover-color rounded-2xl ${
                                            showFaQ === index && 'bg-hover-color'
                                        }`}
                                    >
                                        {question.question}
                                        <FaArrowDown
                                            className={`absolute text-btn-color top-1/2 transform -translate-y-1/2 right-6 ${
                                                showFaQ === index &&
                                                'transform rotate-180 text-black'
                                            }`}
                                        />
                                    </button>
                                    <p
                                        className={`px-4 pt-4 text-sm overflow-hidden transition-[max-height] duration-500 linear ${
                                            showFaQ === index ? 'max-h-56' : 'max-h-0'
                                        }`}
                                    >
                                        {question.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Image
                    src={'/images/landingpage/faq.jpeg'}
                    width={100}
                    height={100}
                    alt={''}
                    quality={100}
                    className="w-full h-full lg:w-[45%] lg:h-[500px] rounded-3xl"
                />
            </section>
        </main>
    );
}
