import React from 'react';
import Image from 'next/image';

interface DoctorCardProps {
    name: string;
    title: string;
    image: string;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ name, title, image }) => {
    return (
        <figure className="max-w-80 mx-auto md:mx-0">
            {image ? (
                <Image
                    src={image}
                    alt={name}
                    width={100}
                    height={100}
                    quality={100}
                    className="w-full h-96 rounded-xl object-cover"
                />
            ) : (
                <div className="max-w-80 h-96 rounded-xl flex items-center justify-center bg-gray-200">
                    <span className="text-gray-500">No Image Available</span>
                </div>
            )}
            <figcaption className="text-center py-4">
                <h4 className="text-xl mb-2">{name}</h4>
                <p className="font-marcellus text-xs">{title}</p>
            </figcaption>
        </figure>
    );
};
