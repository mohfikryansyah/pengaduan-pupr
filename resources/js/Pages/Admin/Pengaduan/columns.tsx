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
import { Complaint } from "@/types";
import {
    CheckCircle2,
    Circle,
    HelpCircle,
    LucideIcon,
    XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type Status = {
    value: string;
    label: string;
    icon: LucideIcon;
    color: string;
};

const statuses: Status[] = [
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

export const columns: ColumnDef<Complaint>[] = [
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
    },
    {
        accessorKey: "files",
        id: "Files",
        header: 'Files',
        cell: ({ row }) => {
            const files = row.original.files;
            // console.log(files)
            return (
                <span className="ml-2">
                    {files.map((file) => (
                        <div key={file.id}>
                            <a href={"storage/" + file.file_path} download={"storage/" + file.file_path}>
                                Download File
                            </a>
                        </div>
                    ))}
                </span>
            );
        },
    },
    {
        accessorKey: "status",
        id: "status",
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
            const [open, setOpen] = React.useState(false);
            const isDesktop = useMediaQuery("(min-width: 768px)");

            const [selectedStatus, setSelectedStatus] =
                React.useState<Status | null>(
                    statuses.find(
                        (status) => status.label === complaint.statuses.new_status
                    ) || null
                );

            const [isLoading, setIsLoading] = useState(false);

            const handlePublishToggle = (newStatus: Status | null) => {
                if (isLoading) return;

                setIsLoading(true);

                toast.promise(
                    new Promise<void>((resolve, reject) => {
                        router.put(
                            `/complaint/${complaint.id}`,
                            { new_status: newStatus?.label },
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
                                handlePublishToggle={handlePublishToggle}
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
                                handlePublishToggle={handlePublishToggle}
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
                    className="px-0"
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
        cell: ({ row }) => {
            const createdAt = row.original.created_at;
            const formatted = dayjs(createdAt).fromNow();

            return <span className="font-medium">{formatted}</span>;
        },
    },
];

function StatusList({
    setOpen,
    setSelectedStatus,
    handlePublishToggle,
}: {
    setOpen: (open: boolean) => void;
    setSelectedStatus: (status: Status | null) => void;
    handlePublishToggle: (newStatus: Status | null) => void;
}) {
    return (
        <Command>
            <CommandInput placeholder="Filter status..." className="focus-visible:ring-0 focus-visible:border-0 focus-visible:ring-offset-0"/>
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
                                handlePublishToggle(newStatus);
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
