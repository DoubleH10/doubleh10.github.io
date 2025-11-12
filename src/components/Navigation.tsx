import { useState, useEffect } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("hero")}
            className="font-heading text-lg font-semibold text-foreground"
          >
            HH
          </motion.button>

          <div className="hidden md:flex items-center gap-8">
            {["about", "experience", "projects", "contact"].map((section) => (
              <motion.button
                key={section}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(section)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors capitalize"
              >
                {section}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("https://github.com/doubleh", "_blank")}
                className="hover:text-accent transition-colors h-9 w-9"
              >
                <Github className="h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("https://linkedin.com/in/hadi-hijazi", "_blank")}
                className="hover:text-accent transition-colors h-9 w-9"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("mailto:hijazi.hadi@gmail.com")}
                className="hover:text-accent transition-colors h-9 w-9"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
