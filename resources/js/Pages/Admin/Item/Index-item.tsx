import { DataTable } from "@/Components/DateTable/data-table-main";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Item } from "@/types";
import { Input } from "@headlessui/react";
import { Head } from "@inertiajs/react";
import { cn } from "@/lib/utils";


export default function Index({ items }: { items: Item[] }) {
    return (
        <AuthenticatedLayout>
            <Head title="Daftar Barang" />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {items.map((item) => (
                    <Card key={item.id} className="flex overflow-hidden">
                        <Dialog>
                            <DialogTrigger asChild>
                                <img
                                    src="https://cdn.pixabay.com/photo/2013/01/05/11/05/strommast-73720_960_720.jpg"
                                    className="w-20 h-auto cursor-pointer"
                                    alt=""
                                />
                            </DialogTrigger>
                            <DialogContent className="w-full h-auto p-0 overflow-hidden">
                                <img
                                    src="https://cdn.pixabay.com/photo/2013/01/05/11/05/strommast-73720_960_720.jpg"
                                    className="w-full h-auto cursor-pointer"
                                    alt=""
                                />
                            </DialogContent>
                        </Dialog>
                        <CardHeader>
                            <CardTitle>{item.name}</CardTitle>
                            <CardDescription>
                                <p className="truncate">{item.description}</p>
                                <p className={cn("text-3xl font-medium", item.stock === 0 ? "text-red-500" : "text-green-500")}>{item.stock}</p>
                            </CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
