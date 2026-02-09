import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import MetricsBar from "@/components/sections/MetricsBar";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/data/content";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <MetricsBar />
      <AboutSection />
      <ExperienceSection />
      <ProductsSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-[hsl(220,20%,12%)] text-[hsl(40,10%,96%)] py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[hsl(220,10%,50%)]">
            &copy; {new Date().getFullYear()} Hadi Hijazi
          </p>

          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[hsl(220,10%,50%)] hover:text-[hsl(40,10%,96%)] transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[hsl(220,10%,50%)] hover:text-[hsl(40,10%,96%)] transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-[hsl(220,10%,50%)] hover:text-[hsl(40,10%,96%)] transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <p className="text-xs text-[hsl(220,10%,50%)]">
            Built with React + Tailwind
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
