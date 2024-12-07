"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampDemo() {
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                Build lamps <br /> the right way
            </motion.h1>
        </LampContainer>
    );
}

export const LampContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full z-0",
                className
            )}
        >
            <svg
                width="100%"
                height="160px"
                className="absolute bottom-0"
                viewBox="0 0 1300 160"
                preserveAspectRatio="none"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path
                        d="M1300,160 L-5.68434189e-14,160 L-5.68434189e-14,119 C423.103102,41.8480501 1096.33049,180.773108 1300,98 L1300,160 Z"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                    ></path>
                    <path
                        d="M129.77395,40.2373685 C292.925845,31.2149964 314.345174,146.772453 615.144273,151.135393 C915.94337,155.498333 1017.27057,40.8373289 1240.93447,40.8373289 C1262.89392,40.8373289 1282.20864,41.9705564 1299.18628,44.0144896 L1300,160 L-1.0658141e-14,160 L-1.0658141e-14,105 C31.4276111,70.4780448 73.5616946,43.3459311 129.77395,40.2373685 Z"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                        opacity="0.3"
                    ></path>
                    <path
                        d="M69.77395,60.2373685 C232.925845,51.2149964 314.345174,146.772453 615.144273,151.135393 C915.94337,155.498333 1017.27057,0.837328936 1240.93447,0.837328936 C1263.91283,0.837328936 1283.59768,0.606916225 1300,1 L1300,160 L-1.70530257e-13,160 L-9.9475983e-14,74 C-9.9475983e-14,74 36.9912359,62.0502671 69.77395,60.2373685 Z"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                        opacity="0.3"
                    ></path>
                    <path
                        d="M2.27373675e-13,68 C23.2194389,95.7701288 69.7555676,123.009338 207,125 C507.7991,129.36294 698.336099,22 922,22 C1047.38026,22 1198.02057,63.2171658 1300,101 L1300,160 L0,160 L2.27373675e-13,68 Z"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                        opacity="0.3"
                        transform="translate(650, 91) scale(-1, 1) translate(-650, -91) "
                    ></path>
                </g>
            </svg>
            <div className="relative flex w-full flex-1 scale-y-125 md:-mt-24 -mt-20 items-center justify-center isolate z-0 ">
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-green-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                    <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-green-500 text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>
                <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
                <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-green-500 opacity-50 blur-3xl"></div>
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "16rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-green-400 blur-2xl"
                ></motion.div>
                <motion.div
                    initial={{ width: "15rem" }}
                    whileInView={{ width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-green-400 "
                ></motion.div>

                <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
            </div>

            <div className="relative z-50 flex md:-translate-y-96 -translate-y-80 flex-col items-center px-5">
                {children}
            </div>
        </div>
    );
};
