import React from 'react';

const FacilityHub: React.FC = () => {
    return (
        <main className="px-10 md:px-32">
            <section className="banner bg-[url('/images/facilityhub/facilityhub.jpeg')] bg-cover bg-center relative px-10 md:px-40 -mx-10 md:-mx-32">
                <div className="banner-content flex flex-col py-60 relative z-10 text-center">
                    <h1 className="font-semibold">Facility Hub</h1>
                    <p className="text-[#FDFDFD] md:w-2/3 mx-auto pt-4">
                        Welcome to our Facility Hub, where state-of-the-art
                        infrastructure meets patient-centered care. Explore our
                        well-equipped spaces designed to provide comfort,
                        safety, and advanced medical support, ensuring the
                        highest quality of healthcare in a welcoming
                        environment.
                    </p>
                </div>
            </section>
            <section className="py-20"></section>
        </main>
    );
};

export default FacilityHub;
