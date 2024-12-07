import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Component from "./Admin/Dashboard/Dashboard";
import { BarChartComponent } from "./Admin/Dashboard/BarChart";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="w-full md:flex md:space-x-3 md:space-y-0 space-y-3">
                <Component />
                <BarChartComponent />
            </div>
        </AuthenticatedLayout>
    );
}
