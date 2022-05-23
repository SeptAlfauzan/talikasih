import axios from 'axios';
import React from 'react';
import Alert from './components/alert';

export default function FormOne() {
    const [nameClicked, setNameClicked] = React.useState(false);
    const [emailClicked, setEmailClicked] = React.useState(false);
    const [isSaved, setIsSaved] = React.useState(null);
    const [showAlert, setShowAlert] = React.useState(false);
    const form = React.useRef(null);

    const parseFormToObj = () => {
        return Object.assign(...[...form.current.querySelectorAll('.input')].map(input => ({ [input.name]: input.value })));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setShowAlert(false)

        const obj = parseFormToObj();
        const response = await axios.post('/api/post', obj);
        response.status == 200 ? setIsSaved(true) : setIsSaved(false);

        setShowAlert(true)
    }

    return (
        <>
            <form className='flex flex-col md:w-2/4 w-3/4 relative px-10 mx-auto rounded-lg shadow-xl py-8 mt-10' ref={form} onSubmit={handleSubmit}>
                {showAlert && (
                    <Alert onClose={() => setShowAlert(false)} >
                        <div className={`w-full border rounded-lg py-3 px-10 ${isSaved ? 'border-emerald-400 bg-emerald-400' : 'border-red-400 bg-red-400'}`}>
                            {isSaved ? (
                                <p>Berhasil mengirim aduan</p>
                            ) : (
                                <p>Gagal mengirim aduan</p>
                            )}
                        </div>
                    </Alert>
                )}
                <h2 className='mt-14 text-xl mb-3 font-bold'>Isi Laporan Pengaduan</h2>
                <div className='mb-3'>
                    <label>Nama</label>
                    <input name='nama' required type='text' onBlur={() => setNameClicked(true)} className={`input peer border-2  w-full focus:border-purple-300 focus:bg-purple-50 ${nameClicked ? 'invalid:text-red-500 invalid:border-red-500' : null} outline-none rounded-lg px-3 py-1`} />
                    <p className={`mt-2 text-xs  invisible ${nameClicked ? 'peer-invalid:visible' : null} text-pink-600 text-sm`}>
                        Nama harus diisi
                    </p>
                </div>
                <div className='mb-3'>
                    <label>Email</label>
                    <input name='email' type='email' required onBlur={() => setEmailClicked(true)} className={`input peer border-2  w-full focus:border-purple-300 focus:bg-purple-50  ${emailClicked ? ' invalid:text-red-500 invalid:border-red-500' : null} outline-none rounded-lg px-3 py-1`} />
                    <p className={`mt-2 text-xs  invisible  ${emailClicked ? 'peer-invalid:visible' : null} text-pink-600 text-sm`}>
                        Email tidak valid
                    </p>
                </div>
                <div className='mb-5'>
                    <label>Laporan</label>
                    <textarea name='laporan' className='input border-2  w-full focus:border-purple-300 focus:bg-purple-100 invalid:text-red-500 invalid:border-red-500 outline-none rounded-lg px-3 py-1' />
                </div>

                <button className='bg-purple-500 py-3 text-white rounded-lg hover:bg-purple-700'>Submit Laporan</button>
            </form>
        </>
    )
}