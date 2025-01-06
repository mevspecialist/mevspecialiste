import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    image: string;
    title: string;
    content: string;
}

export const BlogCard: React.FC<CardProps> = ({ title, content, image }) => {
    return (
        <article className="py-4">
            <Image
                src={image}
                width={100}
                height={100}
                alt="image alt"
                className="w-full rounded-3xl object-cover inline-block"
                quality={100}
            />
            <Link href={`/blog/${title}`}>
                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-blog-color capitalize mb-4">
                        {title}
                    </h3>
                    <p className="text-[#2F2F2F]">{content}</p>
                </div>
            </Link>
        </article>
    );
};
