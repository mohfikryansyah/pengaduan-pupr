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
import { Boxes } from "@/Components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { FlipWords } from "@/Components/ui/flip-words";

export default function Home() {
    const words = [
        "Masyarakat",
        "Online",
        "Cepat Tanggap",
        "Fasilitas Umum",
        "Berbasis Teknologi",
    ];

    return (
        <Main>
            <div className="h-[60vh] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
                <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

                <Boxes />
                <div className="h-[40rem] z-[50] -mt-10 min-w-screen-md flex justify-center items-center px-4">
                    <div className="text-5xl mx-auto text-center space-y-2 font-semibold text-white dark:text-neutral-400">
                        <p className="text-xl text-neutral-300 font-normal relative">
                            Sampaikan laporan Anda langsung kepada instansi
                            pemerintah berwenang
                        </p>
                        <h1>
                            Layanan Pengaduan <br />
                        </h1>
                        <FlipWords
                            words={words}
                            className="text-yellow-500 px-0"
                        />
                    </div>
                </div>
            </div>
            <FormPengaduan />
            {/* <Header /> */}
        </Main>
    );
}

function Header() {
    return (
        <div className="relative w-full h-[60vh] bg-[#063b3e] overflow-hidden">
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
                    <span className="md:text-7xl text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-yellow-300">
                        Layanan Pengaduan
                    </span>
                </h1>
                <p className="mt-4 text-lg md:text-xl tracking-wider">
                    Sampaikan laporan Anda langsung kepada instansi pemerintah
                    berwenang
                </p>
            </motion.h1>
        </div>
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
        y: 50,
        // rotate: -10,
        transition: {
            type: "tween",
            bounce: 0.4,
            duration: 1,
        },
    },
};

const formSchema = z.object({
    name: z.string().min(2).max(50),
    message: z.string().nonempty({ message: "Tidak boleh kosong" }),
    audio: z.instanceof(File).optional(),
    latitude: z.number({ message: "Hanya boleh menuliskan angka!" }),
    longitude: z.number({ message: "Hanya boleh menuliskan angka!" }),
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
            className="relative min-h-[90vh] p-4 md:p-0 z-[50]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.6 }}
        >
            <motion.div
                className="mx-auto -mt-[12rem] lg:max-w-screen-lg w-full z-[1] bg-white shadow-xl p-6 rounded-2xl"
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
                                                    Latitude
                                                    <span className="text-red-500">
                                                        *
                                                    </span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Masukkan Latitude"
                                                        {...field}
                                                        onChange={(e) => {
                                                            const value =
                                                                e.target.value;
                                                            field.onChange(
                                                                value === ""
                                                                    ? undefined
                                                                    : parseFloat(
                                                                          value
                                                                      ) || value
                                                            );
                                                        }}
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
                                                        onChange={(e) => {
                                                            const value =
                                                                e.target.value;
                                                            field.onChange(
                                                                value === ""
                                                                    ? undefined
                                                                    : parseFloat(
                                                                          value
                                                                      ) || value
                                                            );
                                                        }}
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

        // recorder.onstop = () => {
        //     const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
        //     onAudioReady(audioBlob);
        //     const url = URL.createObjectURL(audioBlob);
        //     setAudioURL(url);
        // };
        recorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
            onAudioReady(audioBlob);

            const reader = new FileReader();
            reader.onloadend = () => {
                setAudioURL(reader.result as string); // Hasilkan Data URL
            };
            reader.readAsDataURL(audioBlob);
        };
    };

    // const startRecording = async () => {
    //     setAudioURL(null);

    //     try {
    //         const stream = await navigator.mediaDevices.getUserMedia({
    //             audio: true,
    //         });
    //         const recorder = new MediaRecorder(stream, {
    //             mimeType: "audio/wav",
    //         });
    //         setMediaRecorder(recorder);

    //         recorder.start();
    //         setIsRecording(true);

    //         const audioChunks: Blob[] = [];
    //         recorder.ondataavailable = (event) => {
    //             audioChunks.push(event.data);
    //         };

    //         recorder.onstop = () => {
    //             const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
    //             onAudioReady(audioBlob);

    //             const reader = new FileReader();
    //             reader.onload = () => {
    //                 setAudioURL(reader.result as string);
    //             };
    //             reader.readAsDataURL(audioBlob);
    //         };
    //     } catch (error) {
    //         toast.error("Error starting recording");
    //     }
    // };

    const stopRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
        }
        setIsRecording(false);
    };

    return (
        <>
            <div className="md:flex items-center space-x-3 md:space-y-0 space-y-3">
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
                <audio
                    controls
                    className="audio-player"
                    onPlay={() => console.log("Audio started playing")}
                >
                    <source src={audioURL} type="audio/mp3" />
                    <source src={audioURL} type="audio/webm" />
                    <source src={audioURL} type="audio/wav" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    );
};
