"use client";

import { CircleHelp, Mic } from "lucide-react";
import { LampContainer } from "@/Components/ui/lamp";
import Main from "../Layout/Main";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/Components/ui/textarea";
import toast from "react-hot-toast";
import { router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Toggle } from "@/Components/ui/toggle";
import {
    MapContainer,
    TileLayer,
    useMap,
    Marker,
    Popup,
    useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { motion, Variants } from "framer-motion";

export default function Home() {
    return (
        <Main>
            <Header />
            <FormPengaduan />

            {/* <div className="max-w-screen-lg mx-auto">
                <ol className="items-center sm:flex">
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <svg
                                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3 sm:pe-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Flowbite Library v1.0.0
                            </h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                Released on December 2, 2021
                            </time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                Get started with dozens of web components and
                                interactive elements.
                            </p>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <svg
                                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3 sm:pe-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Flowbite Library v1.2.0
                            </h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                Released on December 23, 2021
                            </time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                Get started with dozens of web components and
                                interactive elements.
                            </p>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <svg
                                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3 sm:pe-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Flowbite Library v1.3.0
                            </h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                Released on January 5, 2022
                            </time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                Get started with dozens of web components and
                                interactive elements.
                            </p>
                        </div>
                    </li>
                </ol>
            </div> */}

            <div className="w-full mt-10 bg-[#063b3e] h-[200px] mb-20 flex items-center justify-center">
                <div className="text-white text-center space-y-4">
                    <h1 className="font-bold text-4xl">Jumlah Laporan</h1>
                    <h1 className="font-bold text-6xl">959,139</h1>
                </div>
            </div>

            {/* <footer className="lg:hidden fixed shadow-3xl z-50 border-t border-slate-50 overflow-hidden bottom-0 left-0 right-0 min-h-[65px] flex items-center w-full bg-white">
                <div className="grid grid-cols-4 w-full">
                    <div className="flex justify-center">
                        <a href="/">
                            <div className="flex flex-col items-center justify-center gap-[4px]">
                                <svg
                                    className="stroke-[#10B981]"
                                    width="25"
                                    height="24"
                                    viewBox="0 0 25 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.1521 18.0986H14.8382V14.0217C14.8382 12.8649 13.9069 11.9336 12.75 11.9336C11.5932 11.9336 10.6618 12.8649 10.6618 14.0217V18.0986H13.3454M12.75 2.25195C14.2527 2.25195 21.75 8.27679 21.75 10.6836V18.7477C21.75 20.4097 20.412 21.7477 18.75 21.7477H6.75C5.088 21.7477 3.75 20.4097 3.75 18.7477V10.6836C3.75 8.34561 11.2472 2.25195 12.75 2.25195Z"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                                <span className="text-[12px] leading-[18px] text-[#10B981] font-semibold">
                                    Beranda
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="flex justify-center">
                        <a href="/berita">
                            <div className="flex flex-col items-center justify-center gap-[4px]">
                                <svg
                                    className="stroke-[#64748B]"
                                    width="25"
                                    height="24"
                                    viewBox="0 0 25 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20.0653 6.25653C18.0795 7.18808 15.2363 7.72894 12.2276 7.72288C9.4144 7.71721 6.75646 7.23398 4.81674 6.40316M20.0653 17.1031C18.0795 16.1716 15.2363 15.6307 12.2276 15.6368C9.4144 15.6425 6.75646 16.1257 4.81674 16.9565M22 12C22 13.2804 21.7478 14.5482 21.2578 15.7312C20.7678 16.9141 20.0497 17.9889 19.1443 18.8943C18.2389 19.7997 17.1641 20.5178 15.9811 21.0078C14.7982 21.4978 13.5304 21.75 12.25 21.75C9.66412 21.75 7.18415 20.7228 5.35567 18.8943C3.52719 17.0658 2.5 14.5859 2.5 12C2.5 9.41414 3.52719 6.93419 5.35567 5.10571C7.18415 3.27723 9.66412 2.25 12.25 2.25C13.5304 2.25 14.7982 2.50219 15.9811 2.99217C17.1641 3.48216 18.2389 4.20034 19.1443 5.10571C20.0497 6.01108 20.7678 7.08591 21.2578 8.26884C21.7478 9.45176 22 10.7196 22 12ZM15.7187 12C15.7187 14.3869 15.373 16.6761 14.7577 18.364C14.1423 20.0518 13.3077 21 12.4375 21C11.5672 21 10.7326 20.0518 10.1173 18.364C9.50194 16.6761 9.15625 14.3869 9.15625 12C9.15625 9.61305 9.50194 7.32387 10.1173 5.63604C10.7326 3.94821 11.5672 3 12.4375 3C13.3077 3 14.1423 3.94821 14.7577 5.63604C15.373 7.32387 15.7187 9.61305 15.7187 12Z"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                                <span className="text-[12px] leading-[18px] font-normal text-slate-700">
                                    Berita
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="flex justify-center">
                        <a href="/pengumuman">
                            <div className="flex flex-col items-center justify-center gap-[4px]">
                                <svg
                                    className="stroke-[#64748B]"
                                    width="25"
                                    height="24"
                                    viewBox="0 0 25 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.75043 14.5375H5.99951C4.33752 14.5375 2.99951 13.1995 2.99951 11.5375V10.0551C2.99951 8.39307 4.33752 7.05507 5.99951 7.05507H8.75043M8.75043 14.5375V7.05507M8.75043 14.5375L18.2792 18.9906C19.305 19.4999 20.5692 19.5257 21.1503 18.3168C21.919 16.3929 22.5008 13.7312 22.5008 10.7963C22.5008 7.86132 21.919 5.1176 21.1503 3.19374C20.598 2.04362 19.2709 2.11174 18.2792 2.51991L8.75043 7.05507M10.1757 15.4987V19.89C10.1757 20.9223 9.34467 21.7533 8.31241 21.7533C7.28015 21.7533 6.44913 20.9223 6.44913 19.89V14.5375M10.8691 18.8735C10.8691 18.8735 12.9785 18.6391 12.9785 16.7641"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                                <span className="text-[12px] leading-[18px] font-normal text-slate-700">
                                    Pengumuman
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="flex justify-center">
                        <a href="/profil">
                            <div className="flex flex-col items-center justify-center gap-[4px]">
                                <svg
                                    className="stroke-[#64748B]"
                                    width="25"
                                    height="24"
                                    viewBox="0 0 25 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.92638 18.4799V21.0064M16.0746 18.4799V21.0064M15.645 6.39348C15.645 8.6824 13.7894 10.5379 11.5005 10.5379C9.2116 10.5379 7.35603 8.6824 7.35603 6.39348C7.35603 4.10456 9.2116 2.24902 11.5005 2.24902C13.7894 2.24902 15.645 4.10456 15.645 6.39348ZM2.50049 18.7687C2.50049 21.6682 6.52993 21.7512 11.5005 21.7512C16.4711 21.7512 20.5005 21.6682 20.5005 18.7687C20.5005 12.0064 2.50049 12.0064 2.50049 18.7687Z"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                                <span className="text-[12px] leading-[18px] font-normal text-slate-700">
                                    Profil
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </footer> */}
        </Main>
    );
}

function Header() {
    return (
        // <div className="relative w-full h-[60vh] bg-[#063b3e] overflow-hidden bg-grid-white/[0.2]">
        //     <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-[#063b3e] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        //     {/* <div
        //         className="absolute top-0 right-0 w-[100%] h-[100%] rotate-45 bg-gradient-to-b from-[#104144] to-[#063b3e] border-transparent bg-clip-border"
        //         style={{
        //             borderImage:
        //                 "linear-gradient(to left, #1f504c, #063b3e) 0.4",
        //         }}
        //     >
        //     </div> */}

        //     {/* <div className="absolute top-0 bg-gradient-to-b from-[#104144] to-[#063b3e] left-0 w-[200%] h-[100%] -rotate-45 opacity-30"></div> */}
        //     <svg
        //         width="100%"
        //         height="160px"
        //         className="absolute bottom-0"
        //         viewBox="0 0 1300 160"
        //         preserveAspectRatio="none"
        //         version="1.1"
        //         xmlns="http://www.w3.org/2000/svg"
        //     >
        //         <g>
        //             <path
        //                 d="M1300,160 L-5.68434189e-14,160 L-5.68434189e-14,119 C423.103102,41.8480501 1096.33049,180.773108 1300,98 L1300,160 Z"
        //                 fill="#FFFFFF"
        //                 fillRule="nonzero"
        //             ></path>
        //             <path
        //                 d="M129.77395,40.2373685 C292.925845,31.2149964 314.345174,146.772453 615.144273,151.135393 C915.94337,155.498333 1017.27057,40.8373289 1240.93447,40.8373289 C1262.89392,40.8373289 1282.20864,41.9705564 1299.18628,44.0144896 L1300,160 L-1.0658141e-14,160 L-1.0658141e-14,105 C31.4276111,70.4780448 73.5616946,43.3459311 129.77395,40.2373685 Z"
        //                 fill="#FFFFFF"
        //                 fillRule="nonzero"
        //                 opacity="0.3"
        //             ></path>
        //             <path
        //                 d="M69.77395,60.2373685 C232.925845,51.2149964 314.345174,146.772453 615.144273,151.135393 C915.94337,155.498333 1017.27057,0.837328936 1240.93447,0.837328936 C1263.91283,0.837328936 1283.59768,0.606916225 1300,1 L1300,160 L-1.70530257e-13,160 L-9.9475983e-14,74 C-9.9475983e-14,74 36.9912359,62.0502671 69.77395,60.2373685 Z"
        //                 fill="#FFFFFF"
        //                 fillRule="nonzero"
        //                 opacity="0.3"
        //             ></path>
        //             <path
        //                 d="M2.27373675e-13,68 C23.2194389,95.7701288 69.7555676,123.009338 207,125 C507.7991,129.36294 698.336099,22 922,22 C1047.38026,22 1198.02057,63.2171658 1300,101 L1300,160 L0,160 L2.27373675e-13,68 Z"
        //                 fill="#FFFFFF"
        //                 fillRule="nonzero"
        //                 opacity="0.3"
        //                 transform="translate(650, 91) scale(-1, 1) translate(-650, -91) "
        //             ></path>
        //         </g>
        //     </svg>

        //     <div className="relative h-full -mt-[5rem] flex flex-col justify-center items-center text-center text-white">
        //         <h1 className="text-4xl md:text-6xl font-bold">
        //             <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-yellow-300">
        //                 Layanan Pengaduan
        //             </span>
        //         </h1>
        //         <p className="mt-4 text-lg md:text-xl">
        //             Sampaikan laporan Anda langsung kepada instansi pemerintah
        //             berwenang
        //         </p>
        //     </div>
        // </div>
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-8 text-white py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                <h1 className="text-4xl md:text-6xl font-bold">
                    <span className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-yellow-300">
                        Layanan Pengaduan
                    </span>
                </h1>
                <p className="mt-4 text-lg md:text-xl tracking-wider">
                    Sampaikan laporan Anda langsung kepada instansi pemerintah
                    berwenang
                </p>
            </motion.h1>
        </LampContainer>
    );
}

type Coordinates = {
    lat: number;
    lng: number;
};

type MyMapComponentProps = {
    onCoordinatesChange: (coords: Coordinates) => void;
};

const MapWithClick = ({ onCoordinatesChange }: MyMapComponentProps) => {
    useMapEvent("click", (event) => {
        const { lat, lng } = event.latlng;
        onCoordinatesChange({ lat, lng });
    });

    return null;
};

const MyMapComponent = ({ onCoordinatesChange }: MyMapComponentProps) => {
    const [markerPosition, setMarkerPosition] = useState<{
        lat: number;
        lng: number;
    } | null>(null);

    const handleCoordinatesChange = (coords: Coordinates) => {
        setMarkerPosition(coords);
        onCoordinatesChange(coords);
    };

    return (
        <div
            className="map-container"
            style={{ height: "400px", width: "100%" }}
        >
            <MapContainer
                center={[0.556174, 123.058548]}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <MapWithClick onCoordinatesChange={handleCoordinatesChange} />
                {markerPosition && (
                    <Marker position={markerPosition}>
                        <Popup>
                            Latitude: {markerPosition.lat}, Longitude:{" "}
                            {markerPosition.lng}
                        </Popup>
                    </Marker>
                )}
            </MapContainer>
        </div>
    );
};

const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 100,
        // rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1,
        },
    },
};

const formSchema = z.object({
    name: z.string().min(2).max(50),
    message: z.string().nonempty({ message: "Tidak boleh kosong" }),
    audio: z.instanceof(File).optional(),
    latitude: z.number().optional(),
    longitude: z.number().optional(),
});

function FormPengaduan() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            message: "",
            audio: undefined,
            latitude: undefined,
            longitude: undefined,
        },
        mode: "onBlur",
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        router.post(route("homepage.store"), values, {
            onSuccess: () => {
                toast.success("Pengaduan berhasil dikirim!");
                form.reset();
            },
            onError: (errors) => {
                console.log(errors);
                toast.error("Terjadi Kesalahan");
            },
        });
    }

    const handleCoordinatesChange = (coords: Coordinates) => {
        form.setValue("latitude", coords.lat);
        form.setValue("longitude", coords.lng);
    };

    return (
        <motion.div
            className="relative min-h-[90vh] p-4 md:p-0"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
        >
            <motion.div
                className="mx-auto -mt-[25.2rem] lg:max-w-screen-lg w-full z-[1] bg-white shadow-xl p-6 rounded-2xl"
                variants={cardVariants}
            >
                <div className="w-full p-4 rounded-lg bg-[#063b3e] flex items-center justify-between">
                    <h1 className="text-white font-semibold md:text-2xl text-lg">
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
                                        <FormDescription
                                            className={`${
                                                field.value.length > 450
                                                    ? "text-red-500"
                                                    : ""
                                            }`}
                                        >
                                            Maks. {field.value.length || 0}
                                            /450
                                        </FormDescription>
                                        <FormMessage />
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
                                                    form.setValue(
                                                        "audio",
                                                        file
                                                    );
                                                    field.onChange(file);
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div>
                                <label className="block font-medium">
                                    Pilih Lokasi di Peta
                                </label>
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
                                        name="longitude"
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

const VoiceRecorder = ({
    onAudioReady,
}: {
    onAudioReady: (audio: Blob) => void;
}) => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState<string | null>(null);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
        null
    );

    const startRecording = async () => {
        setAudioURL(null);

        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
        });
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        recorder.start();
        setIsRecording(true);

        const audioChunks: Blob[] = [];
        recorder.ondataavailable = (event) => {
            audioChunks.push(event.data);
        };

        recorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
            onAudioReady(audioBlob);
            const url = URL.createObjectURL(audioBlob);
            setAudioURL(url);
        };
    };

    const stopRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
        }
        setIsRecording(false);
    };

    return (
        <>
            <div className="flex items-center space-x-3">
                <Toggle
                    onClick={isRecording ? stopRecording : startRecording}
                    className="bg-gray-100 data-[state=on]:bg-red-500 data-[state=on]:text-white"
                >
                    <Mic />
                    {isRecording ? "Sedang merekam" : "Mulai merekam"}
                </Toggle>

                {audioURL && <CustomAudioPlayer audioURL={audioURL} />}
            </div>
        </>
    );
};

const CustomAudioPlayer = ({ audioURL }: { audioURL: string }) => {
    return (
        <div className="audio-player-container">
            <div className="audio-player-wrapper">
                <audio controls className="audio-player">
                    <source src={audioURL} type="audio/wav" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    );
};
