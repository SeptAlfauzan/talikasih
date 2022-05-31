import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import FormDonasi from '../../views/FormDonasi'
import UserLayout from '../../views/layouts/userLayout'
export default function Donasi() {
    return (
        <UserLayout>
            <main className='min-h-screen w-full relative pb-14 bg-dots'>
                <div className='img-overlay mx-auto md:w-3/4 w-11/12 h-80 rounded-2xl overflow-clip relative'>
                    <h3 className='text-white inset-x-0 text-center left-0 right-0 top-8 z-10 absolute text-6xl'>Kirim Donasi</h3>
                    <Image src={'/images/donation.jpg'} objectFit="cover" alt="background" layout='fill' />
                </div>
                <div className='md:w-3/4 w-full left-0 right-0 mx-auto -mt-60 border'>
                    <FormDonasi />
                </div>
            </main>
        </UserLayout>
    )
}
