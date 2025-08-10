import { Mail, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Johnny Lee</h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Transforming businesses through strategic coaching, ensuring quality through 
                meticulous testing, and creating stunning digital experiences.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:johnny@example.com" className="hover:text-accent transition-colors">
                  <Mail size={20} />
                </a>
                <a href="https://www.linkedin.com/in/johnny-lee/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">Business Coaching</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Quality Assurance</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Website Design</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Graphic Arts</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#experience" className="hover:text-accent transition-colors">Experience</a></li>
                <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-primary-foreground/60 text-sm">
                © {currentYear} Johnny Lee. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-primary-foreground/60 text-sm mt-4 md:mt-0">
                <span>Made with</span>
                <Heart size={16} className="text-accent" />
                <span>in Boise, Idaho</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;