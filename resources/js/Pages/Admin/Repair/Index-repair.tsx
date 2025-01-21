import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Complaint, Item, Repair } from "@/types";
import { Head } from "@inertiajs/react";
import ButtonDialogForm from "./FormRepair";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/Components/ui/select";

export default function IndexRepair({ repairs, complaints, items }: { repairs: Repair[], complaints: Complaint[], items: Item[] }) {

    return (
        <AuthenticatedLayout>
            <Head title="Data Pengaduan" />
            <ButtonDialogForm complaints={complaints} items={items}/>
        </AuthenticatedLayout>
    );
}
