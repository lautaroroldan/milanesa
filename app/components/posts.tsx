import Link from 'next/link';
import React from 'react'

interface Post {
    id: number;
    title: string;
    slug: string;
    author: string;
    date: string;
}

export const posts: Post[] = [
    {
        id: 1,
        title: "I will survive",
        slug: "i-will-survive",
        author: "Gloria Gaynor",
        date: "2024-01-01",
    },
    {
        id: 2,
        title: "I like it",
        slug: "i-like-it",
        author: "DeBarge",
        date: "2024-01-02",
    }
]

const PostItem = ({ post }: { post: Post }) => {
    const year = post.date.split('-')[0];
    const month = post.date.split('-')[1];
    return (
        <li className='flex gap-8 text-neutral-500'>
            <div className='flex items-center gap-1'>
                <p>{year}</p>
                <p>/</p>
                <p>{month}</p>
            </div>
            <Link className='underline text-neutral-400 hover:text-secondary/35 transition-colors' href={`/posts/${post.slug}`}>{post.title}</Link>
        </li>
    )
}

function Posts() {


    return (
        <ul>
            {posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </ul>
    )
}

export default Posts