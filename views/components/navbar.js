import React from 'react';
import Link from "next/dist/client/link";
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();
    const { pathname } = router;
    const [urlPath, setUrlPath] = React.useState('');
    const active = 'after:bg-purple-600 after:w-full';

    React.useEffect(() => {
        setUrlPath(pathname.replace('/', ''));
    }, [pathname])

    return (
        <div className='w-full flex items-end'>
            <ul className='w-full flex flex-row gap-5 justify-end px-40 pt-5'>
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
                    <div className={`${urlPath == 'member' ? active : 'after:w-0'} after:text-transparent  after:content-['*'] after:rounded-full after:-z-10  after:absolute after:left-0  whitespace-nowrap  group-hover:after:bg-purple-600 group-hover:after:w-full after:duration-200 group-hover:cursor-pointer`}>

                        <Link href={'/member'}>
                            <span className={`group-hover:text-white ${urlPath == 'member' ? 'text-white' : null}`}>
                                Daftar Member
                            </span>
                        </Link>
                    </div>
                </li>
                <li className="px-3 rounded-full group relative">
                    <div className={`${urlPath == 'aduan' ? active : 'after:w-0'} after:text-transparent  after:content-['*'] after:rounded-full after:-z-10  after:absolute after:left-0  whitespace-nowrap  group-hover:after:bg-purple-600 group-hover:after:w-full after:duration-200 group-hover:cursor-pointer`}>

                        <Link href={'/aduan'}>
                            <span className={`group-hover:text-white ${urlPath == 'aduan' ? 'text-white' : null}`}>
                                Daftar Aduan
                            </span>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    )
}