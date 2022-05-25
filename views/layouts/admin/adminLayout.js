import React from 'react';
export default function AdminLayout({ children }) {
    return (
        <div style={{
            background: '#F0F2F5'
        }}>

            <nav className='w-1/4 h-full bg-white'>
                <p> a</p>
            </nav>
            <div
                className='h-full overflow-y-auto'
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