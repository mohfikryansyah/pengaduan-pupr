"use client";

import Main from "../Layout/Main";
import { FlipWords } from "@/Components/ui/flip-words";
import { BackgroundBeamsWithCollision } from "@/Components/ui/background-beams-with-collision";
import { HeroParallaxDemo } from "./HeroParallax";
import FormPengaduan from "./Form/FormPengaduan";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <Main>
            <Header />
            <FormPengaduan />
            <HeroParallaxDemo />
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
    return (
        <BackgroundBeamsWithCollision>
            <div className="bg-grid-white/[0.2] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
                <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                {/* <Boxes /> */}
                <div className="h-[40rem] z-[20] min-w-screen-md flex justify-center items-center px-4">
                    <div className="md:text-5xl text-4xl mt-20 mx-auto text-center space-y-2 font-semibold text-white dark:text-neutral-400">
                        <p className="md:text-xl md:-mt-32 -mt-16 text-lg text-neutral-300 font-normal relative">
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
        </BackgroundBeamsWithCollision>
    );
}
