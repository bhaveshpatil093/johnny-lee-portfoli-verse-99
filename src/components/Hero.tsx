import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden hero-bg-animated"
      style={{
        backgroundImage: `linear-gradient(rgba(20, 35, 70, 0.85), rgba(20, 35, 70, 0.7)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float animate-glow-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-2xl floating-element animate-sparkle"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-primary/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-accent/30 rotate-45 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-3/4 left-1/6 w-8 h-1 bg-accent/25 animate-float" style={{ animationDelay: '2.5s' }}></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <div className="animate-fade-in-up">
            <div className="mb-6 relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-2 relative group">
                <span className="relative z-10 transition-all duration-500 group-hover:scale-105">Johnny Lee</span>
                <div className="absolute inset-0 text-gradient opacity-30 blur-sm group-hover:opacity-50 transition-opacity duration-500">Johnny Lee</div>
                <div className="absolute -inset-4 bg-gradient-accent opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500 rounded-lg"></div>
              </h1>
              <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full animate-pulse-glow relative">
                <div className="absolute inset-0 bg-gradient-accent rounded-full animate-pulse"></div>
                <div className="absolute -inset-1 bg-gradient-accent rounded-full opacity-50 blur-sm"></div>
              </div>
            </div>
            <div className="text-xl md:text-2xl text-accent mb-8 font-medium">
              <span className="inline-block magnetic-hover">Business Coach</span> | 
              <span className="inline-block magnetic-hover">Quality Assurance</span> | 
              <span className="inline-block magnetic-hover">Website Designer</span> | 
              <span className="inline-block magnetic-hover">Graphic Artist</span>
            </div>
            <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transforming businesses through strategic coaching, ensuring quality through meticulous testing, 
              and creating stunning digital experiences that drive results. Based in 
              <span className="text-accent font-medium">Boise, Idaho</span>.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="animate-slide-in-right creative-button group"
            >
              <span className="relative z-10 group-hover:text-shadow transition-all duration-300">View My Work</span>
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="animate-slide-in-right creative-button group"
            >
              <span className="relative z-10">Let's Connect</span>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="mailto:johnny@example.com" className="text-white hover:text-accent transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/johnny-lee/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-white hover:text-accent transition-colors">
              <Github size={24} />
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown 
              size={32} 
              className="mx-auto text-accent cursor-pointer hover:text-accent-light transition-colors" 
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;