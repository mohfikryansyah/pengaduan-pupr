import { DataTable } from "@/Components/DateTable/data-table-main";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Complaint } from "@/types";
import { columns, Status } from "./columns";
import { HelpCircle, Circle, CheckCircle2, XCircle } from "lucide-react";

const status = [
    {
        value: "belum diproses",
        label: "Belum diproses",
        icon: HelpCircle,
        color: "text-orange-500",
    },
    {
        value: "sedang diproses",
        label: "Sedang diproses",
        icon: Circle,
        color: "text-blue-500",
    },
    {
        value: "selesai diproses",
        label: "Selesai",
        icon: CheckCircle2,
        color: "text-green-500",
    },
    {
        value: "pengaduan ditolak",
        label: "Pengaduan ditolak",
        icon: XCircle,
        color: "text-red-500",
    },
];

export default function Index({complaints}: {complaints: Complaint[]}) {
    return (
        <AuthenticatedLayout>
            <DataTable columns={columns} data={complaints} filter={status}/>
        </AuthenticatedLayout>
    );
};
