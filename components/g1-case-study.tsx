import { ArrowUpRight, Code2 } from 'lucide-react'

import { CaseStudyFooter } from '@/components/case-study-footer'
import { G1Benchmark } from '@/components/g1-benchmark'
import { G1DemoVideo } from '@/components/g1-demo-video'
import { G1DomainRandomization } from '@/components/g1-domain-randomization'
import { G1EngineeringContributions } from '@/components/g1-engineering-contributions'
import { G1Hero } from '@/components/g1-hero'
import { G1Limitations } from '@/components/g1-limitations'
import { G1ProjectJourney } from '@/components/g1-project-journey'
import { G1Results } from '@/components/g1-results'
import { G1SystemArchitecture } from '@/components/g1-system-architecture'
import { Button } from '@/components/ui/button'
import { ProjectNav } from '@/components/project-nav'

const GITHUB_URL = 'https://github.com/Sachin6120/isaaclab-g1-robust-locomotion'

const navLinks = [
  { label: 'Demo', href: '#demo', className: 'sm:inline' },
  { label: 'Architecture', href: '#architecture', className: 'md:inline' },
  { label: 'Benchmark', href: '#benchmark', className: 'lg:inline' },
  { label: 'Results', href: '#results', className: 'sm:inline' },
  { label: 'Contributions', href: '#contributions', className: 'xl:inline' },
]

export function G1CaseStudy() {
  return (
    <main className="page-canvas overflow-hidden">
      <ProjectNav links={navLinks} githubHref={GITHUB_URL} />

      <div id="top" className="scroll-mt-14"><G1Hero /></div>
      <G1DemoVideo />
      <G1ProjectJourney />
      <G1SystemArchitecture />
      <G1DomainRandomization />
      <G1Benchmark />
      <G1Results />
      <G1EngineeringContributions />
      <G1Limitations />

      <section className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-20 text-center md:px-8 md:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">08 / Repository</p>
        <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">Every number here traces back to logged evaluation runs.</h2>
        <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Training configuration, evaluation scripts, and the full results used to produce the figures above are published in the project repository.
        </p>
        <Button size="lg" nativeButton={false} render={<a href={GITHUB_URL} target="_blank" rel="noreferrer" />}>
          <Code2 data-icon="inline-start" /> View Source &amp; Results <ArrowUpRight data-icon="inline-end" />
        </Button>
      </section>

      <CaseStudyFooter bottomLeft="G1 Humanoid / PPO Locomotion" bottomRight="Isaac Lab · RSL-RL · Newton/MJWarp" />
    </main>
  )
}
