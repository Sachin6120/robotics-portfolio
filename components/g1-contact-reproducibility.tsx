import { ArrowUpRight, Binary } from 'lucide-react'

import { EvidenceBadge } from '@/components/evidence-badge'

const metrics = [
  { value: '15,222,085', label: 'Numerical values compared per replay', detail: 'Compared on IEEE-754 bit patterns' },
  { value: '0', label: 'Numerical differences', detail: 'Max |delta| = 0.0, excluding declared exclusions' },
  { value: '33 / 33', label: 'Cases reproduced', detail: '27 required + 6 diagnostic' },
  { value: '144 / 144', label: 'Raw cell files matched', detail: '0 structural mismatches' },
]

const details = [
  'Two independently created software environments, built from the same pinned dependency lock.',
  '33 of 33 selected controller stages reproduced bitwise.',
  'Command-step headroom of 0.06999486420406154 N·m reproduced bitwise equal.',
  'The entire difference population — counted, not sampled — lies under declared exclusions: solve times, wall-clock fields and output-path strings. 0 of 66 unexplained.',
  'A fail-closed write guard checked 290 writes and blocked 0 in each replay, so the replay provably never wrote near preserved evidence.',
  'Three measurement defects in the replay’s own instruments were found during this work, corrected and recorded — including a comparator fix that silently dropped 748,512 comparisons before it was caught.',
]

export function G1ContactReproducibility() {
  return (
    <section id="reproducibility" className="scroll-mt-20 border-y bg-background/20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 md:px-8 md:py-24">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            07 / M95 — controller reproducibility
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            The 33-case qualification replays bit-for-bit in two separate environments.
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            The M87 adaptive-reload qualification — 33 of 33 offline verified — was reproduced in two separately
            created software environments using the same pinned dependency lock, and compared value by value on
            IEEE-754 bit patterns.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <EvidenceBadge evidence="offline" label="M95 · offline verified" />
            <a
              href="https://github.com/Sachin6120/g1-contact-aware-whole-body-control/blob/main/docs/experimental_validation.md#33-reproducibility-of-the-offline-qualification"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-[0.13em] text-primary hover:text-foreground"
            >
              Validation section 3.3 <ArrowUpRight className="ml-1 inline size-3" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="glass-panel top-highlight relative flex min-h-44 flex-col justify-between gap-3 overflow-hidden rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-6"
            >
              <p className="metric-glow break-words text-balance text-xl font-semibold tracking-tight text-primary md:text-3xl">
                {metric.value}
              </p>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-foreground">{metric.label}</p>
                <p className="font-mono text-[10px] uppercase leading-relaxed tracking-wide text-muted-foreground">
                  {metric.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <ul className="flex flex-col gap-3">
            {details.map((detail) => (
              <li
                key={detail}
                className="glass-panel top-highlight relative flex gap-3 overflow-hidden rounded-xl p-4 md:p-5"
              >
                <Binary className="mt-0.5 size-4 shrink-0 text-[var(--cyan)]" strokeWidth={1.5} aria-hidden="true" />
                <p className="text-sm leading-relaxed text-muted-foreground">{detail}</p>
              </li>
            ))}
          </ul>

          <div className="glass-panel top-highlight relative flex h-fit flex-col gap-3 overflow-hidden rounded-xl border-primary/30 p-5 md:p-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">What M95 does not verify</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              M95 verifies <span className="text-foreground">offline reproducibility</span> — that the same
              controller inputs produce the same controller outputs in a freshly built environment. It does{' '}
              <span className="text-foreground">not</span> verify live Isaac Sim execution, hardware performance, or
              that the reload transaction would behave this way on a real landing.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Live torque execution at the reload transaction remains unqualified. The controller replay also
              requires the private engineering workspace and is not reproducible from the public showcase
              repository alone — what is reproducible there is the path from preserved measurement to published
              figure.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
