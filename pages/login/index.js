import axios from 'axios';
import React from 'react';
import InputFloatingLabel from '../../views/components/inputFloatingLabel';

export default function Login(props) {
    const form = React.useRef(null);

    const parseFormToObj = () => {
        return Object.assign(...[...form.current.querySelectorAll('.input')].map(input => ({ [input.name]: input.value })));
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        const input = parseFormToObj();
        console.log(input);
        await axios.post('/api/auth', input);
    }

    return (
        <div className='min-h-screen min-w-full bg-blue-50 flex justify-center items-center'>
            <form onSubmit={handleLogin} ref={form} className='bg-white flex flex-wrap md:w-1/4 w-3/4 px-10 py-5 rounded relative '>
                <h3 className='text-xl w-full'>Login to Dashboard</h3>
                <InputFloatingLabel type='text' name='username' label='Username' />
                <InputFloatingLabel type='password' name='password' label='Password' />
                <button className='bg-purple-600 w-full text-white py-2 rounded mt-3'>Login</button>
            </form>
        </div>
    );
}