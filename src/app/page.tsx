'use client';
import Button from '@/components/Button';
import Image from 'next/image';

export default function Home() {
    return (
        <main className="px-14 py-20 md:px-32 md:py-40">
            <section className="md:grid grid-cols-2 gap-20">
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
                            onClick={() => console.log('clicked')}
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
        </main>
    );
}
