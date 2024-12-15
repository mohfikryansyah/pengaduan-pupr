"use client";

import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { HelpCircle, icons, X } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Table } from "@tanstack/react-table";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
// import { Category } from "../../Pages/Admin/Pengaduan/columns";
import test from "node:test";
import { useState } from "react";

interface TableToolbarProps<TData> {
    table: Table<TData>;
    globalFilter: string;
    setGlobalFilter: (value: string) => void;
    // filter?: Category[];
}

export function TableToolbar<TData>({
    table,
    globalFilter,
    setGlobalFilter,
    // filter,
}: TableToolbarProps<TData>) {
    const isFilteredTitle = table.getState().columnFilters.length > 0;
    const isFilteredGlobal = globalFilter && globalFilter.length > 0;
    // const fil =
    //     filter?.map((tes) => ({
    //         value: tes.name,
    //         label: tes.name,
    //         icon: HelpCircle,
    //     })) || [];

    const [resetFilter, setResetFilter] = useState(false);

    const handleResetFilters = () => {
        setGlobalFilter("");
        table.resetColumnFilters();
        setResetFilter(true);
    };

    const handleResetComplete = () => {
        setResetFilter(false); // Matikan reset setelah selesai
    };
    return (
        <div className="flex items-center py-4">
            <div className="flex items-center space-x-2 w-full">
                <Input
                    placeholder="Filter titles..."
                    value={globalFilter}
                    onChange={(e) =>
                        table.setGlobalFilter(String(e.target.value))
                    }
                    className="max-w-sm"
                />

                {/* {table.getColumn("category") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("category")}
                        title="Category"
                        options={fil}
                        resetFilter={resetFilter}
                        onResetComplete={handleResetComplete}
                    />
                )} */}

                {(isFilteredTitle || isFilteredGlobal) && (
                    <Button
                        variant="ghost"
                        onClick={handleResetFilters}
                        className="h-9 px-2 lg:px-3"
                    >
                        Reset
                        <X />
                    </Button>
                )}
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto">
                        Columns
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {table
                        .getAllColumns()
                        .filter((column) => column.getCanHide())
                        .map((column) => (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                className="capitalize"
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) =>
                                    column.toggleVisibility(!!value)
                                }
                            >
                                {column.id}
                            </DropdownMenuCheckboxItem>
                        ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
