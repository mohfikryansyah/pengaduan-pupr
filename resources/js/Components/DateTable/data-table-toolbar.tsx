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
import { Complaint } from "@/types";
import { Status } from "@/Pages/Admin/Pengaduan/columns";

interface TableToolbarProps<TData> {
    table: Table<TData>;
    globalFilter: string;
    setGlobalFilter: (value: string) => void;
    filter?: Status[];
}

export function TableToolbar<TData>({
    table,
    globalFilter,
    setGlobalFilter,
    filter,
}: TableToolbarProps<TData>) {
    const isFilteredTitle = table.getState().columnFilters.length > 0;
    const isFilteredGlobal = globalFilter && globalFilter.length > 0;
    const status =
        filter?.map((filter) => ({
            value: filter.label,
            label: filter.label,
            icon: filter.icon,
            color: filter.color,
        })) || [];

    const [resetFilter, setResetFilter] = useState(false);

    const handleResetFilters = () => {
        setGlobalFilter("");
        table.resetColumnFilters();
        setResetFilter(true);
    };

    const handleResetComplete = () => {
        setResetFilter(false);
    };
    return (
        <div className="flex items-center py-4">
            <div className="flex items-center space-x-2 w-full">
                <Input
                    placeholder="Cari nama..."
                    value={globalFilter}
                    onChange={(e) =>
                        table.setGlobalFilter(String(e.target.value))
                    }
                    className="max-w-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                />

                {table.getColumn("status") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("status")}
                        title="Status"
                        options={status}
                        resetFilter={resetFilter}
                        onResetComplete={handleResetComplete}
                    />
                )}

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
