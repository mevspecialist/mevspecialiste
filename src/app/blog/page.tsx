import React from 'react';
import { fetchStrapiData } from '@/utils/strapi';
import { BlogCard } from '@/components/BlogCard';
import { PageBanner } from '@/components/PageBanner';

export interface Post {
    id: number;
    documentId: string;
    title: string;
    content: string;
    slug: string | null;
    date: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
        name: string;
        url: string;
    };
}

const BlogPage: React.FC = async () => {
    const result = await fetchStrapiData('blogs', { populate: '*' });
    const posts = result?.data as Post[];

    if (!posts || posts?.length === 0) {
        return <div>There is no post at this moment.</div>;
    }

    return (
        <main className="px-10 md:px-32">
            <PageBanner
                title="Blog"
                content="Discover expert tips, health news, and wellness trends to support your journey to better living."
                image="/images/facilityhub/facilityhub.jpeg"
            />
            <section className="py-20">
                <div className="text-center lg:text-left mb-16">
                    <h2 className="text-3xl text-blog-color font-semibold py-4 lg:text-inherit ">
                        Explore Our Blog Posts
                    </h2>
                    <p>Get updates on latest news, health and lifestyle tips</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts?.map((post: Post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default BlogPage;
