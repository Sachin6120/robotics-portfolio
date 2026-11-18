import { ArrowRight, Bot, Cpu, Footprints, Radar, ShieldCheck, Signal, SlidersHorizontal, Waves } from 'lucide-react'

import { EvidenceBadge, type EvidenceClass } from '@/components/evidence-badge'

const stack = [
  { label: 'Plant', sub: 'Isaac Sim 6.0.1 / GPU PhysX 5, 200 Hz', icon: Bot },
  { label: 'State Acquisition', sub: 'Unfiltered contact channel, finite-difference velocity', icon: Radar },
  { label: 'Safety Preflight', sub: 'Step, effort, posture, roll, slip gates', icon: ShieldCheck },
  { label: 'Leg-Torque Owners', sub: 'Learned policy ⇄ whole-body QP', icon: SlidersHorizontal },
  { label: 'Whole-Body QP', sub: 'Task-space inverse dynamics, contacts at priority zero', icon: Cpu },
  { label: 'Command Publication', sub: 'One frame per node, 200 Hz effort write', icon: Signal },
]

const transitions: { name: string; what: string; evidence: EvidenceClass; label: string }[] = [
  {
    name: 'Bilateral load transfer',
    what: 'Ramps one sole’s commanded normal-force bound from body weight to 4.789 N and back, both soles planted throughout.',
    evidence: 'live',
    label: 'Live verified · 3/3',
  },
  {
    name: 'Release bridge and contact deletion',
    what: 'Relaxes and then deletes one sole contact with a strictly interior commanded centre of pressure, then measures the released foot clear of the ground inside a 0.5 s window.',
    evidence: 'live',
    label: 'Live verified · 3/3, bounded window',
  },
  {
    name: 'Contact reload at touchdown',
    what: 'Allocates the commanded entry load per landing state against a declared command-step budget. No live touchdown has ever occurred.',
    evidence: 'offline',
    label: 'Offline verified · 33/33',
  },
  {
    name: 'Live step, flight, re-insertion',
    what: 'No horizontal swing has been commanded live, no flight phase has occurred, and no contact has ever been re-inserted live.',
    evidence: 'none',
    label: 'Not achieved',
  },
]

const gates = [
  ['Per-node commanded-torque step', '≤ 1.0 N·m'],
  ['Effort fraction of actuator limit', '≤ 0.50'],
  ['Leg-posture deviation', '≤ 0.10 rad'],
  ['Attitude roll', '≤ 0.05 rad'],
  ['Stance-foot slip', '≤ 5 mm'],
  ['Non-foot contact force', '0 N'],
]

const designCommitments = [
  {
    title: 'Relaxed contact transitions, not rigid ones',
    text: 'A contact whose six motion rows are an L2-penalised slack closes a contact-set change at 0.005621 N·m, against 26–35 N·m for a rigid single-node change — a factor of roughly 1370.',
  },
  {
    title: 'A circular friction cone, not the solver’s pyramid',
    text: 'The circumscribing pyramid is violable by a large margin at full load, and every release cell that relied on it failed the project’s own friction gate.',
  },
  {
    title: 'References blended, never rebased in one node',
    text: 'A one-node reference rebase puts 1.6–2.0 N·m on a single node; blending absorbs the same gap in increments.',
  },
  {
    title: 'Measured sensing rules, enforced as contract criteria',
    text: 'The filtered per-pair contact channel reads a hard zero on this GPU configuration, and several reported velocity fields are unusable in this build — so only the unfiltered net contact channel is consumed, and every velocity is a backward finite difference over exactly one control node.',
  },
  {
    title: 'Ownership checked rather than trusted',
    text: 'An explicit effort write is summed with the actuator’s own PD term in this simulator, so the ownership layer zeroes the drive gains and writes the complete torque — verified at max |computed − applied| = 0.000e+00 N·m over every owned substep.',
  },
  {
    title: 'State-triggered handoff termination',
    text: 'The blend ends at the first node past a frozen minimum window at which the residual to target falls under an unchanged 0.05 N·m predicate — because the target itself moves at up to 1.38× the slew authority per node, so a fixed node count has far less margin than a static capacity calculation suggests.',
  },
]

export function G1ContactArchitecture() {
  return (
    <section id="architecture" className="scroll-mt-20 border-y bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 py-20 md:px-8 md:py-24">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">02 / Controller architecture</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            A layered stack where two controllers take turns owning twelve leg torques.
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Physics runs at 200 Hz and control at 50 Hz with decimation 4, so each commanded torque is held over
            exactly four consecutive physics substeps. The control node is the unit of everything here: limits are
            per node, telemetry is per node, and timing is counted in physics substeps and control ticks rather than
            seconds of wall time.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Command path</p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {stack.map((node, index) => {
              const Icon = node.icon
              return (
                <div
                  key={node.label}
                  className="glass-panel top-highlight relative flex min-h-32 flex-col gap-4 overflow-hidden rounded-lg p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40"
                >
                  <div className="flex items-center justify-between text-primary">
                    <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-medium">{node.label}</h3>
                    <p className="font-mono text-[10px] leading-relaxed text-muted-foreground">{node.sub}</p>
                  </div>
                  {index < stack.length - 1 && (
                    <ArrowRight
                      className="architecture-arrow absolute -right-4 top-1/2 hidden size-5 -translate-y-1/2 text-primary lg:block"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <figure className="glass-panel top-highlight relative overflow-hidden rounded-xl p-3 md:p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/g1-contact/figure_a_architecture.png"
            alt="Figure A — the control stack from the simulated plant up through state acquisition, safety preflight, the two leg-torque owners and the three contact transitions, with each block coloured by its evidence class."
            loading="lazy"
            className="w-full rounded-lg border border-border/60"
          />
          <figcaption className="mt-3 flex flex-col gap-2 px-1 text-xs leading-relaxed text-muted-foreground">
            <span>
              <span className="font-medium text-foreground">Figure A — System architecture and qualification
              state.</span>{' '}
              The stack from the simulated plant up through state acquisition, safety preflight, the two leg-torque
              owners and the three contact transitions. Colour is the project&apos;s own evidence class, not a maturity
              estimate. The key live figures asserted in the diagram are read back out of the figure data at render
              time, so the diagram cannot drift from the evidence.
            </span>
            <EvidenceBadge evidence="analytic" label="Mixed classes, per block" />
          </figcaption>
        </figure>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
              Contact transitions, by evidence tier
            </p>
            <div className="flex flex-col gap-3">
              {transitions.map((item) => (
                <div
                  key={item.name}
                  className="glass-panel top-highlight relative flex flex-col gap-2 overflow-hidden rounded-xl p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Waves className="size-4 text-primary" strokeWidth={1.5} aria-hidden="true" />
                      {item.name}
                    </h3>
                    <EvidenceBadge evidence={item.evidence} label={item.label} />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.what}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Safety preflight gates</p>
            <div className="glass-panel top-highlight relative overflow-hidden rounded-xl">
              <div className="flex items-center gap-2 border-b px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                <Footprints className="size-3.5 text-primary" aria-hidden="true" /> Every published command is gated
              </div>
              <dl className="divide-y divide-border/60">
                {gates.map(([gate, limit]) => (
                  <div key={gate} className="flex items-center justify-between gap-4 px-4 py-3">
                    <dt className="text-xs text-muted-foreground">{gate}</dt>
                    <dd className="font-mono text-xs font-medium text-primary">{limit}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              No limit in this list has ever been relaxed to make a result pass. Four of the preflight&apos;s seven
              conjuncts are predicates over an already-published command, which makes them in-flight invariants
              rather than preconditions — the reason the preflight criterion stands as{' '}
              <span className="text-foreground">not attempted live</span>.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Design commitments</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {designCommitments.map((item) => (
              <div
                key={item.title}
                className="glass-panel top-highlight relative flex flex-col gap-2 overflow-hidden rounded-xl p-5"
              >
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
