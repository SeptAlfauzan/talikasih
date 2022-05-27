import { Space, Table, Tag } from 'antd';
import React from 'react';
import axios from 'axios';
import { getPosts } from '../../../lib/posts';
import AdminLayout from '../../../views/layouts/adminLayout';
const columns = [
    {
        title: 'Nama',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'NIK',
        dataIndex: 'nik',
        key: 'nik',
    },
    {
        title: 'Lokasi',
        dataIndex: 'location',
        key: 'location',
    },
    {
        title: 'Kerugian',
        dataIndex: 'loss',
        key: 'loss',
    },
    {
        title: 'Buka donasi',
        dataIndex: 'donation',
        key: 'donation',
    },
    {
        title: 'Deskripsi',
        dataIndex: 'content',
        key: 'content',
    },
    {
        title: 'Dibuat',
        dataIndex: 'created_at',
        key: 'created_at',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Delete</a>
            </Space>
        ),
    },
];

export default function Posts({ posts }) {
    const [csv, setCesv] = React.useState(null);

    React.useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get('/api/export/reports');
            setCesv(response.data);
        }
        fetchdata();
    }, [])

    return (
        <AdminLayout>
            <div className='w-full rounded bg-white px-8 py-2 mb-2 flex flex-row justify-between'>
                <h2 className='text-xl'>Daftar Laporan</h2>
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
        const res = await getPosts();
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