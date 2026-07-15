import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    id: 1,
    title: "Socialogram",
    description:
      "Socialogram, a full-stack social media web application built using modern web technologies with a strong focus on performance, scalability, and clean UI by using the power of Next.Js.",
    image: "/projects/project1.png",
    tags: ["Next.js", "TailwindCSS", "Supabase", "Zod/Cloudinary"],
    demoUrl: "https://next-social-gamma.vercel.app/",
    githubUrl: "https://github.com/ammartalpur/next-social",
  },
  {
    id: 2,
    title: "Roozgar Job Portal",
    description:
      "Roozgar is a modern job portal built with React.js, designed to seamlessly connect job seekers with recruiters.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "Supabase", "Next.js"],
    demoUrl: "https://roozgar-jobportal.vercel.app/",
    githubUrl: "https://github.com/ammartalpur/roozgar-jobportal",
  },
  {
    id: 3,
    title: "Digital Voting System",
    description:
      "Ditigal Voting System created in C++ with web based GUI and Facial Veification.",
    image: "/projects/project3.png",
    tags: ["Javascript", "HTML/CSS/EJS", "C++"],
    demoUrl: "#",
    githubUrl: "https://github.com/ammartalpur/digital_voting_system",
  },
  {
    id: 4,
    title: "Sportz - Websocket Project",
    description:
      "Sportz is a modern real-time sports tracking platform built to manage matches, live commentary, and instant updates for connected clients using WebSockets..",
    image: "/projects/project4.PNG",
    tags: [
      "Next.js",
      "Node(Express.js)",
      "PostgreSQL",
      "Drizzle ORM",
      "WebSockets",
      "Zod",
      "Arcjet",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/ammartalpur/sportz-websockets",
  },
  {
    id: 5,
    title: "Software House OS",
    description:
      "A comprehensive, role-based Project and Task Management operating system designed specifically for software development agencies. This system serves as a custom-tailored alternative to Jira or Trello, enforcing a strict, professional pipeline from project creation to Quality Assurance (QA) delivery.",
    image: "/projects/project5.PNG",
    tags: ["Next.js 15", "Tailwind CSS", "PostgreSQL", "Prisma", "Clerk"],
    demoUrl: "#",
    githubUrl: "https://github.com/ammartalpur/software-house-os",
  },
  {
    id: 6,
    title: "ProKitchen POS System",
    description:
      "A high-performance, real-time Point of Sale (POS) and Kitchen Display System (KDS) designed for modern restaurant environments. Built with a focus on operational speed, data integrity, and real-time synchronization between the front-of-house and back-of-house.",
    image: "/projects/project6.PNG",
    tags: [
      "Next.js 15",
      "Tailwind CSS",
      "PostgreSQL",
      "Websockets",
      "Clerk",
      "Cloudinary",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/ammartalpur/point-of-sale",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-foreground/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.demoUrl}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
