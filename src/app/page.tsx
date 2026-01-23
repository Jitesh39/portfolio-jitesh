import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import ProjectsGrid from "@/components/ProjectsGrid";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SkillsSection />
      <ProjectsGrid />

      {/* About & Contact Section Preview */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
          <h2 className="text-4xl mb-8">Let's work together</h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            I'm currently available for new projects and collaborations.
            If you have an idea, let's bring it to life.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-primary text-white rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </main>
  );
}
