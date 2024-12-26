import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "@inertiajs/react";
import { Variants, motion } from "framer-motion";
import { CircleHelp } from "lucide-react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";
import MyMapComponent from "./MyMap";
import VoiceRecorder from "./VoiceRecorder";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/Components/ui/button";
import { FileUpload } from "@/Components/ui/file-upload";
import { formSchema } from "@/lib/FormPengaduan/schema";
import { Coordinates } from "@/lib/FormPengaduan/type";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function FormPengaduan() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            message: "",
            audio: undefined,
            latitude: undefined,
            longitude: undefined,
            files: [],
        },
        mode: "onBlur",
    });

    const handleFileUpload = (uploadedFiles: File[]) => {
        form.setValue("files", uploadedFiles);
    };

    function onSubmit() {
        router.post(route("complaint.store"), form.getValues(), {
            onSuccess: () => {
                toast.success("Pengaduan berhasil dikirim!");
                form.reset();
            },
            onError: (errors) => {
                toast.error("Terjadi Kesalahan");
            },
        });
    }

    const isDesktop = useMediaQuery("(min-width: 768px)");

    // const [isMediumScreen, setIsMediumScreen] = useState(false);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setIsMediumScreen(window.innerWidth >= 768);
    //     };

    //     handleResize();

    //     window.addEventListener("resize", handleResize);

    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);

    const cardVariants: Variants = {
        offscreen: {
            y: isDesktop ? 300 : 100,
        },
        onscreen: {
            y: 50,
            // rotate: -10,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1,
            },
        },
    };

    const handleCoordinatesChange = (coords: Coordinates) => {
        form.setValue("latitude", coords.lat);
        form.setValue("longitude", coords.lng);
    };

    return (
        <motion.div
            className="relative min-h-[90vh] p-4 md:p-0 z-[50]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.6 }}
        >
            <motion.div
                className="mx-auto md:-mt-[12rem] -mt-[7rem] lg:max-w-screen-lg w-full z-[1] bg-white shadow-xl p-6 rounded-2xl"
                variants={cardVariants}
            >
                <div className="w-full p-4 rounded-lg bg-slate-900 flex items-center justify-between">
                    <h1 className="text-yellow-400 font-semibold md:text-2xl text-lg">
                        Sampaikan Laporan Anda
                    </h1>

                    <Dialog>
                        <DialogTrigger>
                            <CircleHelp className="text-white" />
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    Are you absolutely sure?
                                </DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will
                                    permanently delete your account and remove
                                    your data from our servers.
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
                <div className="mt-2">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            encType="multipart/form-data"
                            className="space-y-4"
                        >
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Nama
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Ketikkan Nama Anda"
                                                {...field}
                                                className="focus:border-none focus-visible:ring-[#063b3e]"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Pesan
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Tuliskan pesan Anda"
                                                className="resize-none focus:border-none focus-visible:ring-[#063b3e]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <div className="flex justify-between">
                                            <FormDescription
                                                className={`order-2 ${
                                                    field.value.length > 450
                                                        ? "text-red-500"
                                                        : ""
                                                }`}
                                            >
                                                Maks. {field.value.length || 0}
                                                /450
                                            </FormDescription>
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="audio"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Rekam Suara</FormLabel>
                                        <FormControl>
                                            <VoiceRecorder
                                                onAudioReady={(audioBlob) => {
                                                    const file = new File(
                                                        [audioBlob],
                                                        "voice_recording.wav",
                                                        {
                                                            type: "audio/wav",
                                                        }
                                                    );
                                                    form.setValue("audio", file);
                                                    field.onChange(file);
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="files"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Dokumen Pendukung</FormLabel>
                                        <FormControl>
                                            <div className="w-full mx-auto min-h-80 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
                                                <FileUpload
                                                    onChange={handleFileUpload}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div>
                                <FormLabel>
                                    Pilih Lokasi di Peta
                                </FormLabel>
                                <MyMapComponent
                                    onCoordinatesChange={
                                        handleCoordinatesChange
                                    }
                                />
                                <div className="mt-2">
                                    <FormField
                                        control={form.control}
                                        name="latitude"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Latitude
                                                    <span className="text-red-500">
                                                        *
                                                    </span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Masukkan Latitude"
                                                        {...field}
                                                        className="focus:border-none focus-visible:ring-[#063b3e]"
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
                                                    <span className="text-red-500">
                                                        *
                                                    </span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Masukkan Longitude"
                                                        {...field}
                                                        type="text"
                                                        className="focus:border-none focus-visible:ring-[#063b3e]"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </div>
            </motion.div>
        </motion.div>
    );
}
