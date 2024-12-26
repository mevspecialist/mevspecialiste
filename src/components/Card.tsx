import React from 'react';
import Image from 'next/image';
import './Card.css'; // some basic styles for the card

interface CardProps {
    imageSrc?: string;
    title: string;
    paragraph1: string;
    paragraph2?: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, paragraph1, paragraph2 }) => {
    return (
        <>
            {imageSrc && <Image src={imageSrc} alt={title} className="card-image" layout="responsive" width={500} height={300} />}
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-paragraph">{paragraph1}</p>
                {paragraph2 && <p className="card-paragraph">{paragraph2}</p>}
            </div>
        </>
    );
};

export default Card;