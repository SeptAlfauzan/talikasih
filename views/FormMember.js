import axios from 'axios';
import React from 'react';
import Alert from './components/alert';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const LoadingComp = <LoadingOutlined style={{ fontSize: 24 }} spin />;


export default function FormMember() {
    const [nameClicked, setNameClicked] = React.useState(false);
    const [fromClicked, setFromClicked] = React.useState(false);
    const [semesterClicked, setSemesterClicked] = React.useState(false);
    const [majorClicked, setMajorClicked] = React.useState(false);
    const [addressClicked, setAddressClicked] = React.useState(false);
    const [reasonClicked, setReasonClicked] = React.useState(false);

    const [isSaved, setIsSaved] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [showAlert, setShowAlert] = React.useState(false);
    const form = React.useRef(null);

    const handleInputsClicked = (arg) => {
        setNameClicked(arg)
        setEmailClicked(arg)
    }

    const parseFormToObj = () => {
        return Object.assign(...[...form.current.querySelectorAll('.input')].map(input => ({ [input.name]: input.value })));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setShowAlert(false)
        setIsLoading(true)
        try {

            const obj = parseFormToObj();
            console.log(obj)
            obj.semester = Number(obj.semester);
            const response = await axios.post('/api/member', obj);
            response.status == 200 ? setIsSaved(true) : setIsSaved(false);

            handleInputsClicked(false);
            form.current.reset();
        } catch (error) {
            console.log(error.message);
        }

        setIsLoading(false)
        setShowAlert(true)
        // e.reset();
    }

    return (
        <>
            <div className='md:w-2/4 w-3/4 relative mx-auto bottom-5'>
                {showAlert && (
                    <Alert onClose={() => setShowAlert(false)} >
                        <div className={`w-full border rounded-lg py-3 px-10 ${isSaved ? 'border-emerald-400 bg-emerald-400' : 'border-red-400 bg-red-400'}`}>
                            {isSaved ? (
                                <span>Berhasil mendaftar</span>
                            ) : (
                                <span>Gagal mendaftar</span>
                            )}
                        </div>
                    </Alert>
                )}
            </div>
            <form className='bg-white flex flex-wrap md:w-2/4 w-3/4 relative px-10 mx-auto rounded-lg shadow-xl py-8 mt-10' ref={form} onSubmit={handleSubmit}>

                <h2 className='text-xl mb-3 font-bold'>Isi Form Daftar Member</h2>
                <div className='mb-3 w-1/2 p-1'>
                    <label>Nama</label>
                    <input name='name' required type='text' onBlur={() => setNameClicked(true)} className={`input peer border-2  w-full focus:border-purple-300 focus:bg-purple-50 ${nameClicked ? 'invalid:text-red-500 invalid:border-red-500' : null} outline-none rounded-lg px-3 py-1`} />
                    <p className={`mt-2 text-xs  invisible ${nameClicked ? 'peer-invalid:visible' : null} text-pink-600 text-sm`}>
                        Nama harus diisi
                    </p>
                </div>
                <div className='mb-3 w-1/2 p-1'>
                    <label>Instansi</label>
                    <input name='from' required type='text' onBlur={() => setFromClicked(true)} className={`input peer border-2  w-full focus:border-purple-300 focus:bg-purple-50 ${fromClicked ? 'invalid:text-red-500 invalid:border-red-500' : null} outline-none rounded-lg px-3 py-1`} />
                    <p className={`mt-2 text-xs  invisible ${fromClicked ? 'peer-invalid:visible' : null} text-pink-600 text-sm`}>
                        Instansi harus diisi
                    </p>
                </div>
                <div className='mb-3 w-1/2 p-1'>
                    <label>Semester</label>
                    <input name='semester' required type='number' onBlur={() => setSemesterClicked(true)} className={`input peer border-2  w-full focus:border-purple-300 focus:bg-purple-50 ${semesterClicked ? 'invalid:text-red-500 invalid:border-red-500' : null} outline-none rounded-lg px-3 py-1`} />
                    <p className={`mt-2 text-xs  invisible ${semesterClicked ? 'peer-invalid:visible' : null} text-pink-600 text-sm`}>
                        Semester harus diisi
                    </p>
                </div>
                <div className='mb-3 w-1/2 p-1'>
                    <label>Prodi</label>
                    <input name='major' required type='text' onBlur={() => setMajorClicked(true)} className={`input peer border-2  w-full focus:border-purple-300 focus:bg-purple-50 ${majorClicked ? 'invalid:text-red-500 invalid:border-red-500' : null} outline-none rounded-lg px-3 py-1`} />
                    <p className={`mt-2 text-xs  invisible ${majorClicked ? 'peer-invalid:visible' : null} text-pink-600 text-sm`}>
                        Prodi harus diisi
                    </p>
                </div>
                <div className='mb-3 w-full p-1'>
                    <label>Alamat</label>
                    <input name='address' type='text' required onBlur={() => setAddressClicked(true)} className={`input peer border-2  w-full focus:border-purple-300 focus:bg-purple-50  ${addressClicked ? ' invalid:text-red-500 invalid:border-red-500' : null} outline-none rounded-lg px-3 py-1`} />
                    <p className={`mt-2 text-xs  invisible  ${addressClicked ? 'peer-invalid:visible' : null} text-pink-600 text-sm`}>
                        Alamat harus diisi
                    </p>
                </div>
                <div className='mb-5 w-full p-1'>
                    <label>Alasan mendaftar</label>
                    <textarea name='reason' required onBlur={() => setReasonClicked(true)} className={`input peer border-2  w-full focus:border-purple-300 focus:bg-purple-100 ${reasonClicked ? ' invalid:text-red-500 invalid:border-red-500' : null} outline-none rounded-lg px-3 py-1`} />
                    <p className={`mt-2 text-xs  invisible ${reasonClicked ? 'peer-invalid:visible' : null} text-pink-600 text-sm`}>
                        Alasan harus diisi
                    </p>
                </div>

                <button className='w-full bg-purple-500 py-3 text-white rounded-lg hover:bg-purple-700'>
                    {isLoading ? (
                        <Spin indicator={LoadingComp} />
                    ) : (
                        <span>Submit Laporan</span>
                    )}
                </button>
            </form>
        </>
    )
}