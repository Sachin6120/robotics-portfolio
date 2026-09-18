import { ArrowUpRight, Code2, Mail } from 'lucide-react'

import { CaseStudyFooter } from '@/components/case-study-footer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { featuredProjects, plannedProjects } from '@/lib/projects'

export function PortfolioHome() {
  return (
    <main className="page-canvas overflow-hidden">
      <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Primary navigation">
          <a href="#top" className="font-mono text-xs font-semibold uppercase tracking-[0.16em]">Sachin Kumar Pal // Robotics</a>
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground md:gap-5">
            <a href="#projects" className="hover:text-foreground">Projects</a>
            <a href="https://github.com/Sachin6120" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foreground">
              <Code2 className="size-4" />GitHub
            </a>
            <a href="mailto:sachinkpal612@gmail.com" className="flex items-center gap-2 hover:text-foreground" aria-label="Email Sachin Kumar Pal">
              <Mail className="size-4" />Email
            </a>
          </div>
        </nav>
      </header>

      <section id="top" className="hero-ambient relative mx-auto flex min-h-[70vh] max-w-5xl scroll-mt-14 flex-col items-start justify-center gap-7 px-5 py-20 md:px-8">
        <div className="tech-pill flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em]">
          <span className="size-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
          Robotics Portfolio
        </div>
        <h1 className="heading-gradient max-w-3xl text-balance font-sans text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl">
          Robotics, Reinforcement Learning &amp; Autonomous Systems
        </h1>
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Mechatronics M.Sc. candidate building and validating robot learning, manipulation and autonomous-navigation systems through reproducible simulation experiments.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button size="lg" nativeButton={false} render={<a href="#projects" />}>
            View Projects
          </Button>
          <Button size="lg" variant="outline" nativeButton={false} render={<a href="https://github.com/Sachin6120" target="_blank" rel="noreferrer" />}>
            <Code2 data-icon="inline-start" /> GitHub <ArrowUpRight data-icon="inline-end" />
          </Button>
        </div>
      </section>

      <section id="projects" className="scroll-mt-20 border-y bg-background/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 md:px-8 md:py-24">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Featured projects</p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">Simulation-validated robotics case studies.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <article key={project.slug} className="glass-panel top-highlight relative flex flex-col gap-6 overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-8">
                <div className="flex flex-col gap-3">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">{project.tagline}</p>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">{project.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{project.summary}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <Badge key={item} variant="outline" className="tech-pill font-mono">{item}</Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-lg border border-border/60 bg-background/40 p-3">
                      <p className="metric-glow text-lg font-semibold text-primary">{metric.value}</p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  <Button nativeButton={false} render={<a href={project.href} />}>
                    View Case Study <ArrowUpRight data-icon="inline-end" />
                  </Button>
                  <Button variant="outline" nativeButton={false} render={<a href={project.github} target="_blank" rel="noreferrer" />}>
                    <Code2 data-icon="inline-start" /> GitHub
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 md:px-8 md:py-24">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">More projects</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">Additional engineering work.</h2>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            Selected projects spanning autonomous navigation, mechanism design and computational geometry.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {plannedProjects.map((project) => (
            <div key={project.title} className="glass-panel relative flex min-h-44 flex-col justify-between gap-4 overflow-hidden rounded-xl p-5 opacity-80">
              <div className="flex flex-col gap-1.5">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{project.tagline}</p>
                <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{project.result}</p>
              </div>
              <span className="w-fit rounded-full border border-border bg-background/50 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      <CaseStudyFooter bottomLeft="Robotics · Reinforcement Learning · Autonomous Systems" bottomRight="Simulation-Validated Engineering" />
    </main>
  )
}
