import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Business Coach",
      company: "LettuceBuild",
      duration: "July 2025 - Present",
      type: "Part-time, Remote",
      location: "Boise, Idaho, United States",
      responsibilities: [
        "Provide business coaching services to help clients achieve their professional goals",
        "Develop strategies for business growth and optimization",
        "Conduct remote coaching sessions and consultations"
      ],
      skills: ["Business Strategy", "Client Consultation", "Professional Development", "Remote Coaching"]
    },
    {
      title: "Game Designer Intern",
      company: "Alphy",
      duration: "July 2022 - October 2022",
      type: "Part-time, Hybrid",
      location: "San Francisco Bay Area",
      responsibilities: [
        "Designed game mechanics and user experiences",
        "Conducted social psychology research to inform game design decisions",
        "Collaborated with development team on project management initiatives",
        "Applied research skills to enhance gameplay and user engagement"
      ],
      skills: ["Game Design", "User Experience", "Social Psychology", "Project Management", "Research"]
    },
    {
      title: "Software Quality Assurance Intern",
      company: "A&K Systems",
      duration: "January 2021 - July 2021",
      type: "Part-time",
      location: "San Jose, California, United States",
      responsibilities: [
        "Performed comprehensive software quality assurance testing",
        "Created detailed technical documentation and bug reports",
        "Designed and developed website components",
        "Ensured software reliability and user experience quality"
      ],
      skills: ["Quality Assurance", "Software Testing", "Technical Documentation", "Web Development", "Bug Reporting"]
    },
    {
      title: "Design Engineer Intern",
      company: "PhysioCue Inc.",
      duration: "January 2017 - May 2017",
      type: "Internship",
      location: "Sunnyvale, California",
      responsibilities: [
        "Worked as Design Engineer on innovative healthcare technology",
        "Developed and designed company website",
        "Contributed to the development of Hypertension Reduction Therapy Device",
        "Applied engineering principles to medical device design"
      ],
      skills: ["Healthcare Technology", "Medical Device Design", "Website Development", "Engineering Design"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A diverse journey across industries, from healthcare innovation to gaming design, 
              showcasing adaptability and expertise in quality assurance and business coaching.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg hidden md:block"></div>
                  
                  <Card className="ml-0 md:ml-20 glass-card p-6 magnetic-hover group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full blur-xl"></div>
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 relative z-10">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-primary mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-lg font-semibold text-accent mb-2">
                          <Building size={18} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2 lg:text-right">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <CalendarDays size={16} />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <MapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                        <Badge variant="secondary" className="w-fit">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-3">Skills & Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="bg-accent/10 text-accent border-accent/30">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;