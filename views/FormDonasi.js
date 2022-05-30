import axios from 'axios';
import React from 'react';
import Alert from './components/alert';
import { useRouter } from 'next/router';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { setCookies } from 'cookies-next';
import Image from 'next/image'

const LoadingComp = <LoadingOutlined style={{ fontSize: 24 }} spin />;


export default function FormDonasi() {
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
    const router = useRouter();

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
            const response = await axios.post('/api/donation', obj);
            response.status == 200 ? setIsSaved(true) : setIsSaved(false);

            handleInputsClicked(false);
            form.current.reset();
        } catch (error) {
            console.log(error.message);
        }

        setIsLoading(false)
        const token = "await generateToken(obj, '1m')";
        setCookies('submited', token, { maxAge: 5 });
        router.push('/success-donate');
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
                <h2 className='text-xl mb-3 font-bold w-full'>Isi Form Donasi</h2>
                <div className='py-5 px-3 rounded bg-slate-50 w-full'>
                    <h4>Metode pembayaran yang tersedia</h4>
                    <h5 className='text-slate-400'>Transfer bank</h5>

                    <div className='flex gap-3 justify-between items-center'>
                        <span>0983100041 An Thania Pardede</span>
                        <div className='relative w-20 h-10'>
                            <Image src={'/images/logos/logo-bni.png'} layout='fill' objectFit='contain' alt='logo bni' />
                        </div>
                    </div>

                    <h5 className='text-slate-400'>E-money</h5>
                    <div className='flex gap-3 justify-between items-center'>
                        <span>081262615364</span>
                        <div className='relative w-20 h-10'>
                            <Image src={'/images/logos/logo-ovo.png'} layout='fill' objectFit='contain' alt='logo ovo' />
                        </div>
                    </div>
                    <div className='flex gap-3 justify-between items-center'>
                        <span>0895611752046</span>
                        <div className='relative w-20 h-10'>
                            <Image src={'/images/logos/logo-gopay.png'} layout='fill' objectFit='contain' alt='logo gopay' />
                        </div>
                    </div>
                    <div className='flex gap-3 justify-between items-center'>
                        <span>0895611752046</span>
                        <div className='relative w-20 h-10'>
                            <Image src={'/images/logos/logo-spay.png'} layout='fill' objectFit='cover' alt='logo spay' />
                        </div>
                    </div>
                </div>
                <small className='text-red-500'>*isi form dibawah ini setelah melakukan transfer donasi</small>
                <div className='mb-3 md:w-1/2 w-full p-1'>
                    <label>Nama</label>
                    <input name='name' required type='text' onBlur={() => setNameClicked(true)} className={`input peer border-2  w-full focus:border-purple-300 focus:bg-purple-50 ${nameClicked ? 'invalid:text-red-500 invalid:border-red-500' : null} outline-none rounded-lg px-3 py-1`} />
                    <p className={`mt-2 text-xs  invisible ${nameClicked ? 'peer-invalid:visible' : null} text-pink-600 text-sm`}>
                        Nama harus diisi
                    </p>
                </div>
                <div className='mb-3 md:w-1/2 w-full p-1'>
                    <label>Jumlah Donasi</label>
                    <input name='amount' required type='number' onBlur={() => setFromClicked(true)} className={`input peer border-2  w-full focus:border-purple-300 focus:bg-purple-50 ${fromClicked ? 'invalid:text-red-500 invalid:border-red-500' : null} outline-none rounded-lg px-3 py-1`} />
                    <p className={`mt-2 text-xs  invisible ${fromClicked ? 'peer-invalid:visible' : null} text-pink-600 text-sm`}>
                        Jumlah donasi harus diisi
                    </p>
                </div>
                <div className='mb-3 w-full p-1'>
                    <label>Alamat</label>
                    <input name='address' required type='text' onBlur={() => setSemesterClicked(true)} className={`input peer border-2  w-full focus:border-purple-300 focus:bg-purple-50 ${semesterClicked ? 'invalid:text-red-500 invalid:border-red-500' : null} outline-none rounded-lg px-3 py-1`} />
                    <p className={`mt-2 text-xs  invisible ${semesterClicked ? 'peer-invalid:visible' : null} text-pink-600 text-sm`}>
                        Alamat harus diisi
                    </p>
                </div>

                <button className='w-full bg-purple-500 py-3 text-white rounded-lg hover:bg-purple-700'>
                    {isLoading ? (
                        <Spin indicator={LoadingComp} />
                    ) : (
                        <span>Submit Donasi</span>
                    )}
                </button>
            </form>
        </>
    )
}