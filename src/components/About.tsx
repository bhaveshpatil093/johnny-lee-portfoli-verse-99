import { Card } from "@/components/ui/card";
import { Users, Shield, Palette, Code } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Users,
      title: "Business Coaching",
      description: "Strategic guidance and professional development coaching to help clients achieve their goals and optimize business growth."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Comprehensive software testing, bug reporting, and quality control processes to ensure exceptional user experiences."
    },
    {
      icon: Code,
      title: "Website Design",
      description: "Modern, responsive website design and development that combines functionality with stunning visual appeal."
    },
    {
      icon: Palette,
      title: "Graphic Arts",
      description: "Creative digital media production and multimedia design that brings brands and concepts to life."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With a diverse background spanning healthcare technology to gaming, I bring a unique blend of 
              technical expertise and creative vision to every project. My Bachelor's in Digital Communication 
              and Media from San José State University, combined with hands-on experience across multiple 
              industries, allows me to tackle complex challenges with innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                className="glass-card p-6 text-center magnetic-hover group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-full blur-xl"></div>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300 floating-element relative z-10">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-300 relative z-10">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground relative z-10">
                  {skill.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-16 glass-card rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl"></div>
            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Education & Background
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">San José State University</h4>
                    <p className="text-muted-foreground">Bachelor of Fine Arts (BFA)</p>
                    <p className="text-muted-foreground">Digital Communication and Media/Multimedia</p>
                    <p className="text-sm text-accent">2016 - 2021</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Lynbrook High School</h4>
                    <p className="text-muted-foreground">Graduate</p>
                    <p className="text-sm text-accent">2012 - 2016</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Core Values
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Innovation through creative problem-solving</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Quality-first approach to all projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Collaborative teamwork and communication</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Continuous learning and adaptation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;