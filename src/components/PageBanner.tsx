import React from 'react';

interface PageBannerProps {
    title: string;
    content: string;
    image: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
    title,
    content,
    image,
}) => {
    return (
        <section
            className="banner bg-cover bg-center relative px-10 md:px-40 -mx-10 md:-mx-32"
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className="banner-content flex flex-col py-60 relative z-10 text-center">
                <h1 className="font-semibold">{title}</h1>
                <p className="text-[#FDFDFD] md:w-2/3 mx-auto pt-4">
                    {content}
                </p>
            </div>
        </section>
    );
};
