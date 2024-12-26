import { DataTable } from "@/Components/DateTable/data-table-main";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Complaint } from "@/types";
import { Head } from "@inertiajs/react";

export default function Index({complaints}: {complaints: Complaint[]}) {
    return (
        <AuthenticatedLayout>
            <Head title="Daftar Barang" />
            tes
        </AuthenticatedLayout>
    );
};
