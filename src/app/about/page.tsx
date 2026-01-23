"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const experiences = [
    {
        period: "2026 January - Present",
        title: "Frontend Developer",
        company: "EVOL Technobits Digital Private Limited",
        description: "Frontend Developer experienced in creating high-performance, SEO-friendly web applications using React, Next.js, and modern UI frameworks."
    },
    {
        period: "2024 May - June",
        title: "Web Developer Intern",
        company: "WebNet Technologies",
        description: "Web Developer Intern at Webnet Technologies, contributing to responsive front-end development, integrating APIs, and improving user experience through clean, maintainable code."
    }

];

const education = [
    {
        period: "2022 - 2026",
        degree: "Bachelor Of Technology Computer Science Engineering",
        school: "Parul University"
    },
    {
        period: "2020 - 2022",
        degree: "Class XII",
        school: "BS College Danapur , Patna , Bihar"
    },
    {
        period: "2010 - 2020",
        degree: "Class X",
        school: "Dr. D RAM DAV Public School"
    }

];

const skills = ["UI/UX Design", "Full Stack Developer", "ML Intern"];

export default function About() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section with Image */}
            <section className="max-w-7xl mx-auto px-6 sm:px-12 pt-40 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">About Me</h1>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            My name is Jitesh, and I am currently pursuing a Bachelor of
                            Technology (B.Tech) in <span className="text-primary font-medium">Computer Science Engineering</span> (CSE) with a
                            specialization in Artificial Intelligence and Machine Learning (AI/ML)
                            from Polaris School of Technology.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="px-6 py-3 bg-[#0f172a] text-white rounded-full font-medium hover:opacity-90 transition-opacity"
                            >
                                Get in touch
                            </Link>
                            <a
                                href="jitesh-resume.pdf"
                                className="px-6 py-3 border border-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors"
                            >
                                Download Resume
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative aspect-square w-120 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"
                    >
                        <Image
                            src="/jit_img.jpeg"
                            alt="Jitesh - Developer"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="max-w-7xl mx-auto px-6 sm:px-12 py-24 border-t border-gray-100">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16">Experience</h2>
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
                                <div className="text-gray-500 text-sm font-medium">
                                    {exp.period}
                                </div>
                                <div className="md:col-span-3">
                                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Education Section */}
            <section className="max-w-7xl mx-auto px-6 sm:px-12 py-24 border-t border-gray-100 -mt-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16">Education</h2>
                    <div className="space-y-12">
                        {education.map((edu, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
                                <div className="text-gray-500 text-sm font-medium">
                                    {edu.period}
                                </div>
                                <div className="md:col-span-3">
                                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                                    <p className="text-primary font-medium">{edu.school}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
