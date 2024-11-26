import Link from 'next/link';
import React from 'react'
import data from '../db/data.json'
const PostItem = ({ post }: { post: typeof data[0] }) => {
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
            {data.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </ul>
    )
}

export default Posts