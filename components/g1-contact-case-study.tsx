import { ArrowUpRight, Code2, FileText } from 'lucide-react'

import { CaseStudyFooter } from '@/components/case-study-footer'
import { G1ContactArchitecture } from '@/components/g1-contact-architecture'
import { G1ContactContributions } from '@/components/g1-contact-contributions'
import { G1ContactFigures } from '@/components/g1-contact-figures'
import { G1ContactHero } from '@/components/g1-contact-hero'
import { G1ContactLimitations } from '@/components/g1-contact-limitations'
import { G1ContactLiveResults } from '@/components/g1-contact-live-results'
import { G1ContactNavigation } from '@/components/g1-contact-navigation'
import { G1ContactOffline } from '@/components/g1-contact-offline'
import { G1ContactProblem } from '@/components/g1-contact-problem'
import { G1ContactReproducibility } from '@/components/g1-contact-reproducibility'
import { ProjectNav } from '@/components/project-nav'
import { Button } from '@/components/ui/button'

const GITHUB_URL = 'https://github.com/Sachin6120/g1-contact-aware-whole-body-control'

const navLinks = [
  { label: 'Problem', href: '#problem', className: 'sm:inline' },
  { label: 'Architecture', href: '#architecture', className: 'md:inline' },
  { label: 'Results', href: '#live-results', className: 'sm:inline' },
  { label: 'Figures', href: '#figures', className: 'lg:inline' },
  { label: 'Limitations', href: '#limitations', className: 'xl:inline' },
]

const evidenceLinks = [
  {
    label: 'Evidence inventory',
    href: `${GITHUB_URL}/blob/main/evidence/EVIDENCE_INVENTORY.md`,
    text: '25 selected results with objective, measured value, acceptance limit, source artifact and release judgement.',
  },
  {
    label: 'Experimental validation',
    href: `${GITHUB_URL}/blob/main/docs/experimental_validation.md`,
    text: 'Every measured result against its acceptance limit, organised by evidence tier.',
  },
  {
    label: 'Limitations',
    href: `${GITHUB_URL}/blob/main/docs/limitations.md`,
    text: 'What this system cannot do, stated in one place with no hedging.',
  },
  {
    label: 'Architecture & controller design',
    href: `${GITHUB_URL}/blob/main/docs/controller_design.md`,
    text: 'The formulations, and the alternative that was tried first in each case.',
  },
]

export function G1ContactCaseStudy() {
  return (
    <main className="page-canvas overflow-hidden">
      <ProjectNav links={navLinks} githubHref={GITHUB_URL} />

      <div id="top" className="scroll-mt-14">
        <G1ContactHero />
      </div>
      <G1ContactProblem />
      <G1ContactArchitecture />
      <G1ContactContributions />
      <G1ContactLiveResults />
      <G1ContactOffline />
      <G1ContactFigures />
      <G1ContactReproducibility />
      <G1ContactNavigation />
      <G1ContactLimitations />

      <section id="evidence" className="scroll-mt-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 md:px-8 md:py-24">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">10 / GitHub evidence</p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              Every number on this page traces back to published evidence.
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              The repository publishes the documentation, the six figures, the reduced figure datasets and a
              machine-readable evidence manifest. Figures and the evidence inventory regenerate from that repository
              alone. The controller implementation, trained policy parameters, environment configuration and raw
              telemetry are not published — this is a technical showcase, not the complete controller implementation
              and not a reproduction package.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {evidenceLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="glass-panel top-highlight group relative flex flex-col gap-2 overflow-hidden rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-6"
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <FileText className="size-4 text-primary" strokeWidth={1.5} aria-hidden="true" />
                    {link.label}
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{link.text}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col items-start gap-4">
            <Button size="lg" nativeButton={false} render={<a href={GITHUB_URL} target="_blank" rel="noreferrer" />}>
              <Code2 data-icon="inline-start" /> View Repository <ArrowUpRight data-icon="inline-end" />
            </Button>
          </div>
        </div>
      </section>

      <CaseStudyFooter
        bottomLeft="G1 Humanoid / Contact-Aware Whole-Body Control"
        bottomRight="Isaac Sim · Hierarchical QP · Simulation Only"
      />
    </main>
  )
}
