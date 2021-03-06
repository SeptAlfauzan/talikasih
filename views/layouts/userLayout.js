
import Footer from '../components/footer'
import Navbar from '../components/navbar'

export default function UserLayout({ children }) {
    return (
        <div className='relative'>
            <Navbar />
            <div className=' pt-20'>
                {children}
            </div>
            <Footer />
        </div>
    )
}