import React from 'react';
import ServiceCard from '@/components/ServiceCard';

const allServices: { title: string; content: string }[] = [
    {
        title: 'Primary Care',
        content:
            'Our primary care services focus on your overall health and well-being. We provide preventive care, routine checkups, and personalized treatment plans to help you maintain a healthy lifestyle. Your health is our priority, and we’re here to support you every step of the way.',
    },
    {
        title: 'Paediatrics',
        content:
            'Our paediatric care is dedicated to ensuring the health and well-being of children from infancy through adolescence. We provide compassionate, specialized care tailored to meet the unique needs of every child, fostering their growth and development in a safe and nurturing environment.',
    },
    {
        title: 'Surgery',
        content:
            'Our diagnostic services provide accurate and timely results using advanced medical technology. From laboratory tests to imaging, we ensure precise evaluations to support effective treatment planning and comprehensive patient care.',
    },
    {
        title: 'Diagnostics services',
        content:
            'Our outpatient clinics offer accessible and specialized medical consultations, diagnosis, and treatments without the need for hospital admission. We prioritize efficient care tailored to meet your health needs.',
    },
    {
        title: 'Out patient clinics',
        content:
            'Our outpatient clinics offer accessible and specialized medical consultations, diagnosis, and treatments without the need for hospital admission. We prioritize efficient care tailored to meet your health needs.',
    },
    {
        title: 'Physiotherapy',
        content:
            'Our physiotherapy services focus on restoring movement, improving strength, and relieving pain through personalized treatment plans. We help patients achieve optimal physical health and functionality.',
    },
    {
        title: 'Cardiology',
        content:
            'Our cardiology services provide comprehensive heart care, from diagnosis to treatment. We offer expert management of heart conditions, ensuring personalized care for your cardiovascular health.',
    },
    {
        title: 'Orthopedic',
        content:
            'Our orthopedic services specialize in diagnosing and treating musculoskeletal conditions, including bone, joint, and muscle issues. Whether you’re recovering from injury or managing chronic pain, our experts provide personalized care to restore mobility and improve quality of life.',
    },
    {
        title: 'Health Screening',
        content:
            'Our health screening services offer comprehensive check-ups designed to detect potential health risks early. With personalized assessments, we provide peace of mind by identifying underlying health issues before they become serious, ensuring a healthier future for you and your loved ones.',
    },
    {
        title: 'Obstetrics & Gynaecology',
        content:
            'Our Obstetrics and Gynaecology services focus on the well-being of women at every stage of life. From routine check-ups to pregnancy care and specialized treatments, we provide compassionate and expert care to ensure the health of both mother and child.',
    },
    {
        title: 'Medical Tourism',
        content:
            'We offer world-class medical services for international patients seeking quality healthcare. Our medical tourism program ensures a seamless experience, with top-tier treatments, expert care, and assistance with travel arrangements, making your journey to better health convenient and comfortable.',
    },
    {
        title: 'Fitness',
        content:
            'Our fitness services are designed to help you achieve your health and wellness goals. With personalized workout plans, expert trainers, and a focus on overall well-being, we support you every step of the way in improving your fitness, strength, and vitality.',
    },
];

const ServicesPage: React.FC = () => {
    return (
        <main className="px-10 md:px-32">
            <section className="banner bg-[url('/images/services/services-banner.jpeg')] bg-cover bg-center relative px-10 md:px-40 -mx-10 md:-mx-32">
                <div className="banner-content flex flex-col py-60 relative z-10 text-center">
                    <h1 className="font-semibold">Services</h1>
                    <p className="text-[#FDFDFD] md:w-2/3 mx-auto pt-4">
                        Explore our wide range of services designed to meet your
                        health and wellness needs. From preventive care to
                        specialized treatments, we are committed to delivering
                        exceptional medical services for every stage of life.
                    </p>
                    {/* Add more content and components as needed */}
                </div>
            </section>
            <section className="py-20">
                <header className="font-marcellus">Our Services</header>
                <h2>Comprehensive Care Tailored for You</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                    {allServices.map((service) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            content={service.content}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default ServicesPage;
