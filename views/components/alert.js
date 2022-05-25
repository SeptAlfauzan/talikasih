import React from 'react';

export default function Alert({ children, onClose }) {

    return (
        <div className='w-full absolute  mx-auto shadow-lg z-10'>
            <button className='absolute right-2 top-2 border-2 border-slate-600 w-5 h-5 rounded-full font-bold pb-1 flex items-center justify-center' onClick={onClose}>&times;</button>
            {children}
        </div>
    )
}