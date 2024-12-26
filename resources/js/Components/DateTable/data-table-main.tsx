// DataTable.tsx
"use client";

import * as React from "react";
import {
    ColumnDef,
    SortingState,
    VisibilityState,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { TableToolbar } from "./data-table-toolbar";
import { TableContent } from "./data-table-body";
import { TablePagination } from "./data-table-pagination";
import { Complaint } from "@/types";
import { Status } from "@/Pages/Admin/Pengaduan/columns";
// import { Category } from "../../Pages/Admin/Pengaduan/columns";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    filter?: Status[];
}

export function DataTable<TData, TValue>({columns, data, filter}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [globalFilter, setGlobalFilter] = React.useState("");
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({});

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        onColumnVisibilityChange: setColumnVisibility,
        state: {
            sorting,
            globalFilter,
            columnVisibility,
        },
    });

    return (
        <div>
            <TableToolbar
                table={table}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
                filter={filter}
            />
            <TableContent table={table} columns={columns} />
            <TablePagination table={table} />
        </div>
    );
}
