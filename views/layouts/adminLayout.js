import React from 'react';
import Link from "next/link";
export default function AdminLayout({ children }) {
    return (
        <div className='flex flex-row min-h-full py-10 px-20' style={{
            background: '#F0F2F5'
        }}>

            <nav className='w-1/4 h-80 bg-white flex flex-col px-10 py-5'>
                <Link href={'/admin/posts'}>Laporan</Link>
                <Link href={'#'}>Member</Link>
            </nav>
            <div
                className='h-full overflow-y-auto w-3/4'
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