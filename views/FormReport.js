import axios from 'axios';
import React from 'react';
import Alert from './components/alert';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const LoadingComp = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const steps = (states, stateHandler) => [
    {
        'component': <FormOne states={states} stateHandler={stateHandler} />
    },
    {
        'component': <FormTwo states={states} stateHandler={stateHandler} />
    },
]

const FormOne = ({ states, stateHandler }) => {
    const { nameClicked, emailClicked, reportClicked, } = states;
    const { setNameClicked, setEmailClicked, setReportClicked
    } = stateHandler;
    return (
        <>
            <div className='mb-3'>
                <label>Nama</label>
                <input name='name' required type='text' onBlur={() => setNameClicked(true)} className={`input peer border-2  w-full focus:border-purple-300 focus:bg-purple-50 ${nameClicked ? 'invalid:text-red-500 invalid:border-red-500' : null} outline-none rounded-lg px-3 py-1`} />
                <p className={`mt-2 text-xs  invisible ${nameClicked ? 'peer-invalid:visible' : null} text-pink-600 text-sm`}>
                    Nama harus diisi
                </p>
            </div>
            <div className='mb-3'>
                <label>NIK</label>
                <input name='nik' type='number' required onBlur={() => setEmailClicked(true)} className={`input peer border-2  w-full focus:border-purple-300 focus:bg-purple-50  ${emailClicked ? ' invalid:text-red-500 invalid:border-red-500' : null} outline-none rounded-lg px-3 py-1`} />
                <p className={`mt-2 text-xs  invisible  ${emailClicked ? 'peer-invalid:visible' : null} text-pink-600 text-sm`}>
                    NIK tidak valid
                </p>
            </div>
            <div className='mb-5'>
                <label>Lokasi</label>
                <textarea name='location' required onBlur={() => setReportClicked(true)} className={`input peer border-2  w-full focus:border-purple-300 focus:bg-purple-100 ${reportClicked ? ' invalid:text-red-500 invalid:border-red-500' : null} outline-none rounded-lg px-3 py-1`} />
                <p className={`mt-2 text-xs  invisible ${reportClicked ? 'peer-invalid:visible' : null} text-pink-600 text-sm`}>
                    Lokasi harus diisi
                </p>
            </div>
            <div className='mb-5'>
                <label>Deskripsi</label>
                <textarea name='content' required onBlur={() => setEmailClicked(true)} className={`input peer border-2  w-full focus:border-purple-300 focus:bg-purple-100 ${emailClicked ? ' invalid:text-red-500 invalid:border-red-500' : null} outline-none rounded-lg px-3 py-1`} />
                <p className={`mt-2 text-xs  invisible ${emailClicked ? 'peer-invalid:visible' : null} text-pink-600 text-sm`}>
                    Deskripsi harus diisi
                </p>
            </div>
        </>
    )
}
const FormTwo = ({ states, stateHandler }) => {
    const { lossClicked } = states;
    const { setlossClicked } = stateHandler;
    return (
        <>
            <div className='mb-3'>
                <label>Jumlah kerugian</label>
                <input name='loss' required type='number' onBlur={() => setlossClicked(true)} className={`input peer border-2  w-full focus:border-purple-300 focus:bg-purple-50 ${lossClicked ? 'invalid:text-red-500 invalid:border-red-500' : null} outline-none rounded-lg px-3 py-1`} />
                <p className={`mt-2 text-xs  invisible ${lossClicked ? 'peer-invalid:visible' : null} text-pink-600 text-sm`}>
                    Jumlah kerugian harus diisi
                </p>
            </div>
            <div className='mb-3'>
                <label>Buka donasi</label>
                <p className='text-xs text-blue-500'>Centang jika ingin membuka donasi</p>
                <input name='donation' type='checkbox' className='input block mb-3' />
            </div>
        </>
    )
}

export default function FormReport() {
    const [nameClicked, setNameClicked] = React.useState(false);
    const [emailClicked, setEmailClicked] = React.useState(false);
    const [reportClicked, setReportClicked] = React.useState(false);
    const [lossClicked, setlossClicked] = React.useState(false);
    const [isSaved, setIsSaved] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [showAlert, setShowAlert] = React.useState(false);
    const [step, setStep] = React.useState(0);

    const [inputs, setInputs] = React.useState({});

    const form = React.useRef(null);
    const inputStates = {
        nameClicked,
        emailClicked,
        reportClicked,
        lossClicked,
    };
    const inputStateHandler = {
        setNameClicked,
        setEmailClicked,
        setReportClicked,
        setlossClicked,
    };
    const forms = steps(inputStates, inputStateHandler);
    const handleInputsClicked = (arg) => {
        setNameClicked(arg)
        setEmailClicked(arg)
        setReportClicked(arg)
    }

    const parseFormToObj = () => {
        return Object.assign(...[...form.current.querySelectorAll('.input')].map(input => ({ [input.name]: input.value })));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (step == 0) {
            setStep(1)
            const obj = parseFormToObj()
            setInputs(obj)
            return;
        }


        setShowAlert(false)
        setIsLoading(true)

        try {
            const obj = parseFormToObj();
            console.log({ ...obj, ...inputs })
            const response = await axios.post('/api/post', { ...obj, ...inputs });
            response.status == 200 ? setIsSaved(true) : setIsSaved(false);

            handleInputsClicked(false);
            form.current.reset();
        } catch (error) {
            console.log(error.message);
        }
        setIsLoading(false)
        setShowAlert(true)
        setStep(0)
        // e.reset();
    }

    return (
        <>
            <div className='md:w-2/4 w-3/4 relative mx-auto bottom-5'>
                {showAlert && (
                    <Alert onClose={() => setShowAlert(false)} >
                        <div className={`w-full border rounded-lg py-3 px-10 ${isSaved ? 'border-emerald-400 bg-emerald-400' : 'border-red-400 bg-red-400'}`}>
                            {isSaved ? (
                                <span>Berhasil mengirim aduan</span>
                            ) : (
                                <span>Gagal mengirim aduan</span>
                            )}
                        </div>
                    </Alert>
                )}
            </div>
            <form className='bg-white flex flex-col md:w-2/4 w-3/4 relative px-10 mx-auto rounded-lg shadow-xl py-8 mt-10' ref={form} onSubmit={handleSubmit}>

                <h2 className='text-xl mb-3 font-bold'>Isi Laporan Pengaduan</h2>

                <div className='w-full flex justify-between md:px-8 px-10 relative mb-5'>
                    {forms.map((form, index) => (
                        <div key={index} className='border w-full relative flex justify-center'>
                            {index != 0 && (
                                <div className={`${index <= step ? 'bg-purple-700' : 'bg-slate-500'} h-1 w-full absolute -translate-x-1/2 top-2 `} />
                            )}
                            <div className={`w-5 h-5 rounded-full ${index <= step ? ' bg-purple-700' : 'bg-slate-500'} text-white flex items-center justify-center z-10 absolute`}>{index + 1}</div>
                        </div>
                    ))}
                </div>
                {forms[step].component}

                <div className='flex flex-row w-full justify-end'>
                    {step > 0 && (
                        <button onClick={() => setStep(step - 1)} className='bg-purple-500 py-3 text-white rounded-lg hover:bg-purple-700 w-1/2'>
                            Sebelumnya
                        </button>
                    )}
                    <button className='bg-purple-500 py-3 text-white rounded-lg hover:bg-purple-700 w-1/2'>
                        {isLoading ? (
                            <Spin indicator={LoadingComp} />
                        ) : (
                            <span>
                                {step == 0 ? 'Selanjutnya' : 'Submit Laporan'}
                            </span>
                        )}
                    </button>
                </div>
            </form>
        </>
    )
}