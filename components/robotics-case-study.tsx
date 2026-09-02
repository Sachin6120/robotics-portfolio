import { ArrowUpRight, Code2, Mail } from 'lucide-react'

import { CaseStudyHero } from '@/components/case-study-hero'
import { DemoVideo } from '@/components/demo-video'
import { EngineeringContributions } from '@/components/engineering-contributions'
import { EngineeringDeepDives } from '@/components/engineering-deep-dives'
import { ProjectJourney } from '@/components/project-journey'
import { SystemArchitecture } from '@/components/system-architecture'
import { Separator } from '@/components/ui/separator'

const metrics = [
  { value: '4', label: 'Validated Pose Cases', detail: 'Scene-A + D1–D3 · all PASS' },
  { value: '≤1.613 mm', label: 'Worst Perception Error', detail: 'Recorded position error' },
  { value: '1.0000', label: 'Cartesian Descent Fraction', detail: 'All four validated cases' },
  { value: '105 / 105', label: 'Tests Passing', detail: '0 failures · errors · skips' },
]

export function RoboticsCaseStudy() {
  return (
    <main className="page-canvas overflow-hidden">
      <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Primary navigation">
          <a href="#top" className="font-mono text-xs font-semibold uppercase tracking-[0.16em]">Sachin Kumar Pal // Robotics</a>
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground md:gap-5">
            <a href="#demo" className="hidden hover:text-foreground sm:inline">Demo</a>
            <a href="#architecture" className="hidden hover:text-foreground md:inline">Architecture</a>
            <a href="#contributions" className="hidden hover:text-foreground lg:inline">Contributions</a>
            <a href="#deep-dives" className="hidden hover:text-foreground xl:inline">Deep Dives</a>
            <a href="#metrics" className="hidden hover:text-foreground sm:inline">Validation</a>
            <a href="https://github.com/Sachin6120/ur5e-robotiq-pickplace" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foreground">
              <Code2 className="size-4" />GitHub
            </a>
          </div>
        </nav>
      </header>

      <div id="top" className="scroll-mt-14"><CaseStudyHero /></div>
      <DemoVideo />
      <ProjectJourney />
      <SystemArchitecture />
      <EngineeringContributions />
      <EngineeringDeepDives />

      <section id="metrics" className="scroll-mt-20 border-y bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 md:px-8 md:py-24">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">05 / Validation</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Validated through repeatable experiments.</h2>
            <p className="max-w-2xl leading-relaxed text-muted-foreground">
              Controlled simulation experiments verify actual object behavior rather than trusting controller completion alone. Scene-A (0, 0 mm / 0°), D1 (+30, +30 mm / +30°), D2 (−30, −30 mm / −30°), and D3 (+30, −30 mm / +45°) all pass in the published Stage-2 baseline.
            </p>
            <a href="https://github.com/Sachin6120/ur5e-robotiq-pickplace/releases/tag/stage2-pose-generalization-pass" target="_blank" rel="noreferrer" className="w-fit font-mono text-xs uppercase tracking-[0.13em] text-primary hover:text-foreground">
              View Stage-2 release <ArrowUpRight className="ml-1 inline size-3" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="glass-panel top-highlight relative flex min-h-44 flex-col justify-between overflow-hidden rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-6">
                <p className="metric-glow text-balance text-2xl font-semibold tracking-tight text-primary md:text-4xl">{metric.value}</p>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-foreground">{metric.label}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">{metric.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 md:px-8 md:py-16">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="flex max-w-2xl flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Built by Sachin Kumar Pal</p>
            <h2 className="text-balance text-2xl font-semibold md:text-3xl">Robotics engineering at the intersection of perception, planning, and control.</h2>
            <div className="mt-2 space-y-1 text-sm leading-relaxed text-muted-foreground">
              <p className="font-medium text-foreground">Sachin Kumar Pal</p>
              <p>M.Sc. Mechatronics &amp; Cyber-Physical Systems</p>
              <p>Deggendorf Institute of Technology</p>
            </div>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
              Focus: Robotic Manipulation · ROS 2 · Motion Planning · Perception · Automation
            </p>
            <div className="mt-3 inline-flex w-fit rounded-full border border-primary/20 bg-primary/5 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.13em] text-primary">
              Open to Master's Thesis · Working Student · Robotics / Automation Opportunities
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="https://github.com/Sachin6120" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm hover:text-primary">
              <Code2 className="size-4" />Sachin6120 <ArrowUpRight className="size-3" />
            </a>
            <a href="mailto:sachinkpal612@gmail.com" className="flex items-center gap-2 text-sm hover:text-primary" aria-label="Email Sachin Kumar Pal at sachinkpal612@gmail.com">
              <Mail className="size-4" />sachinkpal612@gmail.com <ArrowUpRight className="size-3" />
            </a>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col justify-between gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:flex-row">
          <span>UR5e / Parallel-Jaw Manipulation</span>
          <span>ROS 2 Jazzy · Gazebo Harmonic</span>
        </div>
      </footer>
    </main>
  )
}
