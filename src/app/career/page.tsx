import { PageBanner } from '@/components/PageBanner';

const Career: React.FC = async () => {
    return (
        <main className="px-10 md:px-32">
            <PageBanner
                title="Career"
                content="Build a fulfilling career with us! Explore opportunities to grow, innovate, and make a difference in the healthcare industry. Join our mission to provide exceptional care."
                image="/images/career/career-banner.jpeg"
            />
            <section className="py-20">
                <h2 className="text-2xl font-bold mb-4">Career Opportunities</h2>
                <div>
                    <p>No job openings at the moment. Check back later!</p>
                </div>
            </section>
        </main>
    );
};

export default Career;
