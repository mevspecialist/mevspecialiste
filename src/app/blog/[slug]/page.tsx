import { fetchStrapiData } from '@/utils/strapi';
import { PageBanner } from '@/components/PageBanner';
import Image from 'next/image';
import React from 'react';
import { Post } from '../page';

type tParams = Promise<{ slug: string[] }>; // this is the allowed way to use the params here

export default async function BlogPostPage(props: { params: tParams }) {
    const { slug } = await props.params;

    const response = await fetchStrapiData('blogs', {
        filters: {
            slug: {
                $eq: slug,
            },
        },
        populate: '*',
    });

    const data = response.data as Post[];

    if (response.error) {
        throw new Error(`Failed to fetch blog post: ${response.error.message}`);
    }

    const post = data[0];

    // const imageUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL + post?.image?.url;
    const imageUrl = post?.image?.url;

    return (
        <main className="px-10 md:px-32">
            <PageBanner
                title="Blog"
                content="Discover expert tips, health news, and wellness trends to support your journey to better living."
                image="/images/facilityhub/facilityhub.jpeg"
            />
            {!data || data.length === 0 ? (
                <h2 className="py-20 max-w-3xl mx-auto">Post not found</h2>
            ) : (
                <section className="py-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4">{post?.title}</h2>
                    <div className="max-w-xl">
                        <Image
                            src={imageUrl || '/placeholder.png'}
                            width={100}
                            height={100}
                            alt={post?.title}
                            className="mb-4 w-full rounded-3xl"
                        />
                    </div>
                    <article className="prose">
                        <p>{post?.content}</p>
                    </article>
                </section>
            )}
        </main>
    );
}
