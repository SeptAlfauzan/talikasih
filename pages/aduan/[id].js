import React from 'react';
import { getSinglePost } from '../../lib/posts';

export default function Post({ post }) {
    return <>
        {post.id}
        {post.created_at}
        {post.name}
        {post.content}
    </>
}

export async function getStaticProps({ params }) {
    const post = await getSinglePost(params.id);
    console.log(post)
    return {
        props: {
            post
        },
        revalidate: 10
    }
}