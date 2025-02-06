import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';
import { Post } from '@/app/blog/page';

interface PostCardProps {
    post: Post;
}

export const BlogCard: React.FC<PostCardProps> = ({ post }) => {
    // const imageUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL + post?.image.url;
    const imageUrl = post?.image?.url;

    return (
        <article className="py-4 relative">
            <div className="blog rounded-3xl relative overflow-hidden">
                <Image
                    src={imageUrl}
                    width={100}
                    height={100}
                    alt="image alt"
                    className="w-full rounded-3xl object-cover inline-block"
                    quality={100}
                />
            </div>
            <div className="mt-6">
                <h3 className="text-xl font-semibold text-blog-color capitalize mb-4">
                    {post.title}
                </h3>
                <p className="desc text-[#2F2F2F] mb-4">{post?.content}</p>
                <Link href={`/blog/${post?.slug}`} className="text-[#3D4195]">
                    Read full
                </Link>
            </div>
            <div className="absolute top-36 left-10">
                <div className="flex gap-2 justify-center items-center">
                    <span className="text-white">
                        <FaCalendarAlt />
                    </span>
                    <span className="text-white">
                        {post?.date || new Date(post?.createdAt).toLocaleDateString()}
                    </span>
                </div>
            </div>
        </article>
    );
};
