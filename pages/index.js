import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../views/components/navbar'
import UserLayout from '../views/layouts/userLayout'

export default function Home() {
  return (
    <UserLayout>

      <main>
        <section id={styles.sectionLanding} className='min-h-screen w-full'>
          <div className='flex px-40 pt-28 pb-40'>
            <div className='md:w-1/2 flex flex-col'>
              <div>
                <Image src="/images/Saly-30.png" alt="Old Couples" width={213} height={89} />
              </div>
              <h1 className='text-6xl'>
                Selamat datang di <span className='text-blue-600'>talikasih.site</span>
              </h1>
              <h1 className='text-2xl text-slate-500 mt-5'>
                Portal pengaduan bencana alam
              </h1>
              <button className='bg-purple-500 w-2/5 px-5 py-2 rounded-lg mt-12 text-white'>
                Selengkapnya
              </button>
            </div>
            <div className='md:w-1/2 relative'>
              <Image src="/images/landing-1.png" alt="Old Couples" width={522} height={539} />
              <div className='absolute bottom-0 -right-28'>
                <Image src="/images/eclipse home.png" alt="Circles Blur" width={321} height={306} />
              </div>
            </div>
          </div>
        </section>
        <section id={styles.sectionAboutUs} className='min-h-screen w-full  flex items-center'>
          <div className='flex px-40'>
            <div className='relative'>
              <div className='relative -left-10'>
                <Image src="/images/about-us-bg.png" alt="Bacground rectangle" className='relative' width={522} height={588} />
              </div>
              <div className='absolute top-0 -right-10'>
                <Image src="/images/about-us-fg.png" alt="Children smiling" width={498} height={498} />
              </div>
            </div>
            <div className='md:w-1/2 md:pl-20 flex flex-col justify-center'>
              <h1 className='text-4xl'>Tentang Kami</h1>
              <p className='mt-5 text-slate-500'>Lorem ipsum dolor emet, lorem ipsum dolor emet. Lorem ipsum dolor emet, lorem ipsum dolor emet</p>
            </div>
          </div>
        </section>

        <section className='min-h-screen w-full  flex items-center'>
          <div className='flex flex-col w-full'>
            <h1 className='text-center mb-8 text-4xl'>Kelebihan kita</h1>
            <div className='flex flex-row justify-center gap-10 w-3/4 mx-auto border'>
              <div className='bg-yellow-300 px-10 py-3 flex flex-row md:w-2/6 rounded-xl border-2 border-black items-center'>
                <div>
                  <Image src={'/images/finger.png'} alt="Finger" width={142} height={142} />
                </div>
                <div className='flex flex-col justify-center'>
                  <h5 className='text-2xl'>Mudah</h5>
                  <p className='text-slate-500 mt-3'>Ketik aduanmu, biarkan kami yang memproses</p>
                </div>
              </div>
              <div className='bg-yellow-300 px-10 py-3 flex flex-row md:w-2/6 rounded-xl border-2 border-black items-center'>
                <div>
                  <Image src={'/images/rocket.png'} alt="Rocket" width={142} height={142} />
                </div>
                <div className='flex flex-col justify-center'>
                  <h5 className='text-2xl'>Mudah</h5>
                  <p className='text-slate-500 mt-3'>Ketik aduanmu, biarkan kami yang memproses</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </UserLayout>
  )
}
