"use client"

import { motion } from 'framer-motion';

interface ComponentProps {
    number: string,
    title: string,
    body: string,
}

export default function MyCard({number, title, body}: ComponentProps) {
    return (
        <motion.div
            className="bg-[#113a4e] rounded-lg h-auto space-y-2 p-5 text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
        >
            <h1 className="text-7xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-[#113a4e]">
                {number}
            </h1>
            <h2 className="text-xl font-bold text-[#1989c2]">
                {title}
            </h2>
            <p className="text-sm text-gray-300">
                {body}
            </p>
        </motion.div>
    );
}
