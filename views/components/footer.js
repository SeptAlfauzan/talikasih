import { WhatsAppOutlined, EnvironmentFilled } from '@ant-design/icons'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
export default function Footer() {
    return (
        <footer className='bottom-0 w-full bg-black flex flex-col md:px-40 px-10 py-10'>
            <h3 className='text-white text-2xl'>
                <Link href={'/'}>
                    Talikasih.site
                </Link>
            </h3>
            <div className='text-white flex md:flex-row flex-wrap'>
                <div className='flex-col md:w-1/4 w-1/2'>
                    <h4 className='text-white'>Layanan</h4>
                    <ul>
                        <Link href={'/aduan'}>
                            <li className='text-slate-300 hover:text-white cursor-pointer'>
                                Daftar pengaduan
                            </li>
                        </Link>
                        <Link href={'/laporkan'}>
                            <li className='text-slate-300 hover:text-white cursor-pointer'>
                                Buat laporan pengaduan
                            </li>
                        </Link>
                    </ul>
                    <Link href={'/member'}>
                        <h4 className='text-white cursor-pointer'>Daftar menjadi member</h4>
                    </Link>
                    <span className=' text-emerald-500 hover:text-emerald-400 text-lg flex flex-row items-center gap-3'>
                        <WhatsAppOutlined /> 082-123-123-xxx
                    </span>
                </div>
                <div className='flex-col md:w-1/4 w-1/2'>
                    <h4 className='text-white'>Lainnya</h4>
                    <ul>
                        <Link href={'/#about-us'}>
                            <li className='text-slate-300 hover:text-white cursor-pointer'>
                                Tentang kami
                            </li>
                        </Link>
                        <Link href={'/#our-strength'}>
                            <li className='text-slate-300 hover:text-white cursor-pointer'>
                                Kelebihan kami</li>
                        </Link>
                    </ul>
                </div>
                <div className='flex-col md:w-1/2 w-full'>
                    <h4 className='text-white'>Kantor kami</h4>
                    <span className='flex flex-row items-center gap-3 mb-3'>
                        <EnvironmentFilled />Tanggulturus
                    </span>
                    <div className="rounded-lg overflow-clip">
                        <iframe src="https://maps.google.com/maps?q=tanggulturus&t=&z=17&ie=UTF8&iwloc=&output=embed" className='w-full h-full' frameBorder="0" style={{ border: 0 }} allowFullScreen={true} aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                </div>
            </div>
            <p className='text-slate-400 font-light text-center mt-10'>&copy; talikasih.site {new Date().getFullYear()}</p>
        </footer>
    );
}