import { Space, Table, Tag } from 'antd';
import React from 'react';
import axios from 'axios';
import { getPosts } from '../../../lib/posts';
import { getMembers } from '../../../lib/member';
import AdminLayout from '../../../views/layouts/adminLayout';
import { Router, useRouter } from 'next/router';


const columns = [
    {
        title: 'Nama',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Semester',
        dataIndex: 'semester',
        key: 'semester',
    },
    {
        title: 'Prodi',
        dataIndex: 'major',
        key: 'major',
    },
    {
        title: 'Instansi',
        dataIndex: 'from',
        key: 'from',
    },
    {
        title: 'Alamat',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Alasan mendaftar',
        dataIndex: 'reason',
        key: 'reason',
    },
    {
        title: 'Mendaftar',
        dataIndex: 'created_at',
        key: 'created_at',
    },
];

export default function Members({ members }) {
    const [csv, setCesv] = React.useState(null);
    const [data, setData] = React.useState(null)
    const router = useRouter();

    const handleDelete = async (data, setData, id) => {
        try {
            await axios.delete(`/api/member?id=${id}`);
            router.reload();
            // const newData = data.map(d => d.id != id)
            // setData(newData)
        } catch (error) {

        }

    }

    React.useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get('/api/export/members');
            setCesv(response.data);
        }
        fetchdata();
    }, [])
    React.useEffect(() => {
        setData(members)
    }, [data, members]);

    if (!members) return null;
    return (
        <AdminLayout>
            <div className='w-full rounded bg-white px-8 py-2 mb-2 flex flex-row justify-between'>
                <h2 className='text-xl'>Daftar Member</h2>
                <a href={`data:text/csv;charset=utf-8${encodeURI(csv)}`}>
                    <button className='bg-purple-500 hover:bg-purple-700 text-white px-5 py-1 rounded-lg'>Export CSV</button>
                </a>
            </div>
            <div className='h-80 overflow-y-auto'>
                <Table dataSource={data} pagination={false} >
                    <Table.Column title="Nama" dataIndex="name" key="name" />
                    <Table.Column title="Semester" dataIndex="semester" key="semester" />
                    <Table.Column title="Prodi" dataIndex="major" key="major" />
                    <Table.Column title="Instansi" dataIndex="from" key="from" />
                    <Table.Column title="Alamat" dataIndex="address" key="address" />
                    <Table.Column title="Alasan mendaftar" dataIndex="reason" key="reason" />
                    <Table.Column title="Waktu daftar" dataIndex="created_at" key="created_at" />
                    <Table.Column
                        title="Action"
                        key="action"
                        render={(_, record) => (
                            <Space size="middle" onClick={() => handleDelete(members, setData, record.id)}>
                                <a>Delete</a>
                            </Space>
                        )}
                    />
                </Table>
            </div>
        </AdminLayout>
    );
}
export async function getStaticProps() {
    try {
        const res = await getMembers();
        console.log(res)
        return {
            props: {
                members: res,
            },
            revalidate: 1
        }
    } catch (error) {
        console.log('error')
        return {
            props: {
                members: [],
            },
            revalidate: 1
        }
    }
}