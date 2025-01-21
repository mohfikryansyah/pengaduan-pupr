"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { toast } from "react-hot-toast";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/Components/ui/command";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import Modal from "@/Components/Modal";
import { useEffect, useRef, useState } from "react";
import DangerButton from "@/Components/DangerButton";
import { Complaint, Item } from "@/types";
import { router, usePage } from "@inertiajs/react";
import { FormRepair as FormRepairSchema } from "@/lib/FormPengaduan/schema";
import { Coordinates } from "@/lib/FormPengaduan/type";
import InputError from "@/Components/InputError";
import MyMapComponent from "@/Pages/Guest/Home/Form/MyMap";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Label } from "@/Components/ui/label";

export default function ButtonDialogForm({
    complaints,
    items,
}: {
    complaints: Complaint[];
    items: Item[];
}) {
    // const [open, setOpen] = useState(false);
    // const openModal = () => {
    //     setOpen(true);
    // };

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Edit Profile</Button>
                </DialogTrigger>
                <DialogContent
                    className="sm:max-w-[50rem]"
                    onInteractOutside={(e) => {
                        e.preventDefault();
                    }}
                >
                    <DialogHeader className="mb-2">
                        <DialogTitle>Buat Data Perbaikan</DialogTitle>
                        <DialogDescription>Deskripsi</DialogDescription>
                    </DialogHeader>
                    <div
                        className="space-y-5 overflow-y-auto h-[70vh] rounded-scrollbar"
                        data-lenis-prevent
                    >
                        <div className="pr-5 pb-5">
                            <RepairForm items={items} complaints={complaints} />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Close
                            </Button>
                        </DialogClose>
                        <Button type="submit" form="form-repair">
                            Save changes
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            {/* <Dialog>
                <div className="p-6 space-y-5 overflow-y-auto h-full rounded-scrollbar">
                    <div id="header" className="space-y-1.5">
                        <h1 className="text-lg font-semibold leading-none tracking-tight">
                            Buat Data Perbaikan
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Deskripsi
                        </p>
                    </div>
                    <RepairForm items={items} complaints={complaints} />
                    <div className="w-full relative pb-8">
                        <Button className="absolute right-0">SAVE</Button>
                    </div>
                </div>
            </Dialog> */}
        </>
    );
}

function RepairForm({
    className,
    complaints,
    items,
}: {
    className?: string;
    complaints: Complaint[];
    items: Item[];
}) {
    const { errors } = usePage().props;
    const form = useForm<z.infer<typeof FormRepairSchema>>({
        resolver: zodResolver(FormRepairSchema),
        defaultValues: {
            // user_id: 0,
            item_id: "",
            complaint_id: "",
            latitude: "",
            longitude: "",
            note: "",
        },
        mode: "onBlur",
    });

    function onSubmit() {
        router.post(route("repair.store"), form.getValues(), {
            onSuccess: () => {
                toast.success("Success!");
                form.reset();
            },
            onError: () => {
                toast.error("Terjadi Kesalahan!");
            },
        });
    }

    const handleCoordinatesChange = (coords: Coordinates) => {
        form.setValue("latitude", coords.lat);
        form.setValue("longitude", coords.lng);
    };

    const [currentLocation, setCurrentLocation] = useState<{
        lat: number;
        lng: number;
    } | null>(null);

    
    const statuses = ["Belum diproses", "Sedang diproses"];
    const complaintsBelumAtauSedangDiproses = complaints.filter((complaint) =>
        statuses.includes(complaint.statuses.status)
    );

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                encType="multipart/form-data"
                className={cn("space-y-4", className)}
                id="form-repair"
            >
                <SelectField
                    control={form.control}
                    name="complaint_id"
                    form={form}
                    label="Kode Pengaduan"
                    data={complaintsBelumAtauSedangDiproses}
                    description="Silakan pilih barang dari daftar."
                />
                <SelectField
                    control={form.control}
                    name="item_id"
                    form={form}
                    label="Pilih Barang"
                    data={items}
                    description="Silakan pilih barang dari daftar."
                />
                <div className="space-y-2 w-full">
                    <div className="flex items-center gap-x-1">
                        <FormLabel>Pilih Lokasi di Peta</FormLabel>
                        <span className="text-sm font-medium">atau</span>
                        <button
                            type="button"
                            className="text-sm font-medium text-blue-500 underline"
                            onClick={() => {
                                if (navigator.geolocation) {
                                    navigator.geolocation.getCurrentPosition(
                                        (position) => {
                                            const { latitude, longitude } =
                                                position.coords;
                                            form.setValue("latitude", latitude);
                                            form.setValue(
                                                "longitude",
                                                longitude
                                            );
                                            setCurrentLocation({
                                                lat: latitude,
                                                lng: longitude,
                                            });
                                            toast.success(
                                                "Lokasi berhasil diambil!"
                                            );
                                            console.log(latitude, longitude);
                                        },
                                        (error) => {
                                            toast.error(
                                                "Tidak dapat mengambil lokasi: " +
                                                    error.message
                                            );
                                        }
                                    );
                                } else {
                                    toast.error(
                                        "Geolocation tidak didukung di browser ini."
                                    );
                                }
                            }}
                        >
                            Gunakan Lokasi saat ini
                        </button>
                    </div>
                    <MyMapComponent
                        onCoordinatesChange={handleCoordinatesChange}
                        currentLocation={currentLocation}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="latitude"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Latitude
                                <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Masukkan Latitude"
                                    {...field}
                                    className="focus-visible:ring-[#063b3e]"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="longitude"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Longitude
                                <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Masukkan Longitude"
                                    {...field}
                                    type="text"
                                    className="focus-visible:ring-[#063b3e]"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
}


function List({
    children,
    loadMore,
    hasMore,
}: {
    children: React.ReactNode;
    loadMore: () => void;
    hasMore: boolean;
}) {
    const observerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!observerRef.current || !hasMore) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadMore();
                }
            },
            { threshold: 1.0 }
        );

        observer.observe(observerRef.current);
        return () => observer.disconnect();
    }, [loadMore, hasMore]);

    return (
        <Command>
            <CommandInput
                placeholder="Cari item..."
                className="h-9 focus-visible:ring-0 focus-visible:border-0"
            />
            <CommandList className="min-w-full">
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>{children}</CommandGroup>
                {hasMore && <div ref={observerRef} className="h-10" />}
            </CommandList>
        </Command>
    );
}

type CustomPopoverFieldProps = {
    control: any;
    name: string;
    label: string;
    data: { id: string | number; name: string }[];
    form: any;
    description: string;
};

const SelectField = ({
    control,
    name,
    label,
    data,
    form,
    description,
}: CustomPopoverFieldProps) => {
    const [open, setOpen] = useState(false);
    const [visibleData, setVisibleData] = useState(data.slice(0, 20));
    const [hasMore, setHasMore] = useState(data.length > 20);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Mobile screen breakpoint
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const loadMore = () => {
        const currentLength = visibleData.length;
        const nextData = data.slice(currentLength, currentLength + 20);
        setVisibleData((prev) => [...prev, ...nextData]);
        setHasMore(currentLength + nextData.length < data.length);
    };

    const handlePopoverChange = (isOpen: boolean) => {
        setOpen(isOpen);
        if (!isOpen) {
            setVisibleData(data.slice(0, 20));
            setHasMore(data.length > 20);
        }
    };

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel>{label}</FormLabel>
                    <Popover
                        open={open}
                        onOpenChange={handlePopoverChange}
                        modal={isMobile} // Modal behavior for mobile
                    >
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    className={cn(
                                        "w-full justify-between",
                                        !field.value && "text-muted-foreground"
                                    )}
                                >
                                    {field.value
                                        ? data.find(
                                              (item) => item.id === field.value
                                          )?.name
                                        : "Pilih"}
                                    <ChevronsUpDown className="opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent
                            className={cn(
                                "w-full p-0 z-[9999] popover-content-width-same-as-its-trigger",
                                isMobile
                                    ?? "inset-0 bg-white overflow-auto"
                                    
                            )}
                        >
                            <List loadMore={loadMore} hasMore={hasMore}>
                                {visibleData.map((item) => (
                                    <CommandItem
                                        value={item.name}
                                        key={item.id}
                                        onSelect={() => {
                                            form.setValue(name, item.id);
                                            setOpen(false);
                                        }}
                                    >
                                        {item.name}
                                        <Check
                                            className={cn(
                                                "ml-auto",
                                                item.id === field.value
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </List>
                        </PopoverContent>
                    </Popover>
                    {description && (
                        <FormDescription>{description}</FormDescription>
                    )}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

