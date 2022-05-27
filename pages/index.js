import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../views/components/navbar'
import UserLayout from '../views/layouts/userLayout'

export default function Home() {
  return (
    <UserLayout>

      <main className='w-full p-0 relative overflow-clip'>
        <section id={styles.sectionLanding} className='min-h-screen w-100'>
          <div className='flex md:px-40 px-10 pt-28 pb-40'>
            <div className='md:w-1/2 w-full flex flex-col'>
              <div>
                <Image src="/images/Saly-30.png" alt="Old Couples" width={213} height={89} />
              </div>
              <h1 className='text-6xl'>
                Selamat datang di <span className='text-blue-600'>talikasih.site</span>
              </h1>
              <h1 className='text-2xl text-slate-500 mt-5'>
                Portal pengaduan bencana alam
              </h1>
              <a href='#about-us'>
                <button className='bg-purple-500 w-2/5 px-5 py-2 rounded-lg mt-12 text-white'>
                  Selengkapnya
                </button>
              </a>
            </div>
            <div className='md:block hidden w-1/2  relative'>
              <Image src="/images/landing-1.png" alt="Old Couples" width={522} height={539} />
              <div className='absolute bottom-0 -right-28'>
                <Image src="/images/eclipse home.png" alt="Circles Blur" width={321} height={306} />
              </div>
            </div>
          </div>
        </section>

        <section id={styles.sectionAboutUs} className='min-h-screen w-full  flex items-center'>
          <div id="about-us" className='flex flex-wrap md:px-20 px-10 w-full relative'>
            <div className='relative md:w-2/4 w-full md:order-1 order-2'>
              <div className='w-full'>
                <Image src="/images/aboutus.png" alt="Children smiling" width={898} height={898} />
              </div>
            </div>
            <div className='md:w-1/2 w-full md:pl-20 md:order-2 order-1 flex flex-col justify-center backdrop-blur-sm'>
              <h1 className='text-6xl'>Tentang Kami</h1>
              <p className='mt-3 text-slate-500 text-lg'>Lorem ipsum dolor emet, lorem ipsum dolor emet. Lorem ipsum dolor emet, lorem ipsum dolor emetLorem ipsum dolor emet, lorem ipsum dolor emet. Lorem ipsum dolor emet, lorem ipsum dolor  Lorem ipsum dolor emet, lorem ipsum dolor emet. Lorem ipsum dolor emet, lorem ipsum dolor emet</p>
            </div>
          </div>
        </section>

        <section className='w-full  flex flex-col justify-center py-10'>
          <h3 className='text-center text-4xl h-10'>Patner Kami</h3>
          <div id='patner' className='flex flex-wrap w-full relative h-32 md:px-40 px-10'>
            <div className='w-1/3 relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 duration-300'>
              <Image src={'/images/logos/bpbd.png'} alt="BPBD" layout='fill'
                objectFit='contain' />
            </div>
            <div className='w-1/3 relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 duration-300'>
              <Image src={'/images/logos/dinsos.png'} alt="Dinsos" layout='fill'
                objectFit='contain' />
            </div>
            <div className='w-1/3 relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 duration-300'>
              <Image src={'/images/logos/pemda.png'} alt="Pemda Bandung" layout='fill'
                objectFit='contain' className='w-full h-full' />
            </div>
          </div>
        </section>
        <section className='min-h-screen w-full  flex items-center'>
          <div id='our-strength' className='flex flex-col w-full'>
            <h1 className='text-center mb-8 text-4xl'>Kelebihan kita</h1>
            <div className='flex flex-wrap justify-center gap-10 w-3/4 mx-auto'>
              <div className='bg-yellow-300 px-10 py-3 flex flex-row md:w-2/6 w-full rounded-xl border-2 border-black items-center'>
                <div>
                  <Image src={'/images/finger.png'} alt="Finger" width={142} height={142} />
                </div>
                <div className='flex flex-col justify-center'>
                  <h5 className='text-2xl'>Mudah</h5>
                  <p className='text-slate-500 mt-3'>Ketik aduanmu, biarkan kami yang memproses</p>
                </div>
              </div>
              <div className='bg-yellow-300 px-10 py-3 flex flex-row md:w-2/6 w-full rounded-xl border-2 border-black items-center'>
                <div>
                  <Image src={'/images/rocket.png'} alt="Rocket" width={142} height={142} />
                </div>
                <div className='flex flex-col justify-center'>
                  <h5 className='text-2xl'>Cepat</h5>
                  <p className='text-slate-500 mt-3'>Hanya beberapa detik aduanmua akan segera diproses</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='h-screen w-full flex flex-wrap justify-center items-center md:px-40 border'>
          <div className='md:w-1/2 w-full md:relative absolute z-20 md:px-0 px-10'>
            <h1 className='text-4xl'>
              Tunggu apa lagi, buat aduanmu sekarang juga.
            </h1>
            <Link href={'/laporkan'}>
              <button className='bg-purple-500 w-2/5 px-5 py-2 rounded-lg mt-8 text-white'>
                Buat Aduan
              </button>
            </Link>
          </div>
          <div className='relative md:w-1/2 w-full h-full overflow-clip'>
            <div className='w-full h-full absolute md:bottom-0 md:right-0 -right-64 -bottom-56'>
              <Image src={'/images/images-2.png'} alt="background images" layout='fill'
                objectFit='contain' className='min-h-screen' />
            </div>
          </div>
        </section>
      </main>
    </UserLayout>
  )
}
