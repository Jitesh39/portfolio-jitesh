"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectProps {
    title: string;
    category: string;
    image: string;
    link: string;
}

export default function ProjectCard({ title, category, image, link }: ProjectProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
        >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 mb-4">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                        Project Image
                    </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                <div className="absolute top-4 right-4 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                    <ArrowUpRight className="w-5 h-5" />
                </div>
            </div>
            <div>
                <p className="text-sm text-gray-500 mb-1">{category}</p>
                <h3 className="text-xl font-medium">{title}</h3>
            </div>
        </motion.div>
    );
}
