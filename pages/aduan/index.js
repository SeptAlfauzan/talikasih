import React from 'react';
import UserLayout from '../../views/layouts/userLayout'
import { getPosts, getPostsData } from '../../lib/posts';
import Link from 'next/link';
import { DatePicker } from 'antd';

export default function Aduan({ data }) {
    const [posts, setPosts] = React.useState([]);
    const datePicker = React.useRef(null);


    React.useEffect(() => {
        setPosts(data);
    }, [data])

    const handleChangeDatePicker = (e) => e == null ? setPosts(data) : null;

    const handleSelectDatePicker = (e) => {
        const selectedDate = e.format('YYYY-MM-DD');
        console.log(selectedDate)
        const filtered = data.filter(post => post.created_at.slice(0, 10) == selectedDate);
        console.log(filtered)
        setPosts(filtered)
    }
    if (!data) return null;
    return (
        <UserLayout>
            <main className='min-h-screen mt-10 md:px-36 px-16 with-background'>
                <div className='flex justify-between border-b-2'>
                    <h3 className='text-2xl'>Daftar Aduan</h3>
                    <div className='flex flex-col w-40 ml-auto'>
                        <label className='mr-5'>Filter tanggal</label>
                        <DatePicker onSelect={handleSelectDatePicker} onChange={handleChangeDatePicker} ref={datePicker} />
                    </div>
                </div>
                <div className='flex flex-wrap  w-full'>
                    {posts.length == 0 && (
                        <p className='text-center w-full text-2xl'>Tidak ada aduan</p>
                    )}
                    {posts.map((post) => (
                        <div key={post.id} className='lg:w-1/3 md:w-1/2 w-full p-1'>

                            <div className='bg-white border pt-6 pb-10 px-8 rounded-lg  relative mb-2'>
                                <p className='flex justify-between text-slate-400 text-xs'>Dibuat: <span className='text-slate-600'>{post.created_at.slice(0, 10)}</span></p>
                                <p className='mt-4 mb-2 text-slate-400'>Data pelapor</p>
                                <p className='text-slate-400 text-sm'>Nama: <span className='text-slate-600'>{post.nama}</span></p>
                                <p className='text-slate-400 text-sm'>Email: <span className='text-slate-600'>{post.email}</span></p>
                                <p className='mt-3'>Lorem ipsum dolor emet....</p>
                                <div className='right-2 bottom-2 text-sm text-blue-700 hover:text-white hover:bg-blue-700 rounded-full px-6 py-1 underline absolute duration-150'>
                                    <Link href={`/aduan/${post.id}`} >selengkapnya</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </UserLayout>
    )
}

export async function getStaticProps() {
    try {
        const res = await getPosts();
        console.log(res);
        // const posts = await res.data;

        // By returning { props: { posts } }, the Blog component
        // will receive `posts` as a prop at build time
        return {
            props: {
                data: res,
            },
            revalidate: 1
        }
    } catch (error) {
        console.log(error)
        return {
            props: {
                data: [],
            },
            revalidate: 1
        }
    }
}
