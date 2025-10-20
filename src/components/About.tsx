import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "MS/M-Phil (Software Engineering)",
      year: "2020 - 2022",
      institution: "GC University, Faisalabad, Pakistan",
    },
    {
      degree: "Bachelor in Computer Science",
      year: "2016 - 2020",
      institution: "FAST National University of Computer and Emerging Sciences",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">About Me</h2>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            Education
          </h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h4>
                  <p className="text-muted-foreground mb-1">{edu.year}</p>
                  <p className="text-muted-foreground">{edu.institution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
