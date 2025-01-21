"use client";

import * as React from "react";
import { ColumnDef, Row } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { router } from "@inertiajs/react";
import { toast } from "react-hot-toast";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import { useMediaQuery } from "@/hooks/use-media-query";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/Components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/Components/ui/drawer";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";
import { Button } from "@/Components/ui/button";
import { Complaint, Status } from "@/types";
import { statuses } from "@/Pages/Admin/Pengaduan/Index";
import { cn } from "@/lib/utils";

export const columns = (
    handleOpenDialog: (complaint: Complaint) => void
): ColumnDef<Complaint>[] => [
    {
        accessorKey: "name",
        id: "Nama",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Nama
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const complaint = row.original;
            return (
                <Button
                    variant="link"
                    className="text-left"
                    onClick={() => handleOpenDialog(complaint)}
                >
                    {complaint.name}
                </Button>
            );
        },
    },
    {
        accessorKey: "message",
        id: "Pesan",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Pesan
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const message = row.original.message;
            return <div className="truncate max-w-xs">{message}</div>;
        },
    },
    {
        accessorKey: "files",
        id: "Files",
        header: "Files",
        cell: ({ row }) => {
            const files = row.original.files;
            return (
                <span className="ml-2">
                    {files.map((file) => (
                        <div key={file.id}>
                            <a
                                href={"storage/" + file.file_path}
                                download={"storage/" + file.file_path}
                            >
                                Download File
                            </a>
                        </div>
                    ))}
                </span>
            );
        },
    },
    {
        accessorKey: "statuses.status",
        id: "Status",
        filterFn: "arrIncludesSome",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const complaint = row.original;
            const [open, setOpen] = useState(false);
            const isDesktop = useMediaQuery("(min-width: 768px)");

            const [selectedStatus, setSelectedStatus] = useState<Status | null>(
                statuses.find(
                    (status) => status.label === complaint.statuses.status
                ) || null
            );

            const [isLoading, setIsLoading] = useState(false);

            const handleStatus = (newStatus: Status | null) => {
                if (isLoading) return;

                setIsLoading(true);

                toast.promise(
                    new Promise<void>((resolve, reject) => {
                        router.put(
                            `/complaint/${complaint.id}`,
                            { status: newStatus?.label },
                            {
                                preserveScroll: true,
                                onSuccess: () => {
                                    setSelectedStatus(newStatus);
                                    setIsLoading(false);
                                    resolve();
                                },
                                onError: () => {
                                    setIsLoading(false);
                                    reject(
                                        new Error(
                                            "Failed to update complaint status"
                                        )
                                    );
                                },
                            }
                        );
                    }),
                    {
                        loading: "Mengubah status pengaduan...",
                        success: `Status pengaduan berhasil diubah`,
                        error: "Gagal mengubah status pengaduan!",
                    }
                );
            };

            if (isDesktop) {
                return (
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                className="min-w-min justify-start"
                            >
                                {selectedStatus ? (
                                    <>
                                        <selectedStatus.icon
                                            className={cn(
                                                "mr-1 h-4 w-4 shrink-0",
                                                selectedStatus.color
                                            )}
                                        />
                                        {selectedStatus.label}
                                    </>
                                ) : (
                                    <>+ Set status</>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0" align="start">
                            <StatusList
                                setOpen={setOpen}
                                setSelectedStatus={setSelectedStatus}
                                handleStatus={handleStatus}
                            />
                        </PopoverContent>
                    </Popover>
                );
            }

            return (
                <Drawer open={open} onOpenChange={setOpen}>
                    <DrawerTrigger asChild>
                        <Button
                            variant="outline"
                            className="min-w-min justify-start"
                        >
                            {selectedStatus ? (
                                <>
                                    <selectedStatus.icon
                                        className={cn(
                                            "mr-1 h-4 w-4 shrink-0",
                                            selectedStatus.color
                                        )}
                                    />
                                    {selectedStatus.label}
                                </>
                            ) : (
                                <>+ Set status</>
                            )}
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className="mt-4 border-t">
                            <StatusList
                                setOpen={setOpen}
                                setSelectedStatus={setSelectedStatus}
                                handleStatus={handleStatus}
                            />
                        </div>
                    </DrawerContent>
                </Drawer>
            );
        },
    },
    {
        accessorKey: "created_at",
        id: "Created At",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Created At
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        // cell: ({ row }) => {
        //     // const createdAt = row.original.created_at;
        //     // const formatted = dayjs(createdAt).fromNow();

        //     // return <span className="font-medium">{createdAt}</span>;
        // },
    },
];

function StatusList({
    setOpen,
    setSelectedStatus,
    handleStatus,
}: {
    setOpen: (open: boolean) => void;
    setSelectedStatus: (status: Status | null) => void;
    handleStatus: (newStatus: Status | null) => void;
}) {
    return (
        <Command>
            <CommandInput
                placeholder="Filter status..."
                className="focus-visible:ring-0 focus-visible:border-0 focus-visible:ring-offset-0"
            />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                    {statuses.map((status) => (
                        <CommandItem
                            key={status.value}
                            value={status.value}
                            onSelect={(value) => {
                                const newStatus =
                                    statuses.find(
                                        (priority) => priority.value === value
                                    ) || null;
                                handleStatus(newStatus);
                                setOpen(false);
                            }}
                        >
                            <status.icon
                                className={cn(
                                    "mr-2 h-4 w-4",
                                    status.value === status?.value
                                        ? "opacity-100"
                                        : "opacity-40",
                                    status.color
                                )}
                            />
                            {status.label}
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </Command>
    );
}
