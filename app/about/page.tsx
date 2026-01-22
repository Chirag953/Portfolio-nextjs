import { Heading } from "@/components/ui/heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Navigation } from "@/components/navigation";

export const metadata = {
  title: "About - Chirag Dutta",
  description: "Learn more about my background, skills, and professional experience.",
};

const skills = [
  "React",
  "C/C++",
  "JavaScript",
  "HTML",
  "CSS",
  "SQL",
  "MongoDB",
  "Node.js",
  
  "Tailwind CSS",
 "Express.js",
];

// const experience = [
//   {
//     title: "Senior Full Stack Developer",
//     company: "Tech Company Inc.",
//     period: "2022 - Present",
//     description:
//       "Leading development of scalable web applications using React, Node.js, and cloud infrastructure.",
//   },
//   {
//     title: "Full Stack Developer",
//     company: "StartupXYZ",
//     period: "2020 - 2022",
//     description:
//       "Built and maintained multiple client-facing applications, improved performance by 40%.",
//   },
//   {
//     title: "Junior Developer",
//     company: "Web Agency",
//     period: "2018 - 2020",
//     description:
//       "Developed responsive websites and learned modern web development practices.",
//   },
// ];

export default function About() {
  return (
    <main className="min-h-screen px-4 py-20 pt-24 sm:pt-20">
      <Navigation />
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
        {/* Bio Section */}
        <section className="space-y-6 animate-fade-in">
          <Heading level="h1">About Me</Heading>
          <div className="space-y-4 text-body-lg text-[var(--muted-foreground)]">
            <p>
            I’m Chirag Dutta, a final-year B.Tech CSE student passionate about building practical software. I work with the MERN stack and SQL. My background in data structures, algorithms, and core CS fundamentals helps me write efficient, well-tested code. I’ve built full-stack projects (authentication, databases, deployments), participated in hackathons, and enjoy learning new tools and design patterns. I often try new, effective, and easy solutions. I’m seeking internships where I can contribute to real products.
            </p>
            <p>
            Along with development, I have a solid understanding of DSA and core CS subjects, which helps me design efficient solutions. I actively explore new tools, architectures, and design patterns.
            </p>
            <p>
            I’ve participated in hackathons, collaborated in small teams, and delivered working projects under time constraints. I’m seeking an internship where I can contribute to real features while improving as an engineer.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-6 animate-fade-in">
          <Heading level="h2">Skills</Heading>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge key={skill} variant="default">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        {/* <section className="space-y-6 animate-fade-in">
          <Heading level="h2">Experience</Heading>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} hover>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-h4 font-semibold text-[var(--foreground)]">
                        {exp.title}
                      </h3>
                      <p className="text-body text-[var(--muted-foreground)]">
                        {exp.company}
                      </p>
                    </div>
                    <p className="text-body-sm text-[var(--muted-foreground)] sm:text-right">
                      {exp.period}
                    </p>
                  </div>
                  <p className="text-body text-[var(--muted-foreground)]">
                    {exp.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section> */}
      </div>
    </main>
  );
}
