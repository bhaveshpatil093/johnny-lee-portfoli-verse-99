import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-primary">Johnny Lee</div>
          
          <div className="hidden md:flex space-x-8">
            <Button variant="nav" onClick={() => scrollToSection("home")}>
              Home
            </Button>
            <Button variant="nav" onClick={() => scrollToSection("about")}>
              About
            </Button>
            <Button variant="nav" onClick={() => scrollToSection("experience")}>
              Experience
            </Button>
            <Button variant="nav" onClick={() => scrollToSection("projects")}>
              Projects
            </Button>
            <Button variant="nav" onClick={() => scrollToSection("contact")}>
              Contact
            </Button>
          </div>

          <Button 
            variant="accent" 
            size="sm"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;