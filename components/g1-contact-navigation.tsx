import { Play } from 'lucide-react'

import { EvidenceBadge } from '@/components/evidence-badge'

const facts = [
  ['COMMANDED FROM', '3.5 m range at a +25° bearing'],
  ['ARRIVED AT', '0.7088 m standoff, 9.214 m path'],
  ['FINAL HEADING ERROR', '−0.416°, no fall'],
]

const runs: [string, string][] = [
  ['End-to-end run, 3.5 m at +25° bearing', 'ARRIVED at 0.7088 m standoff, final heading error −0.416°, 9.214 m path'],
  ['Three-geometry run — 3.5 m/+25°, 3.0 m/+40°, 3.0 m/−20°', '3 of 3 ARRIVED; heading errors −2.25° / +5.58° / −2.68°'],
  ['Multi-cycle long-range walk', 'Ended NEEDS_TERMINAL_APPROACH — the designed end state for that run, not a failure'],
  ['Falls across all recorded navigation trials', '0'],
]

export function G1ContactNavigation() {
  return (
    <section id="navigation" aria-labelledby="navigation-heading" className="scroll-mt-20 border-y bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-20 md:px-8 md:py-24">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            08 / Navigation demonstration
          </p>
          <h2 id="navigation-heading" className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            The one genuine recording this project has.
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            This is an unedited simulator viewport capture from a preserved live run. It shows the locomotion front
            end: autonomous approach to the manipulation standoff region, with the base held on arrival.
          </p>
        </div>

        <div
          role="note"
          className="glass-panel relative flex flex-col gap-3 rounded-xl border-[color:var(--warn)]/40 p-5 md:p-6"
        >
          <div className="flex flex-wrap items-center gap-3">
            <EvidenceBadge evidence="open" label="Read this before watching" />
            <EvidenceBadge evidence="live" label="Live verified · navigation only" />
          </div>
          <p className="font-mono text-xs font-semibold uppercase leading-relaxed tracking-[0.1em] text-[color:var(--warn)] md:text-sm">
            Autonomous navigation demonstration — not contact-control or grasping footage.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            This recording does <span className="text-foreground">not</span> demonstrate contact-aware whole-body
            control, the controller handoff, the load transfer, touchdown, or any manipulation. No recording of the
            controller handoff or the load transfer exists: those milestones ran headless with rendering disabled
            because the wall-clock timing evidence they were producing required it, and no footage was manufactured
            after the fact. Those results are presented as measurements instead, in sections 04 through 06.
          </p>
        </div>

        <div className="demo-ambient relative rounded-xl">
          <div className="glass-panel top-highlight relative overflow-hidden rounded-xl shadow-2xl transition-all hover:border-primary/40">
            <div className="flex h-11 items-center justify-between border-b bg-card/80 px-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-muted-foreground/50" />
                  <span className="size-2.5 rounded-full bg-muted-foreground/70" />
                  <span className="size-2.5 rounded-full bg-primary/80" />
                </span>
                <span className="hidden items-center gap-2 sm:flex">
                  <Play className="size-3 text-primary" />
                  Unedited simulator viewport capture
                </span>
              </div>
              <span>Unitree G1 / 29 DoF</span>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute left-3 top-3 z-10 flex max-w-[calc(100%-1.5rem)] flex-wrap gap-2 md:left-5 md:top-5">
                <span className="rounded-full border border-[color:var(--warn)]/40 bg-background/85 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-wide text-[color:var(--warn)] shadow-lg backdrop-blur-md">
                  Navigation only — not contact control or grasping
                </span>
                <span className="rounded-full border border-border bg-background/85 px-3 py-1.5 font-mono text-[10px] font-medium text-muted-foreground shadow-lg backdrop-blur-md">
                  Isaac Sim 6.0.1 · learned locomotion policy
                </span>
              </div>
              <video
                className="aspect-video w-full bg-background object-contain"
                controls
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="Autonomous navigation demonstration — not contact-control or grasping footage. One complete autonomous approach commanded from 3.5 metres at a plus 25 degree bearing, through alignment and long-range walk, to the manipulation standoff region, arriving at a 0.7088 metre standoff with a final heading error of minus 0.416 degrees over a 9.214 metre path, with no fall."
              >
                <source src="/g1-contact/live_autonomous_approach_end_to_end.mp4" type="video/mp4" />
                Your browser does not support HTML video playback.
              </video>
            </div>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground">
            Autonomous navigation demonstration — not contact-control or grasping footage.
          </span>{' '}
          One complete autonomous approach: commanded from 3.5 m at a +25° bearing, through alignment and long-range
          walk, to the manipulation standoff region. Arrived at a 0.7088 m standoff with a final heading error of
          −0.416° over a 9.214 m path, with no fall.
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {facts.map(([label, value]) => (
            <div key={label} className="glass-panel rounded-lg p-4">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.13em] text-primary">{label}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{value}</p>
            </div>
          ))}
        </div>

        <div className="glass-panel top-highlight relative overflow-hidden rounded-xl">
          <div className="border-b px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground md:px-5">
            Autonomous navigation — measured outcomes
          </div>
          <dl className="divide-y divide-border/60">
            {runs.map(([label, value]) => (
              <div key={label} className="flex flex-col gap-1 px-4 py-3 md:px-5">
                <dt className="text-xs leading-relaxed text-muted-foreground">{label}</dt>
                <dd className="text-xs font-medium leading-relaxed text-primary">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
