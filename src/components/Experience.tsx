import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const teachingExperience = [
    {
      title: "Lecturer",
      period: "Nov 2023 - Present",
      organization: "University of Central Punjab, Faisalabad",
      description: "Teaching and mentoring students in computer science",
    },
    {
      title: "Lecturer (Visiting)",
      period: "Nov 2020 - Nov 2023",
      organization: "Superior Group of Colleges, Faisalabad (University Program)",
      description: "3 years of teaching experience in university-level courses",
    },
    {
      title: "Lecturer",
      period: "Nov 2022 - Nov 2023",
      organization: "Superior Group of Colleges, Faisalabad (College Program)",
      description: "2 years of teaching experience in college-level computer science education",
    },
    {
      title: "Lecturer (Visiting)",
      period: "2020 - 2022",
      organization: "Govt. Staff Training College, Faisalabad",
      description: "2 years of teaching experience training and educating staff members",
    },
  ];

  const otherExperience = [
    {
      title: "Content Writing and SEO",
      period: "2022 - 2023",
      organization: "",
      description: [
        "Managing blogging sites with 50+ articles monthly",
        "Keyword research and SEO optimization",
        "Collaborate with design team for user interfaces",
        "Mentor junior developers and conduct code reviews",
      ],
    },
    {
      title: "Web Intern",
      period: "Aug 2020 - Nov 2020",
      organization: '"360Brains" Software House, Faisalabad',
      description: "Gained practical experience in web development",
    },
    {
      title: "Web Freelancer",
      period: "Various Projects",
      organization: "Self-Employed",
      description: "Extensive experience in creating detailed and user-friendly documentation",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Work Experience</h2>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Teaching Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
              <Briefcase className="h-6 w-6" />
              Teaching and Mentoring Experience
            </h3>
            <div className="grid gap-6">
              {teachingExperience.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-foreground mb-2">{exp.organization}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
              <Briefcase className="h-6 w-6" />
              Other Professional Experience
            </h3>
            <div className="grid gap-6">
              {otherExperience.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </CardHeader>
                  <CardContent>
                    {exp.organization && (
                      <p className="font-medium text-foreground mb-2">{exp.organization}</p>
                    )}
                    {Array.isArray(exp.description) ? (
                      <ul className="list-none space-y-1">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">{exp.description}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
