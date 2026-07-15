import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const NAME = "Ammar Talpur";
const ROLE = "Software Engineer";
const BIO =
  "Helping businesses become what they deserve to be—stronger, smarter, and ready for the future.";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Prisma",
  "Jest",
  "Cypress",
  "Figma",
  "Git",
  "GitHub Actions",
];

const socials = [
  { icon: Github, href: "https://github.com/ammartalpur", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ammar-talpur-6b77a327a/",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const RESUME_URL =
  "https://drive.google.com/uc?export=download&id=1gz6t7EQq3TbMLffCOy9YkbZUMNJ3xao9";

const stats = [
  {
    value: "08+",
    label: "Years Coding",
    detail: "Building, learning, and improving with every shipped product.",
  },
  {
    value: "03+",
    label: "Products Shipped",
    detail: "Turning ideas into reliable software that solves real problems.",
  },
  {
    value: "15,000+",
    label: "Users Impacted",
    detail: "Creating digital experiences that help teams move forward.",
  },
];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image + gradient */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          role="presentation"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/85 to-background" />
      </div>

      {/* Ambient dots */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full opacity-50"
            style={{
              backgroundColor: "var(--color-primary)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* ============ Main hero content ============ */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* ---- Copy column ---- */}
          <div className="order-2 flex flex-col items-center gap-6 text-center lg:order-1 lg:col-span-7 lg:items-start lg:text-left">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary motion-reduce:animate-none" />
              {ROLE}
            </span>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl">
              {NAME}
            </h1>

            <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
              {BIO}
            </p>

            <div className="mt-2 flex flex-col gap-4 sm:flex-row">
              <AnimatedBorderButton>
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </AnimatedBorderButton>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  window.open(RESUME_URL, "_blank", "noopener,noreferrer")
                }
              >
                <Download className="mr-2 h-4 w-4" />
                Download Résumé
              </Button>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              <div className="flex items-center gap-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="glass rounded-full p-2 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ---- Photo column ---- */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-primary/15 blur-3xl" />
              <div className="glass glow-border rounded-[2rem] p-3">
                <img
                  src="/profile-photo.png"
                  alt={NAME}
                  className="aspect-4/5 w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ============ Vision / Mission ============ */}
        <div className="mx-auto mt-24 grid max-w-6xl gap-6 md:grid-cols-2 md:gap-8">
          <div className="rounded-[1.5rem] border border-primary/20 bg-background/30 p-8 backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Vision
            </p>
            <p className="text-xl font-bold leading-tight text-foreground md:text-2xl">
              Build simple, useful, and beautiful digital experiences.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-primary/20 bg-background/30 p-8 backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Mission
            </p>
            <p className="text-xl font-bold leading-tight text-foreground md:text-2xl">
              Turn ideas into polished products that people enjoy using.
            </p>
          </div>
        </div>

        {/* ============ Stats ============ */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-10 sm:grid-cols-3 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="border-t border-border/70 pt-6">
              <p className="text-5xl font-semibold text-foreground md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-4 text-lg text-foreground">{stat.label}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ============ Skills marquee ============ */}
      <div className="relative z-10 border-t border-border/60 py-14 md:py-16">
        <p className="mb-8 text-center text-sm text-muted-foreground">
          Technologies I work with
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-background to-transparent md:w-32" />
          <div className="absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-background to-transparent md:w-32" />
          <div className="flex animate-marquee motion-reduce:animate-none">
            {[...skills, ...skills].map((skill, idx) => (
              <div key={idx} className="shrink-0 px-6 md:px-8">
                <span className="text-xl font-semibold text-muted-foreground/50 transition-colors hover:text-muted-foreground">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

      {/* ============ Scroll cue ============ */}
        <a
          href="#about"
          className="mt-10 flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary md:mt-12"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="h-6 w-6 animate-bounce motion-reduce:animate-none" />
        </a>
      </div>
    </section>
  );
};
