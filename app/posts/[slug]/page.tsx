import Client from '@/app/components/Client';
import Title from '@/app/components/title'
import React from 'react'

async function PostPage({ params }: { params: { slug: string } }) {
    const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://milanesa.vercel.app'
    const url = new URL(`/api?slug=${params.slug}`, baseUrl)
    const post = await fetch(url).then(res => res.json())

    if (!post) return <div>Post not found</div>;
    return (
        <div className='flex flex-col items-center justify-center '>
            <div className='my-24'>
                <Title title={post.title} />
                <h2 className='text-sm font-bold text-neutral-400'>by {post.author}</h2>
            </div>
            <h2 className='text-sm font-bold text-neutral-400 w-full'>Am | Dm7 | G7 | C▵</h2>
            <h2 className='text-sm font-bold text-neutral-400 w-full'>F▵ | Bø | E | E7</h2>
            <div className='w-full bg-white'>
                <Client measures={post.measures} />
            </div>
        </div>
    )
}

export default PostPage