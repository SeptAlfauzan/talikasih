import axios from "axios";
import React from 'react';
import CardNav from "../../views/components/cardNav";
import AdminLayout from "../../views/layouts/adminLayout";

export default function Dashboard(props) {
    const [posts, setPosts] = React.useState(null)
    const [members, setMembers] = React.useState(null)
    const [donation, setDonation] = React.useState(null)
    React.useEffect(() => {
        const fetchData = async () => {
            setPosts(await (await axios.get('/api/post')).data)
            setMembers(await (await axios.get('/api/member')).data)
            setDonation(await (await axios.get('/api/donation')).data)
        };
        try {
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <AdminLayout>
            <div className="flex flex-wrap gap-10">
                <CardNav text={'Jumlah Laporan'} link={'/admin/posts'} count={posts ? posts.length : 0} />
                <CardNav text={'Jumlah Member'} link={'/admin/members'} count={members ? members.length : 0} />
                <CardNav text={'Jumlah Donatur'} link={'/admin/donation'} count={donation ? donation.length : 0} />
            </div>
        </AdminLayout>
    )
}