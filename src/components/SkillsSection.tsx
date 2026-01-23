"use client";

import { motion } from "framer-motion";
import { Code2, Database, BrainCircuit, Wrench } from "lucide-react";

const skills = [
    {
        category: "Frontend",
        icon: <Code2 className="w-6 h-6" />,
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"]
    },
    {
        category: "Backend",
        icon: <Database className="w-6 h-6" />,
        items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"]
    },
    {
        category: "AI & Data",
        icon: <BrainCircuit className="w-6 h-6" />,
        items: ["Python", "Data Analysis", "AI Integration", "Scikit-learn", "Pandas", "Matplotlib"]
    },
    {
        category: "Tools & DevOps",
        icon: <Wrench className="w-6 h-6" />,
        items: ["Git", "Docker", "AWS", "Figma", "Postman", "Vercel"]
    }
];

export default function SkillsSection() {
    return (
        <section className="py-24 bg-white border-y border-gray-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-black text-[#0f172a] mb-4">Technical Expertise</h2>
                    <p className="text-gray-500 max-w-2xl text-lg leading-relaxed">
                        A specialized toolkit focused on building scalable web applications
                        and data-driven solutions with modern technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-gray-200/50 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                {skillGroup.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#0f172a] mb-4">{skillGroup.category}</h3>
                            <ul className="space-y-2">
                                {skillGroup.items.map((item, i) => (
                                    <li key={i} className="text-gray-600 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-primary transition-colors" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
