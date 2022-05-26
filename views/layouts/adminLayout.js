import React from 'react';
import Link from "next/link";
import { FileSearchOutlined, HomeOutlined, LogoutOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
export default function AdminLayout({ children }) {
    return (
        <div className='flex flex-row min-h-full py-10 md:px-20 px-10' style={{
            background: '#F0F2F5'
        }}>

            <nav className='md:w-1/4 h-80 z-10 bg-white flex flex-col px-10 py-5 gap-2 rounded-lg'>
                <Link href={'/admin'}>
                    <div className='flex flex-row cursor-pointer hover:text-blue-500 gap-3 text-lg items-center'>
                        <HomeOutlined />
                        Dashboard
                    </div>
                </Link>
                <Link href={'/admin/posts'}>
                    <div className='flex flex-row cursor-pointer hover:text-blue-500 gap-3 text-lg items-center'>
                        <FileSearchOutlined />
                        Laporan
                    </div>
                </Link>
                <Link href={'/admin/members'}>
                    <div className='flex flex-row cursor-pointer hover:text-blue-500 gap-3 text-lg items-center'>
                        <UserOutlined />
                        Member
                    </div>
                </Link>
                <Link href={'/admin/members'}>
                    <div className='flex flex-row cursor-pointer hover:text-blue-500 gap-3 text-lg items-center'>
                        <LogoutOutlined />
                        Logout
                    </div>
                </Link>
                <div className='md:hidden absolute border  bg-white w-10 h-10 flex items-center justify-center rounded-md right-0'>
                    <MenuOutlined />
                </div>
            </nav>
            <div
                className='h-full overflow-y-auto md:w-3/4 w-full'
                style={{
                    height: '100vh',
                    padding: '0 24px',
                }}
            >
                {children}
            </div>
        </div>
    )
}