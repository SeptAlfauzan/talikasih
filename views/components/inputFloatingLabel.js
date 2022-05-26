import React from 'react';

export default function InputFloatingLabel({ type, name, label }) {
    return (
        <div className='relative w-full h-10 mb-5'>
            <input type={type} required name={name} className='input z-10 absolute block py-2 px-3 w-full border rounded peer bg-transparent' placeholder=' ' />
            <label htmlFor={name} className='input text-md text-slate-400 bg-white absolute left-3 peer-focus:-top-3 peer-placeholder-shown:top-2 -top-3 transition-all duration-150 peer-focus:text-black peer-focus:z-10'>
                {label}
            </label>
        </div>
    )
}