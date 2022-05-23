import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import UserLayout from '../../views/layouts/userLayout'
import FormOne from '../../views/FormOne';
import { getPosts, getPostsData } from '../../lib/posts';
import Link from 'next/link';

export default function Aduan({ posts }) {
    console.log(posts)
    return (
        <UserLayout>
            <main className='my-10 flex justify-center'>
                <div className='flex flex-wrap md:px-36 px-16 w-full gap-4'>
                    {posts.map((post) => (
                        <div key={post.id} className='border pt-6 pb-10 px-8 rounded-lg md:w-80 w-full relative'>
                            <p className='flex justify-between text-slate-400 text-xs'>Dibuat: <span className='text-slate-600'>{post.created_at}</span></p>
                            <p className='mt-4 mb-2 text-slate-400'>Data pelapor</p>
                            <p className='text-slate-400 text-sm'>Nama: <span className='text-slate-600'>{post.nama}</span></p>
                            <p className='text-slate-400 text-sm'>Email: <span className='text-slate-600'>{post.email}</span></p>
                            <p className='mt-3'>Lorem ipsum dolor emet....</p>
                            <div className='right-2 bottom-2 text-sm text-blue-700 hover:text-white hover:bg-blue-700 rounded-full px-6 py-1 underline absolute duration-150'>
                                <Link href={`/aduan/${post.id}`} >selengkapnya</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </UserLayout>
    )
}

export async function getStaticProps() {
    const res = await getPosts();
    console.log(res);
    // const posts = await res.data;

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts: res,
        },
        revalidate: 10
    }
}
