"use client";

import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
    {
        title: "TheStudySmith",
        category: "wordpress, custom theme, plugin development",
        image: "/studysmith.png",
        // image: "/studysmith.png",
        link: "https://thestudysmith9.wordpress.com/",
    },
    {
        title: "ExploreIndia",
        category: "frontend, react, tailwindcss",
        image: "/exploreindia.png",
        link: "https://exploreind.netlify.app/",
    },
    {
        title: "abc",
        category: "abc",
        image: "",
        link: "#",
    },
    {
        title: "abc",
        category: "abc",
        image: "",
        link: "#",
    },
    {
        title: "abc",
        category: "abc",
        image: "",
        link: "#",
    },
    {
        title: "abc",
        category: "abc",
        image: "",
        link: "#",
    },
];

export default function ProjectsGrid() {
    return (
        <section id="work" className="max-w-7xl mx-auto px-6 sm:px-12 py-24">
            <div className="flex justify-center items-center mb-16 ,-50">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-4xl md:text-5xl mb-4">
                        Featured Projects
                    </h2>

                    <p className="text-gray-500 max-w-lg">
                        A collection of projects where I've blended design and code to create meaningful digital solutions.
                    </p>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}
