import CardNav from "../../../views/components/cardNav";
import AdminLayout from "../../../views/layouts/AdminLayout";

export default function Dashboard(props) {
    return (
        <AdminLayout>
            <div className="flex flex-wrap gap-10">
                <CardNav text={'Jumlah Laporan'} link={'/admin/posts'} count={100} />
                <CardNav text={'Jumlah Member'} link={'/admin/members'} count={100} />
            </div>
        </AdminLayout>
    )
}