import React from 'react';
import Link from "next/dist/client/link";
import { useRouter } from 'next/router';
import Image from 'next/image';
import { MenuOutlined } from '@ant-design/icons';

export default function Navbar() {
    const router = useRouter();
    const { pathname } = router;
    const [urlPath, setUrlPath] = React.useState('');
    const active = 'after:bg-purple-600 after:w-full';
    const [hidden, setHidden] = React.useState(true);

    const toggleNavbar = () => setHidden(!hidden);

    React.useEffect(() => {
        setUrlPath(pathname.replace('/', ''));
    }, [pathname])

    return (
        <div className={`w-screen flex z-50 pt-3 md:px-40 px-3 md:justify-between md:shadow-none shadow-lg fixed bg-white ${hidden ? 'h-20' : 'h-auto'} transition-all duration-150`} >
            <a href={'/'} className='flex flex-row md:items-center md:relative absolute md:left-0 left-3'>
                <div className='relative w-14 h-14'>

                    <Image src='/icon with text.png' alt="logo" layout='fill' objectFit='contain' />
                </div>
                <h3 className='text-3xl text-red-500 md:block hidden'>Talikasih</h3>
            </a>
            <button onClick={toggleNavbar} className='md:hidden flex items-center justify-center bg-white z-10 w-12 h-12 absolute right-6 top-3 rounded'>
                <MenuOutlined className='text-2xl' />
            </button>
            <ul className={`${hidden ? 'hidden' : null} w-full md:flex md:flex-row flex-col gap-5 justify-end md:pt-5 pt-20 md:pb-0 pb-10 md:pr-auto pr-6 z-0`}>
                <li className="px-3 rounded-full group relative">
                    <div className={`${urlPath == '' ? active : 'after:w-0'} after:text-transparent  after:content-['*'] after:rounded-full after:-z-10  after:absolute after:left-0 whitespace-nowrap  group-hover:after:bg-purple-600 group-hover:after:w-full after:duration-200 group-hover:cursor-pointer`}>
                        <Link href={'/'}>
                            <span className={`group-hover:text-white ${urlPath == '' ? 'text-white' : null}`}>
                                Home
                            </span>
                        </Link>
                    </div>
                </li>
                <li className="px-3 rounded-full group relative">
                    <div className={`${urlPath == 'laporkan' ? active : 'after:w-0'} after:text-transparent  after:content-['*'] after:rounded-full after:-z-10  after:absolute after:left-0  whitespace-nowrap  group-hover:after:bg-purple-600 group-hover:after:w-full after:duration-200 group-hover:cursor-pointer`}>

                        <Link href={'/laporkan'}>
                            <span className={`group-hover:text-white ${urlPath == 'laporkan' ? 'text-white' : null}`}>
                                Buat Aduan
                            </span>
                        </Link>
                    </div>
                </li>
                <li className="px-3 rounded-full group relative">
                    <div className={`${urlPath == 'donasi' ? active : 'after:w-0'} after:text-transparent  after:content-['*'] after:rounded-full after:-z-10  after:absolute after:left-0  whitespace-nowrap  group-hover:after:bg-purple-600 group-hover:after:w-full after:duration-200 group-hover:cursor-pointer`}>

                        <Link href={'/donasi'}>
                            <span className={`group-hover:text-white ${urlPath == 'donasi' ? 'text-white' : null}`}>
                                Donasi
                            </span>
                        </Link>
                    </div>
                </li>
                <li className="px-3 rounded-full group relative">
                    <div className={`${urlPath == 'member' ? active : 'after:w-0'} after:text-transparent  after:content-['*'] after:rounded-full after:-z-10  after:absolute after:left-0  whitespace-nowrap  group-hover:after:bg-purple-600 group-hover:after:w-full after:duration-200 group-hover:cursor-pointer`}>

                        <Link href={'/member'}>
                            <span className={`group-hover:text-white ${urlPath == 'member' ? 'text-white' : null}`}>
                                Daftar Member
                            </span>
                        </Link>
                    </div>
                </li>
                {/* <li className="px-3 rounded-full group relative">
                    <div className={`${urlPath == 'aduan' ? active : 'after:w-0'} after:text-transparent  after:content-['*'] after:rounded-full after:-z-10  after:absolute after:left-0  whitespace-nowrap  group-hover:after:bg-purple-600 group-hover:after:w-full after:duration-200 group-hover:cursor-pointer`}>

                        <Link href={'/aduan'}>
                            <span className={`group-hover:text-white ${urlPath == 'aduan' ? 'text-white' : null}`}>
                                Daftar Aduan
                            </span>
                        </Link>
                    </div>
                </li> */}
            </ul>
        </div>
    )
}