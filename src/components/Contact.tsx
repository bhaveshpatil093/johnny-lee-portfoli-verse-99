import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, MapPin, Phone, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "johnny@example.com",
      link: "mailto:johnny@example.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/johnny-lee",
      link: "https://www.linkedin.com/in/johnny-lee/"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Boise, Idaho, United States",
      link: null
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/johnny-lee",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate on your next project? I'd love to hear from you. 
              Let's discuss how we can work together to achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8">
                Let's Connect
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="glass-card p-4 magnetic-hover group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">{info.label}</h4>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-muted-foreground hover:text-accent transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-muted-foreground">{info.value}</span>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-6 bg-gradient-primary text-white">
                <h4 className="text-xl font-bold mb-4">
                  Available for New Opportunities
                </h4>
                <p className="mb-4">
                  I'm currently accepting new clients for business coaching and quality assurance projects. 
                  Whether you need strategic guidance or technical expertise, let's discuss your needs.
                </p>
                <div className="flex space-x-4">
                  <div>
                    <span className="text-accent font-semibold">Response Time:</span>
                    <p className="text-sm">Within 24 hours</p>
                  </div>
                  <div>
                    <span className="text-accent font-semibold">Pronouns:</span>
                    <p className="text-sm">He/Him</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8">
                Send a Message
              </h3>
              
              <Card className="glass-card p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
                <form className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        First Name
                      </label>
                      <Input 
                        placeholder="Your first name"
                        className="border-border focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Your last name"
                        className="border-border focus:border-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Email Address
                    </label>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-border focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Subject
                    </label>
                    <Input 
                      placeholder="What would you like to discuss?"
                      className="border-border focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project or how I can help you..."
                      rows={6}
                      className="border-border focus:border-accent resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;