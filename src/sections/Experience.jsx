const experiences = [
  {
    period: "January 2025 - Present",
    role: "Director IT",
    company: "PakUraan Foundation · Hybrid",
    description:
      "Leading a 5-member IT team, streamlining workflows and automating processes to improve operational efficiency. Developed the organization’s website and employee tracking system, reducing manual work by 40%. Introduced a paperless system for meeting minutes and IT asset tracking, cutting reporting errors by 20%.",
    technologies: ["Leadership", "Automation", "Workflow Optimization", "Web Development"],
    current: true,
  },
  {
    period: "Dec 2024 - Dec 2025",
    role: "Web Designer And Developer",
    company: "AurFun Online",
    description:
      "Leading end-to-end development of an artist-focused e-commerce platform for showcasing and selling merchandise with integrated payment gateways. Collaborating with artists to tailor UX/UI to niche audience needs, increasing average session duration by 50%.",
    technologies: ["Next.js", "UX/UI", "E-commerce", "Payment Integration"],
    current: false,
  },
  {
    period: "Dec 2024 - Present",
    role: "Web Coordinator",
    company: "IEEE Computer Society, Student Branch Chapter MUET, Jamshoro · Offline",
    description:
      "Developing, updating, and maintaining web content to ensure smooth communication and user-friendly experiences for members. Responsible for managing and enhancing the chapter’s digital presence.",
    technologies: ["Content Management", "Web Maintenance", "Digital Presence", "Communication"],
    current: true,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            My Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-foreground">
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A snapshot of the roles where I’ve led, built, and improved digital
            experiences with a focus on real-world impact.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/80 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(140,255,0,0.75)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10 shadow-[0_0_18px_rgba(140,255,0,0.8)]">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
