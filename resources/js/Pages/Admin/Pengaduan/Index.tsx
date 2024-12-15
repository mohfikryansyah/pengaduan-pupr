import { DataTable } from "@/Components/DateTable/data-table-main";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Complaint } from "@/types";
import { columns } from "./columns";

export default function Index({complaints}: {complaints: Complaint[]}) {
    return (
        <AuthenticatedLayout>
            <DataTable columns={columns} data={complaints} />
        </AuthenticatedLayout>
    );
};
