import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import UserLayout from '../../views/layouts/userLayout'
import FormMember from '../../views/FormMember';
export default function Member() {
    return (
        <UserLayout>
            <main className='min-h-screen w-full relative pb-80 bg-dots'>
                <div className='img-overlay mx-auto md:w-3/4 w-11/12 h-80 rounded-2xl overflow-clip relative'>
                    <h3 className='text-white inset-x-0 text-center left-0 right-0 top-8 z-10 absolute text-6xl'>Daftar Member</h3>
                    <Image src={'/images/member.jpg'} objectFit="cover" alt="background" layout='fill' />
                </div>
                <div className='absolute md:w-3/4 w-full left-0 right-0 mx-auto top-20'>
                    <FormMember />
                </div>
            </main>
        </UserLayout>
    )
}
