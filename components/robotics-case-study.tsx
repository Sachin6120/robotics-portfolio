import { ArrowUpRight } from 'lucide-react'

import { CaseStudyFooter } from '@/components/case-study-footer'
import { CaseStudyHero } from '@/components/case-study-hero'
import { DemoVideo } from '@/components/demo-video'
import { EngineeringContributions } from '@/components/engineering-contributions'
import { EngineeringDeepDives } from '@/components/engineering-deep-dives'
import { ProjectJourney } from '@/components/project-journey'
import { ProjectNav } from '@/components/project-nav'
import { SystemArchitecture } from '@/components/system-architecture'

const navLinks = [
  { label: 'Demo', href: '#demo', className: 'sm:inline' },
  { label: 'Architecture', href: '#architecture', className: 'md:inline' },
  { label: 'Contributions', href: '#contributions', className: 'lg:inline' },
  { label: 'Deep Dives', href: '#deep-dives', className: 'xl:inline' },
  { label: 'Validation', href: '#metrics', className: 'sm:inline' },
]

const metrics = [
  { value: '4', label: 'Validated Pose Cases', detail: 'Scene-A + D1–D3 · all PASS' },
  { value: '≤1.613 mm', label: 'Worst Perception Error', detail: 'Recorded position error' },
  { value: '1.0000', label: 'Cartesian Descent Fraction', detail: 'All four validated cases' },
  { value: '105 / 105', label: 'Tests Passing', detail: '0 failures · errors · skips' },
]

export function RoboticsCaseStudy() {
  return (
    <main className="page-canvas overflow-hidden">
      <ProjectNav links={navLinks} githubHref="https://github.com/Sachin6120/ur5e-robotiq-pickplace" />

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

      <CaseStudyFooter bottomLeft="UR5e / Parallel-Jaw Manipulation" bottomRight="ROS 2 Jazzy · Gazebo Harmonic" />
    </main>
  )
}
