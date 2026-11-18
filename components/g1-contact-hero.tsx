import { ArrowDown, ArrowUpRight, Code2, GitBranch, Layers, SlidersHorizontal } from 'lucide-react'

import { EvidenceBadge } from '@/components/evidence-badge'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const tech = [
  'NVIDIA Isaac Sim 6.0.1',
  'Isaac Lab 3.0.0-beta2',
  'Whole-Body Control',
  'Hierarchical QP',
  'Pinocchio',
  'Contact Modelling',
  'Python',
  'Unitree G1',
]

const snapshot = [
  ['ROBOT', 'Unitree G1 / 29 DoF'],
  ['CONTROL', '50 Hz node / 200 Hz physics'],
  ['CONTROLLERS', 'Learned policy + WBC QP'],
  ['HARD LIMIT', '≤ 1.0 N·m per node'],
]

export function G1ContactHero() {
  return (
    <section className="hero-ambient relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:py-20">
      <div className="relative flex flex-col items-start gap-7">
        <div className="tech-pill flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em]">
          <span className="size-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
          Simulation-Only Whole-Body Control Study
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="heading-gradient max-w-3xl text-balance font-sans text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
            Unitree G1 — Contact-Aware Whole-Body Control
          </h1>
          <p className="max-w-2xl text-pretty text-base font-medium leading-relaxed text-foreground/90 md:text-lg">
            Exchanging authority over a humanoid&apos;s twelve leg joints between a learned locomotion policy and a
            model-based contact-aware whole-body controller — and loading and unloading contact through that
            controller — without ever publishing a torque command that jumps.
          </p>
          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            At a narrow stance the two controllers disagree, at the identical pose, by 6.51–6.80 N·m on the dominant
            joint. The project makes a per-node commanded-torque step limit of 1.0 N·m explicit and then refuses to
            move it: every result is a measurement against that limit. Work is entirely in NVIDIA Isaac Sim — no
            physical Unitree G1 hardware was involved at any point.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <Badge key={item} variant="outline" className="tech-pill font-mono">
              {item}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            size="lg"
            nativeButton={false}
            render={
              <a
                href="https://github.com/Sachin6120/g1-contact-aware-whole-body-control"
                target="_blank"
                rel="noreferrer"
              />
            }
          >
            <Code2 data-icon="inline-start" /> View GitHub <ArrowUpRight data-icon="inline-end" />
          </Button>
          <Button size="lg" variant="outline" nativeButton={false} render={<a href="#live-results" />}>
            View Results <ArrowDown data-icon="inline-end" />
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="telemetry-breathe glass-panel top-highlight relative overflow-hidden rounded-xl">
          <div className="flex items-center justify-between border-b px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            <span className="flex items-center gap-2">
              <GitBranch className="size-3.5 text-primary" /> System Snapshot
            </span>
            <span className="text-primary">ISAAC SIM / SIMULATION</span>
          </div>

          <div className="grid gap-px border-b bg-border/50 sm:grid-cols-2 lg:grid-cols-4">
            {snapshot.map(([label, value]) => (
              <div key={label} className="bg-background/40 px-4 py-3">
                <p className="font-mono text-[9px] uppercase tracking-wide text-muted-foreground">{label}</p>
                <p className="mt-1 text-xs font-medium text-foreground">{value}</p>
              </div>
            ))}
          </div>

          <div className="relative aspect-[16/10] overflow-hidden p-5">
            <div className="system-grid absolute inset-0 opacity-35" />
            <div className="absolute left-5 top-4 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
              <SlidersHorizontal className="size-3.5 text-primary" /> slew-limited authority exchange
            </div>
            <svg
              viewBox="0 0 600 330"
              className="relative size-full"
              role="img"
              aria-label="Conceptual diagram: commanded leg torque moving from the learned policy's value to the whole-body controller's equilibrium value in bounded per-node steps, with the hard per-node command-step limit drawn as a ceiling"
            >
              <defs>
                <linearGradient id="contactHandoff" x1="0" y1="0" x2="1" y2="0">
                  <stop stopColor="var(--violet)" />
                  <stop offset="0.5" stopColor="var(--cyan)" />
                  <stop offset="1" stopColor="var(--primary)" />
                </linearGradient>
              </defs>
              {/* axes */}
              <path d="M55 272 H552 M55 272 V40" fill="none" stroke="var(--border)" strokeWidth="1" />
              {/* policy torque level and WBC equilibrium level */}
              <path d="M55 92 H215" fill="none" stroke="var(--violet)" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M330 232 H552" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="4 4" />
              {/* handoff blend, stepped */}
              <path
                d="M215 92 L235 110 L255 128 L275 146 L295 169 L315 196 L330 232"
                fill="none"
                stroke="url(#contactHandoff)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="trajectory-path"
              />
              {/* handoff window */}
              <path d="M215 52 V272" fill="none" stroke="var(--violet)" strokeWidth="1" strokeDasharray="3 5" />
              <path d="M330 52 V272" fill="none" stroke="var(--primary)" strokeWidth="1" strokeDasharray="3 5" />
              <circle cx="215" cy="92" r="5" fill="var(--violet)" />
              <circle cx="330" cy="232" r="6" fill="var(--primary)" />
              <text x="60" y="80" fill="var(--violet)" fontSize="10" fontFamily="monospace">
                learned policy torque
              </text>
              <text x="364" y="222" fill="var(--primary)" fontSize="10" fontFamily="monospace">
                whole-body QP equilibrium
              </text>
              <text x="222" y="44" fill="var(--muted-foreground)" fontSize="10" fontFamily="monospace">
                handoff window
              </text>
              <text x="238" y="300" fill="var(--muted-foreground)" fontSize="10" fontFamily="monospace">
                control nodes @ 50 Hz
              </text>
              <text x="60" y="300" fill="var(--muted-foreground)" fontSize="10" fontFamily="monospace">
                gap 6.51–6.80 N·m
              </text>
              {/* per-node step bound annotation */}
              <path d="M470 92 H552" fill="none" stroke="var(--cyan)" strokeWidth="1.5" />
              <text x="446" y="80" fill="var(--cyan)" fontSize="10" fontFamily="monospace">
                per-node step ≤ 1.0 N·m
              </text>
            </svg>
            <div className="absolute bottom-4 left-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
              <Layers className="size-3.5 text-primary" /> Conceptual — not measured telemetry
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          <EvidenceBadge evidence="live" label="Handoff + load transfer · live 3/3" />
          <EvidenceBadge evidence="none" label="No hardware · no grasp · no live step" />
        </div>
      </div>
    </section>
  )
}
