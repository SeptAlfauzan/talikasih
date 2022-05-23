import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import UserLayout from '../../views/layouts/userLayout'
import FormOne from '../../views/FormOne';
export default function Aduan() {
    const steps = [
        { name: 'StepOne', component: <FormOne /> },
        { name: 'StepTwo', component: <FormOne /> },
    ];
    return (
        <UserLayout>
            <main>
                <FormOne />
            </main>
        </UserLayout>
    )
}
