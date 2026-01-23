"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <main className="min-h-screen">
            <section className="max-w-7xl mx-auto px-6 sm:px-12 pt-40 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h1 className="text-5xl md:text-7xl mb-8">About Me</h1>
                        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                            I'm Jitesh, a developer driven by the intersection of design and technology.
                            My journey started with a curiosity for how things work on the web,
                            which quickly evolved into a passion for building complex,
                            scalable applications.
                        </p>
                        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                            I specialize in the MERN stack, Next.js, and modern UI/UX principles.
                            Whether it's a sleek landing page or a robust backend system,
                            I strive for excellence in every line of code.
                        </p>
                        <div className="pt-8">
                            <a
                                href="/contact"
                                className="inline-block px-8 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </div>
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-medium mb-6">Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                {["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Framer Motion", "Machine Learning"].map((skill) => (
                                    <span key={skill} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium mb-6">Experience</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-lg">Full Stack Developer</h4>
                                    <p className="text-gray-500 text-sm">Freelance • 2023 - Present</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Software Intern</h4>
                                    <p className="text-gray-500 text-sm">TechCorp • 2022 - 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
