import { Space, Table, Tag } from 'antd';
import React from 'react';
import axios from 'axios';
import { getPosts } from '../../../lib/posts';
import AdminLayout from '../../../views/layouts/adminLayout';
import { getDonations } from '../../../lib/donation';
const columns = [
    {
        title: 'Nama',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Jumlah donasi',
        dataIndex: 'amount',
        key: 'amount',
        render: (_, record) => (
            <span>Rp{record.amount}</span>
        )
    },
    {
        title: 'Alamat',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Dibuat',
        dataIndex: 'created_at',
        key: 'created_at',
    },
];

export default function Posts({ posts }) {
    const [csv, setCesv] = React.useState(null);

    React.useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get('/api/export/donation');
            setCesv(response.data);
        }
        fetchdata();
    }, [])

    return (
        <AdminLayout>
            <div className='w-full rounded bg-white px-8 py-2 mb-2 flex flex-row justify-between'>
                <h2 className='text-xl'>Daftar Donasi</h2>
                <a href={`data:text/csv;charset=utf-8${encodeURI(csv)}`}>
                    <button className='bg-purple-500 hover:bg-purple-700 text-white px-5 py-1 rounded-lg'>Export CSV</button>
                </a>
            </div>
            <div className='h-80 overflow-y-auto'>
                <Table columns={columns} dataSource={posts} pagination={false} />
            </div>
        </AdminLayout>
    );
}
export async function getStaticProps() {
    try {
        const res = await getDonations();
        console.log(res)
        return {
            props: {
                posts: res,
            },
            revalidate: 1
        }
    } catch (error) {
        console.log(error);
        return {
            props: {
                posts: [],
            },
            revalidate: 1
        }
    }
}