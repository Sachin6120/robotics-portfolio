'use client'

import { useState } from 'react'
import { FlaskConical, ScanSearch, ShieldCheck, Shuffle } from 'lucide-react'

import { cn } from '@/lib/utils'

const chapters = [
  {
    label: 'Foundation',
    title: 'Reproduce the G1 flat-terrain PPO baseline',
    text: 'Stand up the Unitree G1 (37 DoF) in NVIDIA Isaac Lab with RSL-RL PPO across 4096 parallel environments, and train a stable flat-terrain walking baseline under fixed friction and random horizontal pushes of ±0.5 m/s.',
    icon: FlaskConical,
  },
  {
    label: 'Domain Randomization',
    title: 'Randomize friction and increase training disturbances',
    text: 'Train a second policy under identical settings, changing only static and dynamic friction to sampled ranges and widening random horizontal pushes to ±0.8 m/s, to isolate the effect of domain randomization.',
    icon: Shuffle,
  },
  {
    label: 'Benchmark Design',
    title: 'Implement a controlled one-shot push evaluation',
    text: 'Build a held-out benchmark that applies a single lateral Y velocity disturbance at exactly t = 5.0 s, at five magnitudes, across five evaluation seeds, and scores recovery against explicit velocity-tracking thresholds.',
    icon: ScanSearch,
  },
  {
    label: 'Audit',
    title: 'Verify timing, direction, and recovery semantics',
    text: 'Independently check push timing, disturbance direction balance across environments, episode accounting across 20,480 simulated episodes, and the exact recovery definition before trusting any aggregate result.',
    icon: ShieldCheck,
  },
]

export function G1ProjectJourney() {
  const [active, setActive] = useState(0)
  const chapter = chapters[active]
  const Icon = chapter.icon

  return (
    <section id="journey" aria-labelledby="journey-heading" className="mx-auto flex max-w-7xl scroll-mt-20 flex-col gap-10 px-5 py-20 md:px-8 md:py-24">
      <div className="flex max-w-3xl flex-col gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">01 / Research progression</p>
        <h2 id="journey-heading" className="text-3xl font-semibold tracking-tight md:text-5xl">From a stable baseline to an audited robustness claim.</h2>
        <p className="max-w-2xl leading-relaxed text-muted-foreground">
          The project moved from a reproducible PPO locomotion baseline to a domain-randomized policy, a controlled push-recovery benchmark, and an explicit audit of the evaluation methodology itself.
        </p>
      </div>

      <div className="glass-panel top-highlight relative overflow-hidden rounded-xl p-4 md:p-6">
        <div className="relative grid grid-cols-2 gap-2 md:grid-cols-4" role="tablist" aria-label="Research progression stages">
          <div className="absolute left-[12.5%] right-[12.5%] top-5 hidden h-px bg-border md:block" aria-hidden="true" />
          {chapters.map((item, index) => {
            const ItemIcon = item.icon
            return (
              <button
                key={item.label}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-controls="journey-panel"
                onClick={() => setActive(index)}
                className={cn(
                  'relative flex min-h-28 flex-col items-start gap-3 rounded-lg border border-transparent p-3 text-left font-mono text-xs transition-all hover:bg-secondary/50 md:items-center md:text-center',
                  active === index && 'border-primary/30 bg-primary/10 text-primary',
                )}
              >
                <span className={cn('relative flex size-10 items-center justify-center rounded-full border bg-background transition-all', active === index ? 'border-primary shadow-[0_0_18px_var(--primary)]' : 'border-border text-muted-foreground')}>
                  <ItemIcon className="size-4" aria-hidden="true" />
                </span>
                <span>{item.label}</span>
              </button>
            )
          })}
        </div>

        <article id="journey-panel" role="tabpanel" className="mt-4 flex min-h-48 flex-col gap-5 rounded-lg border bg-background/35 p-5 md:flex-row md:items-start md:p-8">
          <Icon className="size-7 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
          <div className="flex max-w-3xl flex-col gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">{chapter.label}</p>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">{chapter.title}</h3>
            <p className="leading-relaxed text-muted-foreground">{chapter.text}</p>
          </div>
        </article>
      </div>
    </section>
  )
}
