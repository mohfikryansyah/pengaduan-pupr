"use client";

import Main from "../Layout/Main";
import { FlipWords } from "@/Components/ui/flip-words";
import { BackgroundBeamsWithCollision } from "@/Components/ui/background-beams-with-collision";
import { HeroParallaxDemo } from "./HeroParallax";
import FormPengaduan from "./Form/FormPengaduan";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { SearchComplaint } from "./SearchComplaint/search";
import { Input } from "@/Components/ui/input";
import { Search, Twitter } from "lucide-react";
import { BackgroundBeams } from "@/Components/ui/background-beams";
import { Spotlight } from "@/Components/ui/spotlight";
import { Button } from "@/Components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import { TimelineDemo } from "./Timeline/timeline";
import toast from "react-hot-toast";
import { AnimatedTestimonials } from "@/Components/ui/animated-testimonials";

export default function Home() {
    return (
        <Main>
            <Head title="Dinas Perumahan dan Pemukiman" />
            <Header />
            <FormPengaduan />
            <Fitur />
            <WhyUs />
            <AnimatedTestimonialsDemo />
            <Pertanyaan />
            <Footer />
            {/* <TimelineDemo /> */}
            {/* <HeroParallaxDemo /> */}
        </Main>
    );
}

function Header() {
    const words = [
        "Masyarakat",
        "Online",
        "Cepat Tanggap",
        "Fasilitas Umum",
        "Berbasis Teknologi",
    ];

    const [search, setSearch] = useState<string>("");
    const handleSearch = () => {
        if (search.length > 9) {
            router.get(route("complaint.search"), { query: search });
        }

        return toast.error("Nomor telp tidak valid");
    };

    // useEffect(() => {
    //     const timeoutId = setTimeout(() => {
    //         if (search.trim()) {
    //             router.get(
    //                 route("complaint.search"),
    //                 { query: search },
    //                 {
    //                     preserveState: true,
    //                     preserveScroll: true,
    //                 }
    //             );
    //         }
    //     }, 500);

    //     return () => clearTimeout(timeoutId);
    // }, [search]);

    return (
        // <BackgroundBeamsWithCollision>
        //     <Head title="Dinas Perumahan dan Pemukiman" />
        //     <div className="bg-grid-white/[0.2] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        //         <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        //         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        //         <div className="h-[40rem] z-[20] min-w-screen-md flex justify-center items-center px-4">
        //             <div className="md:text-5xl text-4xl md:-mt-[5rem] mx-auto text-center space-y-2 font-semibold text-white dark:text-neutral-400">
        //                 <div className="inline-flex items-center bg-white/80 rounded-lg max-w-xl mb-3">
        //                     <Search className="ml-2 w-5 h-5 text-black/70" />
        //                     <Input
        //                         placeholder="Ketik ID laporan Anda, ex. LAPOR1342"
        //                         className="focus-visible:ring-0 focus-visible:border-0 w-[300px] mx-auto focus-visible:ring-offset-0 text-black/80 bg-transparent border-0"
        //                         onChange={(e) => setSearch(e.target.value)}
        //                         value={search}
        //                     />
        //                 </div>
        //                 <p className="md:text-xl text-lg text-neutral-300 font-normal relative">
        //                     Sampaikan laporan Anda langsung kepada instansi
        //                     pemerintah berwenang
        //                 </p>
        //                 <h1>
        //                     Layanan Pengaduan <br />
        //                 </h1>
        //                 <FlipWords
        //                     words={words}
        //                     className="text-yellow-500 px-0"
        //                 />
        //             </div>
        //         </div>
        //     </div>
        // </BackgroundBeamsWithCollision>
        <div className="bg-[#e9f3f4] w-full h-[70vh] flex item-center justify-around">
            <div className="md:text-6xl text-4xl flex flex-col gap-y-2 md:-mt-20 md:px-0 px-3 items-start justify-center text-center font-semibold text-[#1d1e20] dark:text-neutral-400">
                <h1>
                    Layanan Pengaduan <br />
                </h1>
                <FlipWords
                    words={words}
                    className="text-[#083247] px-0 font-extrabold"
                />
                <p className="md:text-xl my-5 md:max-w-md text-start text-lg text-[#818a9e]">
                    Sampaikan laporan Anda langsung kepada instansi pemerintah
                    berwenang
                </p>
                <div className="flex">
                    <div className="inline-flex items-center bg-white/80 rounded-lg max-w-xl mb-3">
                        <Search className="ml-2 w-5 h-5 text-black/70" />
                        <Input
                            type="tel"
                            placeholder="Ketik Nomor Anda"
                            className="z-[50] py-2 focus-visible:ring-0 focus-visible:border-0 w-[200px] mx-auto focus-visible:ring-offset-0 text-black/80 bg-transparent border-0"
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                        />
                    </div>
                    <Button
                        onClick={handleSearch}
                        className="ml-2 bg-[#348d9d] active:scale-90 duration-300 transform"
                    >
                        Cari Laporan
                    </Button>
                </div>
            </div>
            <div className="hidden md:flex flex-col items-start justify-center -mt-20">
                <img
                    src="/image/lapor-vector.png"
                    className="max-w-sm h-auto"
                    alt="Lapor Vector"
                />
            </div>
        </div>
    );
}

function Fitur() {
    return (
        <div
            id="about"
            className="w-full h-auto bg-[#083247] lg:py-20 lg:px-32 md:p-10 p-5"
        >
            {/* <p className="text-[#126792]">STEP</p> */}
            <h1 className="text-white md:text-4xl text-lg">
                Alur Pengaduan Disperkim
            </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-10">
                <div className="bg-[#113a4e] rounded-lg h-auto space-y-2 p-5 text-white">
                    <h1 className="text-7xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-[#113a4e]">
                        1
                    </h1>
                    <h2 className="text-xl font-bold text-[#1989c2]">
                        Ajukan Pengaduan
                    </h2>
                    <p className="text-sm text-gray-300">
                        Mulailah dengan mengisi formulir pengaduan secara
                        online, yang mencakup deskripsi rinci mengenai masalah
                        yang Anda hadapi. Anda dapat menyertakan foto atau bukti
                        pendukung untuk memperjelas laporan Anda. Proses ini
                        dapat dilakukan melalui perangkat apa saja, kapan saja.
                    </p>
                </div>
                <div className="bg-[#113a4e] rounded-lg h-auto space-y-2 p-5 text-white">
                    <h1 className="text-7xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-[#113a4e]">
                        2
                    </h1>
                    <h2 className="text-xl font-bold text-[#1989c2]">
                        Proses Verifikasi
                    </h2>
                    <p className="text-sm text-gray-300">
                        Setelah pengaduan Anda diterima, tim Disperkim akan
                        melakukan verifikasi untuk memastikan keakuratan
                        informasi dan keabsahan masalah yang dilaporkan. Jika
                        diperlukan, tim akan menghubungi Anda untuk klarifikasi
                        lebih lanjut sebelum memprosesnya lebih lanjut.
                    </p>
                </div>
                <div className="bg-[#113a4e] rounded-lg h-auto space-y-2 p-5 text-white">
                    <h1 className="text-7xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-[#113a4e]">
                        3
                    </h1>
                    <h2 className="text-xl font-bold text-[#1989c2]">
                        Tindak Lanjut
                    </h2>
                    <p className="text-sm text-gray-300">
                        Setelah pengaduan diverifikasi, tim terkait akan segera
                        mengambil langkah-langkah untuk menyelesaikan masalah
                        yang dilaporkan. Solusi yang diberikan akan sesuai
                        dengan kebijakan dan prioritas yang ada, dengan tujuan
                        untuk menyelesaikan masalah secepat mungkin.
                    </p>
                </div>
                <div className="bg-[#113a4e] rounded-lg h-auto space-y-2 p-5 text-white">
                    <h1 className="text-7xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-[#113a4e]">
                        4
                    </h1>
                    <h2 className="text-xl font-bold text-[#1989c2]">
                        Notifikasi
                    </h2>
                    <p className="text-sm text-gray-300">
                        Selama proses penyelesaian, Anda akan mendapatkan
                        pembaruan status pengaduan melalui email atau notifikasi
                        di aplikasi. Anda akan diberi tahu jika ada perkembangan
                        baru, seperti perubahan status atau penyelesaian
                        masalah, sehingga Anda selalu mengetahui status
                        pengaduan Anda.
                    </p>
                </div>
            </div>
        </div>
    );
}

function WhyUs() {
    return (
        <div className="w-full h-auto py-10 text-center">
            <div className="max-w-screen-lg mx-auto space-y-3">
                <h2 className="uppercase text-[#348d9d] font-semibold text-xl">
                    Why Us
                </h2>
                <h1 className="text-3xl max-w-screen-sm mx-auto text-[#1d1e20] font-bold">
                    Kami memberikan solusi cepat, transparan, dan tanggap
                    terhadap setiap pengaduan masyarakat.
                </h1>
                <p className="text-gray-500 w-[21rem] mx-auto font-semibold pt-7">
                    Lebih dari 10.000 laporan berhasil ditangani dan
                    penyelesaian rata-rata dalam 3 hari kerja.
                </p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 pt-10 max-w-screen-lg mx-auto">
                <div className="">
                    <h1 className="font-bold text-7xl text-[#1d1e20]">100</h1>
                    <p className="font-semibold text-[#083247] text-lg">
                        Laporan belum diproses
                    </p>
                </div>
                <div className="">
                    <h1 className="font-bold text-7xl text-[#1d1e20]">152</h1>
                    <p className="font-semibold text-[#083247] text-lg">
                        Laporan sedang diproses
                    </p>
                </div>
                <div className="">
                    <h1 className="font-bold text-7xl text-[#1d1e20]">10k+</h1>
                    <p className="font-semibold text-[#083247] text-lg">
                        Laporan selesai diproses
                    </p>
                </div>
                <div className="">
                    <h1 className="font-bold text-7xl text-[#1d1e20]">1k+</h1>
                    <p className="font-semibold text-[#083247] text-lg">
                        Laporan ditolak
                    </p>
                </div>
            </div>
        </div>
    );
}

function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            quote: "Bagus sekali! Saya sangat senang dengan layanan yang diberikan. Sangat mudah digunakan dan hasilnya melebihi ekspektasi kami.",
            name: "Mohamad Fiqriansyah Panu",
            designation: "Air bersih",
            src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote: "Layanan yang luar biasa! Saya sangat senang dengan hasilnya. Saya sangat suka!",
            name: "Oten Syahputra",
            designation: "CTO at InnovateSphere",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
            name: "Emily Watson",
            designation: "Operations Director at CloudScale",
            src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
            name: "James Kim",
            designation: "Engineering Lead at DataPro",
            src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
            name: "Lisa Thompson",
            designation: "VP of Technology at FutureNet",
            src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
    return (
        <div className="w-full">
            <AnimatedTestimonials testimonials={testimonials} />
        </div>
    );
}

// function Fitur() {
//     return (
//         <div
//             id="about"
//             className="w-full h-auto bg-[#083247] md:py-20 md:px-32 p-5"
//         >
//             {/* <p className="text-[#126792]">STEP</p> */}
//             <h1 className="text-white md:text-4xl text-lg">
//                 Fitur Utama Sistem
//             </h1>
//             <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-10">
//                 <div className="bg-[#113a4e] rounded-lg h-auto space-y-2 p-5 text-white">
//                     <h1 className="text-7xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-[#113a4e]">
//                         1
//                     </h1>
//                     <h2 className="text-xl font-bold text-[#1989c2]">
//                         Mudah Digunakan
//                     </h2>
//                     <p className="text-sm text-gray-300">
//                         Sistem ini dirancang dengan antarmuka sederhana,
//                         memungkinkan pengajuan pengaduan hanya dalam beberapa
//                         langkah melalui perangkat apa pun.
//                     </p>
//                 </div>
//                 <div className="bg-[#113a4e] rounded-lg h-auto space-y-2 p-5 text-white">
//                     <h1 className="text-7xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-[#113a4e]">
//                         2
//                     </h1>
//                     <h2 className="text-xl font-bold text-[#1989c2]">
//                         Pelacakan Real-Time
//                     </h2>
//                     <p className="text-sm text-gray-300">
//                         Pantau perkembangan laporan Anda secara langsung, mulai
//                         dari tahap verifikasi hingga penyelesaian, dengan
//                         pembaruan status yang transparan.
//                     </p>
//                 </div>
//                 <div className="bg-[#113a4e] rounded-lg h-auto space-y-2 p-5 text-white">
//                     <h1 className="text-7xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-[#113a4e]">
//                         3
//                     </h1>
//                     <h2 className="text-xl font-bold text-[#1989c2]">
//                         Tanggap dan Transparan
//                     </h2>
//                     <p className="text-sm text-gray-300">
//                         Setiap pengaduan diproses cepat dengan tindakan yang
//                         tercatat dan dapat dilacak, memastikan keterbukaan dalam
//                         penyelesaian masalah.
//                     </p>
//                 </div>
//                 <div className="bg-[#113a4e] rounded-lg h-auto space-y-2 p-5 text-white">
//                     <h1 className="text-7xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-[#113a4e]">
//                         4
//                     </h1>
//                     <h2 className="text-xl font-bold text-[#1989c2]">
//                         Layanan 24/7
//                     </h2>
//                     <p className="text-sm text-gray-300">
//                         Ajukan laporan kapan saja, tanpa batasan waktu, melalui
//                         sistem yang selalu aktif sepanjang hari.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

function Pertanyaan() {
    return (
        <div className="max-w-screen-lg mx-auto py-10 md:px-0 px-10">
            <h1 className="text-4xl">Pertanyaan yang sering diajukan</h1>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components&apos; aesthetic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It's animated by default, but you can disable it if
                        you prefer.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

function Footer() {
    return (
        <div className="w-full pb-[10rem] bg-[#f5f9f9] p-5 md:flex justify-around gap-5 text-[#083247]">
            <div className="h-full">
                <Link
                    href="https://flowbite.com/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="/logo-kg.png"
                        className="w-9 h-auto"
                        alt="Flowbite Logo"
                    />
                    <div className="-space-y-2">
                        <p className="self-center text-xl font-bold whitespace-nowrap text-gray-800">
                            DISPERKIM
                        </p>
                        <p className="self-center text-md font-bold whitespace-nowrap text-gray-800">
                            KOTA GORONTALO
                        </p>
                    </div>
                </Link>
            </div>
            <div className="h-full grid grid-cols-3 gap-5">
                <div>
                    <h1>Solutions</h1>
                    <p>Tes 1</p>
                    <p>Tes 1</p>
                    <p>Tes 1</p>
                    <p>Tes 1</p>
                </div>
                <div>
                    <h1>Solutions</h1>
                    <p>Tes 1</p>
                    <p>Tes 1</p>
                    <p>Tes 1</p>
                    <p>Tes 1</p>
                </div>
                <div>
                    <h1>Solutions</h1>
                    <p>Tes 1</p>
                    <p>Tes 1</p>
                    <p>Tes 1</p>
                    <p>Tes 1</p>
                </div>
            </div>
            <div className="h-full">
                <h1>Follow Us</h1>
                <div className="flex gap-3">
                    <Twitter className="w-5 h-5" />
                    <Twitter className="w-5 h-5" />
                    <Twitter className="w-5 h-5" />
                </div>
            </div>
        </div>
    );
}
