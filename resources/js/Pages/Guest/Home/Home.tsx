import Main from "../Layout/Main";
import { FlipWords } from "@/Components/ui/flip-words";
import FormPengaduan from "./Form/FormPengaduan";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Input } from "@/Components/ui/input";
import { Search, Twitter } from "lucide-react";
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
import {
    animate,
    motion,
    useAnimate,
    useInView,
    useMotionValue,
    useTransform,
    Variants,
} from "framer-motion";
import MyCard from "@/Components/ui/mycard";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Home() {
    return (
        <Main>
            <Head title="Dinas Perumahan dan Pemukiman" />
            <Header />
            <FormPengaduan />
            <AlurPengaduan />
            <WhyUs />
            <AnimatedTestimonialsDemo />
            {/* <Pertanyaan /> */}
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
            router.get(
                route("complaint.search"),
                { query: search },
                { preserveState: true, preserveScroll: true }
            );
        } else {
            return toast.error("Nomor telp tidak valid");
        }
    };

    return (
        <div className="bg-[#083247] w-full md:py-32 py-24 overflow-hidden">
            <div className="max-w-for-monitor mx-auto md:px-3 overflow-hidden md:mb-20 mb-28 flex h-auto item-center justify-between">
                <div className="flex flex-col gap-y-2 md:px-0 px-3 items-start justify-center text-center font-semibold text-[#e9f3f4] dark:text-neutral-400">
                    <div className="bg-[#e9f3f4] rounded-sm text-[#083247] py-1 px-2 font-normal text-xs tracking-wider">
                        Dinas Perumahan dan Kawasan Permukiman Kota Gorontalo
                    </div>
                    <h1 className="lg:text-6xl text-4xl font-bold mb-3">
                        Layanan Pengaduan
                    </h1>
                    <FlipWords
                        words={words}
                        className="text-gray-800 bg-yellow-300 pl-3 pr-1 rounded-xl py-1.5 font-bold lg:text-6xl text-4xl"
                    />
                    <p className="md:text-xl my-5 md:max-w-md text-start text-lg text-[#b6bac5]">
                        Sampaikan laporan Anda langsung kepada instansi
                        pemerintah berwenang
                    </p>
                    <div className="flex">
                        <div className="inline-flex items-center bg-white/80 rounded-lg max-w-xl mb-3">
                            <Search className="ml-2 w-5 h-5 text-black/70" />
                            <Input
                                id="search"
                                type="tel"
                                placeholder="Ketik Nomor Anda"
                                className="z-[50] py-2 focus-visible:ring-0 focus-visible:border-0 w-[200px] mx-auto focus-visible:ring-offset-0 text-black/80 bg-transparent border-0"
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                            />
                        </div>
                        <Button
                            // variant={"secondary"}
                            size={"lg"}
                            onClick={handleSearch}
                            className="ml-2 px-4 text-normal bg-[#348d9d] hover:bg-[#2c7785] active:scale-90 duration-300 transition"
                        >
                            Cari Laporan
                        </Button>
                    </div>
                </div>
                <div className="hidden md:flex flex-col items-start justify-center">
                    <div className="max-w-md overflow-hidden rounded-xl">
                        <img
                            src="/image/bg-header.jpg"
                            className="max-w-md h-auto rounded-xl hover:scale-105 transition duration-300"
                            alt="Lapor Vector"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function AlurPengaduan() {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const cardVariants: Variants = {
        offscreen: {
            y: 200,
        },
        onscreen: {
            y: 0,
            // rotate: -10,
            transition: {
                type: "bounce",
                bounce: 0.4,
                duration: 1.3,
            },
        },
    };

    const data = [
        {
            number: "1",
            title: "Ajukan Pengaduan",
            description: `Mulailah dengan mengisi formulir pengaduan secara online, yang mencakup deskripsi rinci mengenai masalah yang Anda hadapi. Anda dapat menyertakan foto atau bukti pendukung untuk memperjelas laporan Anda. Proses ini dapat dilakukan melalui perangkat apa saja, kapan saja.`,
        },
        {
            number: "2",
            title: "Proses Verifikasi",
            description: `Setelah pengaduan Anda diterima, tim Disperkim akan melakukan verifikasi untuk memastikan keakuratan informasi dan keabsahan masalah yang dilaporkan. Jika diperlukan, tim akan menghubungi Anda untuk klarifikasi lebih lanjut sebelum memprosesnya lebih lanjut.`,
        },
        {
            number: "3",
            title: "Tindak Lanjut",
            description: `Setelah pengaduan diverifikasi, tim terkait akan segera mengambil langkah-langkah untuk menyelesaikan masalah yang dilaporkan. Solusi yang diberikan akan sesuai dengan kebijakan dan prioritas yang ada, dengan tujuan untuk menyelesaikan masalah secepat mungkin.`,
        },
        {
            number: "4",
            title: "Notifikasi",
            description: `Selama proses penyelesaian, Anda akan mendapatkan pembaruan status pengaduan melalui email atau notifikasi di aplikasi. Anda akan diberi tahu jika ada perkembangan baru, seperti perubahan status atau penyelesaian masalah, sehingga Anda selalu mengetahui status pengaduan Anda.`,
        },
    ];

    return (
        <motion.div
            id="about"
            className="w-full h-auto bg-[#083247] lg:py-20 lg:px-32 md:p-10 px-5 py-10 overflow-hidden"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{
                once: true,
                amount: isDesktop ? 0.6 : 0.3,
            }}
        >
            {/* <p className="text-[#126792]">STEP</p> */}
            <h1 className="text-white md:text-4xl text-2xl font-bold text-center md:text-start">
                Alur Pengaduan Disperkim
            </h1>
            <motion.div
                variants={cardVariants}
                className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-10"
            >
                {data.map((card, index) => (
                    <MyCard
                        key={index}
                        number={card.number}
                        title={card.title}
                        body={card.description}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
}

function WhyUs() {
    const counts = [
        useMotionValue(0),
        useMotionValue(0),
        useMotionValue(0),
        useMotionValue(0),
    ];
    const roundedCounts = counts.map((count) =>
        useTransform(count, (value) => Math.round(value))
    );
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);

    useEffect(() => {
        if (isInView) {
            // Target angka untuk masing-masing animasi
            const targets = [100, 152, 10000, 1000];
            targets.forEach((target, index) => {
                animate(counts[index], target, {
                    duration: 2,
                    ease: "easeOut",
                });
            });
        }
    }, [isInView]);

    return (
        <div id="whyus" className="w-full h-auto py-10 text-center">
            <div className="max-w-screen-lg mx-auto space-y-3 px-3">
                <h2 className="uppercase text-[#348d9d] font-semibold text-xl">
                    Why Us
                </h2>
                <h1 className="text-2xl md:text-4xl max-w-3xl md:leading-[3rem] leading-[2.5rem] mx-auto text-[#1d1e20] font-bold">
                    Kami memberikan solusi cepat, transparan, dan tanggap
                    terhadap setiap pengaduan masyarakat.
                </h1>
                <p className="text-gray-500 max-w-lg text-xl mx-auto font-semibold pt-7">
                    Lebih dari 10.000 laporan berhasil ditangani dan
                    penyelesaian rata-rata dalam 3 hari kerja.
                </p>
            </div>
            <div
                ref={scope}
                className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 pt-14 max-w-6xl mx-auto md:space-y-0 space-y-8"
            >
                <div className="space-y-5">
                    <motion.pre className="font-bold text-7xl text-yellow-400">
                        {roundedCounts[0]}
                    </motion.pre>
                    <p className="font-semibold text-gray-800 text-xl">
                        Laporan belum diproses
                    </p>
                </div>
                <div className="space-y-5">
                    <motion.pre className="font-bold text-7xl text-yellow-400">
                        {roundedCounts[1]}
                    </motion.pre>
                    <p className="font-semibold text-gray-800 text-xl">
                        Laporan sedang diproses
                    </p>
                </div>
                <div className="space-y-5">
                    <motion.pre className="font-bold text-7xl text-yellow-400">
                        {roundedCounts[2]}
                    </motion.pre>
                    <p className="font-semibold text-gray-800 text-xl">
                        Laporan selesai diproses
                    </p>
                </div>
                <div className="space-y-5">
                    <motion.pre className="font-bold text-7xl text-yellow-400">
                        {roundedCounts[3]}
                    </motion.pre>
                    <p className="font-semibold text-gray-800 text-xl">
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
        <div className="w-full py-10">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="uppercase text-[#348d9d] font-semibold text-xl">
                    Testimoni
                </h2>
            </div>
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
        <div className="w-full pb-[10rem] bg-[#083247] p-5 md:flex justify-around gap-5 text-gray-100">
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
                        <p className="self-center text-xl font-bold whitespace-nowrap">
                            DISPERKIM
                        </p>
                        <p className="self-center text-md font-bold whitespace-nowrap">
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
