import React from 'react';

interface ServiceCardProps {
    title: string;
    content: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, content }) => {
    return (
        <div
            key={title}
            className="px-10 py-10 text-xl bg-[#F8F8F8] rounded-xl hover:bg-hover-color hover:text-[#3C3C3C] transition-colors duration-200"
        >
            <h3>{title}</h3>
            <p className="py-2 text-[13px] leading-5">{content}</p>
        </div>
    );
};

export default ServiceCard;
