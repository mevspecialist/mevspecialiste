import React from 'react';
import Image from 'next/image';

interface DoctorCardProps {
    name: string;
    title: string;
    image: string;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ name, title, image }) => {
    return (
        <figure className="w-full">
            <Image
                src={image}
                alt={name}
                width={100}
                height={100}
                quality={100}
                className="w-full h-80 rounded-xl object-fill"
            />
            <figcaption className="text-center py-4">
                <h4 className="text-xl mb-2">{name}</h4>
                <p className="font-marcellus text-xs">{title}</p>
            </figcaption>
        </figure>
    );
};
