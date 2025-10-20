import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    { name: "HTML5/CSS3", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "SEO Optimization", level: 92 },
    { name: "Content Writing", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "Tailwind CSS", level: 93 },
    { name: "Python", level: 80 },
    { name: "MS Office", level: 100 },
    { name: "Software Documentation", level: 96 },
    { name: "Research Methods", level: 95 },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Technical Skills</h2>
        <p className="text-center text-muted-foreground mb-12 text-xl">My Expertise</p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-primary font-semibold">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
