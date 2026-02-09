import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedWorkSection from "@/components/sections/FeaturedWorkSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import WritingSection from "@/components/sections/WritingSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-foreground focus:text-background focus:px-4 focus:py-2 focus:rounded-md focus:text-sm"
      >
        Skip to content
      </a>
      <Navigation />
      <main>
      <HeroSection />
      <FeaturedWorkSection />
      <ProductsSection />
      <ExperienceSection />
      <WritingSection />
      <SkillsSection />
      <ContactSection />
      </main>

      <footer className="border-t border-border py-8 px-8">
        <div className="max-w-content mx-auto flex justify-between items-center">
          <p className="text-[0.78rem] text-tertiary">
            &copy; {new Date().getFullYear()} Hadi Hijazi
          </p>
          <span className="font-mono text-[0.72rem] text-tertiary tracking-[0.04em]">
            EN · FR · AR · ES
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
