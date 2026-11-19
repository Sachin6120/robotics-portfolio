import { ArrowUpRight, Boxes, Code2, Cpu, GraduationCap, Mail, Radar, Route, SlidersHorizontal, Waypoints } from 'lucide-react'
import Image from 'next/image'

import { CaseStudyFooter } from '@/components/case-study-footer'
import { CopyEmailButton } from '@/components/copy-email-button'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { additionalProjects, featuredProjects } from '@/lib/projects'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Focus', href: '#focus', className: 'hidden sm:inline' },
  { label: 'About', href: '#about', className: 'hidden md:inline' },
]

const focusAreas = [
  {
    icon: SlidersHorizontal,
    title: 'Robot control',
    text: 'Whole-body control through a hierarchical QP, contact-aware torque command generation, controller handoff and slew-limited command continuity.',
  },
  {
    icon: Boxes,
    title: 'Robot manipulation',
    text: 'Perception-guided pick-and-place in ROS 2 with MoveIt 2, and learned pick-and-lift policies for a Franka Panda in Isaac Lab.',
  },
  {
    icon: Cpu,
    title: 'Reinforcement learning',
    text: 'PPO training and evaluation in NVIDIA Isaac Lab with RSL-RL — reward design, domain randomization and held-out evaluation protocols.',
  },
  {
    icon: Route,
    title: 'Motion planning & navigation',
    text: 'MoveIt 2 planning for manipulators, and Nav2 with MPPI plus a custom predictive costmap layer for dynamic-obstacle avoidance.',
  },
  {
    icon: Radar,
    title: 'Perception & state estimation',
    text: 'RGB-D object pose estimation with OpenCV and TF2, LiDAR obstacle tracking with per-object Kalman filtering and short-horizon prediction.',
  },
  {
    icon: Waypoints,
    title: 'Simulation-based validation',
    text: 'Declared acceptance criteria, held-out benchmarks and reproducible evidence — including bitwise replay of a controller qualification.',
  },
]

const toolchain = [
  'ROS 2 Jazzy',
  'NVIDIA Isaac Sim / Isaac Lab',
  'Gazebo Harmonic',
  'MoveIt 2',
  'Nav2',
  'PyTorch',
  'Python',
  'C++',
  'Pinocchio',
  'ros2_control',
]

export function PortfolioHome() {
  return (
    <main className="page-canvas overflow-hidden">
      <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur-xl">
        <nav
          className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-5 md:px-8"
          aria-label="Primary navigation"
        >
          <a href="#top" className="font-mono text-xs font-semibold uppercase tracking-[0.16em]">
            Sachin Kumar Pal // Robotics
          </a>
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground md:gap-5">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={`hover:text-foreground ${link.className ?? ''}`}>
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/Sachin6120"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-foreground"
            >
              <Code2 className="size-4" />
              GitHub
            </a>
            <a
              href="mailto:sachinkpal612@gmail.com"
              className="flex items-center gap-2 hover:text-foreground"
              aria-label="Email Sachin Kumar Pal"
            >
              <Mail className="size-4" />
              Email
            </a>
          </div>
        </nav>
      </header>

      <section
        id="top"
        className="hero-ambient relative mx-auto flex min-h-[70vh] max-w-5xl scroll-mt-14 flex-col items-start justify-center gap-7 px-5 py-20 md:px-8"
      >
        <div className="tech-pill flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em]">
          <span className="size-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
          Seeking a robotics master&apos;s thesis position
        </div>
        <h1 className="heading-gradient max-w-3xl text-balance font-sans text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl">
          Robot Control &amp; Autonomous Systems — From Simulation to Measured Results
        </h1>
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-foreground/90 md:text-lg">
          I am Sachin Kumar Pal, an M.Sc. Mechatronics &amp; Cyber-Physical Systems student at Deggendorf Institute
          of Technology, looking for a master&apos;s thesis position in robotics — in manipulation, control, motion
          planning, autonomous systems, reinforcement learning, perception or humanoid robotics.
        </p>
        <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
          I develop robot control, manipulation, navigation and learning systems using ROS 2, Isaac Sim / Isaac Lab
          and Gazebo. The featured work includes a live-verified torque-continuous humanoid controller handoff,
          four simulation-validated UR5e pose cases, and a controlled G1 disturbance-recovery benchmark.
          Evidence is labeled by verification scope; none of these projects claims physical-hardware validation.
        </p>

        <div className="flex flex-wrap gap-2">
          {toolchain.map((item) => (
            <Badge key={item} variant="outline" className="tech-pill font-mono">
              {item}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button size="lg" nativeButton={false} render={<a href="#projects" />}>
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<a href="mailto:sachinkpal612@gmail.com" />}
          >
            <Mail data-icon="inline-start" /> Contact
          </Button>
          <CopyEmailButton />
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<a href="https://github.com/Sachin6120" target="_blank" rel="noreferrer" />}
          >
            <Code2 data-icon="inline-start" /> GitHub <ArrowUpRight data-icon="inline-end" />
          </Button>
        </div>
      </section>

      <section id="projects" className="scroll-mt-20 border-y bg-background/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 md:px-8 md:py-24">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Featured projects</p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              Simulation-validated robotics case studies.
            </h2>
            <p className="max-w-2xl leading-relaxed text-muted-foreground">
              Humanoid whole-body control, perception-guided manipulation, predictive navigation and robust
              locomotion learning. Each card reports measured results with the scope they were measured in.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <article
                key={project.slug}
                className="glass-panel top-highlight relative flex flex-col gap-6 overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-8"
              >
                <div className="flex flex-col gap-3">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">{project.tagline}</p>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">{project.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{project.summary}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground/90">
                    {project.scope}
                  </p>
                </div>

                <figure className="overflow-hidden rounded-lg border border-border/70 bg-background/50">
                  <div className="relative aspect-video w-full overflow-hidden bg-[#090c12]">
                    <Image
                      src={project.media.src}
                      alt={project.media.alt}
                      fill
                      sizes="(min-width: 1024px) 45vw, (min-width: 640px) 85vw, 95vw"
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <figcaption className="border-t border-border/60 px-3 py-2 font-mono text-[11px] leading-relaxed text-muted-foreground">
                    {project.media.caption}
                  </figcaption>
                </figure>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <Badge key={item} variant="outline" className="tech-pill font-mono">
                      {item}
                    </Badge>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-lg border border-border/60 bg-background/40 p-3">
                      <p className="metric-glow text-lg font-semibold text-primary">{metric.value}</p>
                      <p className="mt-1 font-mono text-[10px] uppercase leading-relaxed tracking-wide text-muted-foreground">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  {project.href ? (
                    <Button nativeButton={false} render={<a href={project.href} />}>
                      View Case Study <ArrowUpRight data-icon="inline-end" />
                    </Button>
                  ) : null}
                  <Button
                    variant={project.href ? 'outline' : 'default'}
                    nativeButton={false}
                    render={<a href={project.github} target="_blank" rel="noreferrer" />}
                  >
                    <Code2 data-icon="inline-start" /> {project.href ? 'GitHub' : 'View Repository'}
                    {project.href ? null : <ArrowUpRight data-icon="inline-end" />}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 md:px-8 md:py-24">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">More published work</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Additional robotics and mechanism-design projects.
          </h2>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            Reinforcement-learning manipulation and mechanism design. Published repositories are linked directly.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {additionalProjects.map((project) => (
            <article
              key={project.title}
              className="glass-panel top-highlight relative flex min-h-56 flex-col justify-between gap-4 overflow-hidden rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex flex-col gap-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">{project.tagline}</p>
                <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="rounded-lg border border-border/60 bg-background/40 p-3">
                  <p className="text-sm font-semibold text-primary">{project.result}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase leading-relaxed tracking-wide text-muted-foreground">
                    {project.status}
                  </p>
                </div>
                {project.github ? (
                  <Button
                    variant="outline"
                    nativeButton={false}
                    render={<a href={project.github} target="_blank" rel="noreferrer" />}
                  >
                    <Code2 data-icon="inline-start" /> View Repository <ArrowUpRight data-icon="inline-end" />
                  </Button>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="focus" className="scroll-mt-20 border-y bg-background/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 md:px-8 md:py-24">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Focus areas</p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              Where I work, and what I have built there.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => {
              const Icon = area.icon
              return (
                <div
                  key={area.title}
                  className="glass-panel top-highlight relative flex flex-col gap-3 overflow-hidden rounded-xl p-5 md:p-6"
                >
                  <Icon className="size-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="text-sm font-semibold text-foreground">{area.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{area.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-20 md:px-8 md:py-24">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
            <div className="flex flex-col gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">About &amp; availability</p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Looking for a master&apos;s thesis in robotics, in Germany.
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                I am completing an M.Sc. in Mechatronics &amp; Cyber-Physical Systems at Deggendorf Institute of
                Technology, and I am looking for a master&apos;s thesis position — at a university group, a research
                institute or in industry — in robotics and autonomous systems. I am equally interested in
                manipulation, control, motion planning, reinforcement learning, perception and humanoid robotics.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                What I bring is independent, end-to-end project work: building the system, designing the evaluation,
                and reporting what the measurements actually support. Where a result is only verified offline, or
                only in simulation, the writing on this site says so.
              </p>
            </div>

            <div className="glass-panel top-highlight relative flex flex-col gap-5 overflow-hidden rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3">
                <GraduationCap className="size-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
                <div className="flex flex-col">
                  <p className="text-sm font-semibold text-foreground">Sachin Kumar Pal</p>
                  <p className="text-xs text-muted-foreground">
                    M.Sc. Mechatronics &amp; Cyber-Physical Systems
                  </p>
                  <p className="text-xs text-muted-foreground">Deggendorf Institute of Technology</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:sachinkpal612@gmail.com"
                  className="flex items-center gap-2 text-sm hover:text-primary"
                  aria-label="Email Sachin Kumar Pal at sachinkpal612@gmail.com"
                >
                  <Mail className="size-4 text-primary" />
                  sachinkpal612@gmail.com
                  <ArrowUpRight className="size-3" />
                </a>
                <a
                  href="https://github.com/Sachin6120"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-primary"
                >
                  <Code2 className="size-4 text-primary" />
                  github.com/Sachin6120
                  <ArrowUpRight className="size-3" />
                </a>
              </div>

              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-primary">
                  Open to master&apos;s thesis · working student · robotics internship opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseStudyFooter
        bottomLeft="Robotics · Control · Manipulation · Motion Planning · Reinforcement Learning"
        bottomRight="Simulation-Validated Engineering"
      />
    </main>
  )
}
