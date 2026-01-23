"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl"
            >
                <h1 className="text-5xl md:text-7xl font-serif font-black text-[#0f172a] mb-2 tracking-tight text-center">
                    Hi, I'm Jitesh
                </h1>

                <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                    Software Developer with expertise in building scalable applications using Next.js and the MERN stack.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/work"
                        className="px-10 py-4 bg-[#0f172a] text-white rounded-full font-bold text-sm tracking-wide hover:bg-opacity-90 transition-all shadow-lg shadow-gray-200"
                    >
                        My Projects
                    </Link>
                    <Link
                        href="/contact"
                        className="px-10 py-4 bg-white border-2 border-gray-100 text-[#0f172a] rounded-full font-bold text-sm tracking-wide hover:bg-gray-50 transition-all"
                    >
                        Contact Me
                    </Link>
                </div>
            </motion.div>

        </section>
    );
}
