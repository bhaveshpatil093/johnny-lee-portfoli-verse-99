import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Users, Gamepad2, Heart, Shield, Palette } from "lucide-react";
import projectCoaching from "@/assets/project-coaching.jpg";
import projectGameDesign from "@/assets/project-gamedesign.jpg";
import projectHealthcare from "@/assets/project-healthcare.jpg";
import projectQA from "@/assets/project-qa.jpg";
import projectDesign from "@/assets/project-design.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Business Coaching Platform",
      description: "Comprehensive coaching framework and digital tools for client onboarding, progress tracking, and goal achievement. Features strategic planning methodologies and remote consultation capabilities.",
      icon: Users,
      technologies: ["Business Strategy", "Client Management", "Goal Setting", "Progress Analytics"],
      features: [
        "Client onboarding and assessment system",
        "Strategic planning and goal-setting frameworks",
        "Progress tracking and milestone management",
        "Remote consultation and communication tools"
      ],
      impact: "Helping clients achieve 85% of their professional goals within 6 months",
      category: "Business Coaching",
      image: projectCoaching
    },
    {
      title: "Game Design Project",
      description: "Interactive game design incorporating social psychology research to enhance user engagement and gameplay mechanics. Developed during internship at Alphy with focus on user behavior analysis.",
      icon: Gamepad2,
      technologies: ["Game Design", "Social Psychology", "User Research", "UX Design"],
      features: [
        "Psychology-informed game mechanics",
        "User engagement optimization",
        "Social interaction systems",
        "Data-driven design decisions"
      ],
      impact: "Applied research insights to improve user retention by 40%",
      category: "Game Design",
      image: projectGameDesign
    },
    {
      title: "Healthcare Technology Website",
      description: "Professional website design and development for PhysioCue Inc.'s innovative hypertension reduction therapy device. Focus on medical device presentation and user education.",
      icon: Heart,
      technologies: ["Web Development", "Healthcare UI/UX", "Medical Device Design", "Responsive Design"],
      features: [
        "Medical device information architecture",
        "User-friendly patient interface",
        "Professional healthcare presentation",
        "Accessibility-compliant design"
      ],
      impact: "Supporting a device that reduces blood pressure by 15-25 points in 5 minutes",
      category: "Healthcare Tech",
      image: projectHealthcare
    },
    {
      title: "Quality Assurance Framework",
      description: "Comprehensive QA methodology and testing framework developed during internship at A&K Systems. Includes automated testing protocols and detailed documentation systems.",
      icon: Shield,
      technologies: ["Software Testing", "Quality Assurance", "Documentation", "Process Optimization"],
      features: [
        "Comprehensive test case development",
        "Automated testing protocols",
        "Bug tracking and reporting systems",
        "Quality metrics and analytics"
      ],
      impact: "Improved software reliability by 60% and reduced critical bugs by 75%",
      category: "Quality Assurance",
      image: projectQA
    },
    {
      title: "Creative Design Portfolio",
      description: "Showcase of graphic design and multimedia work spanning brand identity, digital media, and visual communication projects from academic and professional experience.",
      icon: Palette,
      technologies: ["Graphic Design", "Multimedia", "Brand Identity", "Digital Media"],
      features: [
        "Brand identity and logo design",
        "Digital media and animation",
        "Print and web design projects",
        "Creative campaign development"
      ],
      impact: "Created visual identities for 20+ projects with 95% client satisfaction",
      category: "Creative Design",
      image: projectDesign
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A selection of projects that showcase my expertise across business coaching, 
              quality assurance, web design, and creative arts.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="glass-card overflow-hidden group relative"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-accent/90 text-accent-foreground border-accent/30 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-muted/50 backdrop-blur-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 p-3 bg-accent/5 rounded-lg border border-accent/20 backdrop-blur-sm">
                    <p className="text-muted-foreground text-sm font-medium">{project.impact}</p>
                  </div>

                  <div className="flex space-x-3">
                    <Button variant="default" size="sm" className="flex-1">
                      <ExternalLink size={16} className="mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <Github size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;