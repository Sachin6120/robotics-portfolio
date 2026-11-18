import { ArrowUpRight } from 'lucide-react'

import { EvidenceBadge, type EvidenceClass } from '@/components/evidence-badge'

interface FigureEntry {
  src: string
  title: string
  alt: string
  caption: string
  scope: string
  evidence: EvidenceClass
  evidenceLabel: string
}

const figures: FigureEntry[] = [
  {
    src: '/g1-contact/figure_f_live_handoff_continuity.png',
    title: 'Figure F — Live command continuity across a controller handoff',
    alt: 'Figure F: panel (a) shows the infinity-norm residual between commanded and target leg torque per control node through the handoff blend for three live episodes on a log axis, against the 0.05 N·m convergence predicate; panel (b) shows the measured per-node commanded-torque step over a complete live episode against the 0.80 N·m slew authority and the 1.0 N·m limit.',
    caption:
      '(a) Infinity-norm residual between the commanded and target leg torque per control node through the handoff blend, for three independent live episodes, against the unchanged 0.05 N·m convergence predicate. Hollow markers are residuals of exactly zero, placed on the shaded band because a log axis has no zero. (b) The measured per-node commanded-torque step over a complete live episode, against the 0.80 N·m slew authority and the unchanged 1.0 N·m limit, with stage spans shaded.',
    scope:
      'Scope: 3 independent clean-reset episodes, 1111–1113 control nodes each at 50 Hz, full 200 Hz effort ownership. In these episodes both soles stayed planted: no contact was removed, no foot left support and no step was taken.',
    evidence: 'live',
    evidenceLabel: 'Live verified',
  },
  {
    src: '/g1-contact/figure_c_contact_feasibility.png',
    title: 'Figure C — Contact feasibility',
    alt: 'Figure C: four panels showing measured contact normal force on both soles over a live load-transfer episode against the commanded normal-force bound, the unloading sole across all three live episodes, centre-of-pressure margins for both soles, and landed-sole centre-of-pressure margin against landed normal force for the 33 offline reload cases.',
    caption:
      '(a) Measured contact normal force on both soles over one complete live load-transfer episode, against the commanded normal-force bound driving the unloading sole. (b) The unloading sole’s measured normal force through the unload and load hold, all three live episodes, against the 4.789 N scheduled target and the zero line that marks loss of contact. (c) Centre-of-pressure margin for both soles over the same episode, against the support-polygon edge at zero. (d) Landed-sole centre-of-pressure margin against landed normal force for the 33 offline reload cases, with both acceptance bounds at zero.',
    scope:
      'Scope: (a)–(c) one and three live episodes of 1111 control nodes at 50 Hz; (d) 33 offline cases. The measured forces in (a)–(c) are live; the centre-of-pressure margins drawn on them are offline evaluations of those live states, because this simulator’s contact channel carries no tangential component.',
    evidence: 'live',
    evidenceLabel: 'Live + offline, per panel',
  },
  {
    src: '/g1-contact/figure_b_torque_continuity.png',
    title: 'Figure B — Commanded-torque continuity at the contact-reload entry node',
    alt: 'Figure B: panel (a) shows the maximum per-node commanded-torque step over every reload node for each of 33 landing cases, sorted, with the 0.93 N·m allocation budget and 1.0 N·m limit marked; panel (b) pairs that quantity at the entry node with no commanded entry load against its value at the allocated entry load.',
    caption:
      '(a) The maximum per-node commanded-torque step over every reload node for each of 33 landing cases, sorted. Marked: the 0.93 N·m allocation budget, the unchanged 1.0 N·m per-node command-step limit, and the 0.9848 N·m worst pre-touchdown flight step that actually sets the episode-wide headroom. (b) The same quantity at the entry node with no commanded entry load (grey) against its value at the allocated entry load (coloured), one pair per case, showing the allocation filling its budget. Orange marks the six cases on which the command step binds.',
    scope:
      'Scope: one reload transition per case, 11 perturbation families × 3 landing states, 72 distinct rollouts. No Isaac instance ran, no torque was commanded, no landing occurred.',
    evidence: 'offline',
    evidenceLabel: 'Offline verified',
  },
  {
    src: '/g1-contact/figure_d_qualification_matrix.png',
    title: 'Figure D — Qualification matrix of the contact-reload transition',
    alt: 'Figure D: panel (a) is an 11 by 3 grid of all 33 cases shaded by maximum per-node commanded-torque step with verdict and useful-touchdown node annotated; panel (b) lists the worst value measured across all 33 cases for each of eleven acceptance criteria against its declared bound.',
    caption:
      '(a) All 33 cases as an 11 × 3 grid. Cell shade and value: maximum per-node commanded-torque step over every reload node. Cell annotation: verdict and useful-touchdown node. Orange outline marks the six cases where the command step binds. (b) The worst value measured across all 33 cases for each of eleven acceptance criteria, against the bound declared before evaluation.',
    scope:
      'Scope: 33 cases, 72 rollouts. A pass is an offline feasibility result for the transition, not a demonstration of a landing.',
    evidence: 'offline',
    evidenceLabel: 'Offline verified',
  },
  {
    src: '/g1-contact/figure_e_execution_qualification.png',
    title: 'Figure E — Execution qualification',
    alt: 'Figure E: panel (a) decomposes wall-clock milliseconds per 20 millisecond control cycle for the measured passive cycle and the projected cycle with the controller transaction against the 20 millisecond period; panel (b) shows controller compute per control node for three live solve distributions and one offline transaction cost; panel (c) lists the eight frozen execution-contract criteria with their verdicts.',
    caption:
      '(a) Wall-clock milliseconds per 20 ms control cycle: the measured passive cycle decomposed into its components, and the projected cycle with the controller transaction, against the 20 ms period. (b) Controller compute per control node for three live solve distributions and one offline transaction cost — 1st–99th percentile span, median, maximum. The 15 ms line is one criterion’s ceiling, declared for the reload transaction only; the live distributions are shown beside it for scale and are not scored against it. (c) The eight frozen criteria of the simulated-time execution contract with their current verdicts and evidence classes.',
    scope:
      'Scope: (a) 120 passive cycles with no controller in the loop; (b) 3335 + 311 + 311 live nodes and 33 offline frames; (c) the whole contract. Nothing in this figure is a real-time, hard-real-time or hardware-deployability claim — the wall-clock criterion stands FAIL and is not retired.',
    evidence: 'open',
    evidenceLabel: 'Mixed · wall clock FAIL',
  },
]

export function G1ContactFigures() {
  return (
    <section id="figures" className="scroll-mt-20 border-y bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 md:px-8 md:py-24">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            06 / Experimental validation figures
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Every figure carries its own evidence class and acceptance bound.
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Each figure is generated by a script in the repository from the reduced datasets under{' '}
            <code className="font-mono text-xs text-foreground">evidence/figure_data/</code>, and regenerates from
            that repository alone. No figure contains a synthesised or illustrative value; where a quantity was not
            measured, no figure shows it. A result is never drawn without the bound it was judged against.
          </p>
          <a
            href="https://github.com/Sachin6120/g1-contact-aware-whole-body-control/tree/main/figures"
            target="_blank"
            rel="noreferrer"
            className="w-fit font-mono text-xs uppercase tracking-[0.13em] text-primary hover:text-foreground"
          >
            All figures with full captions <ArrowUpRight className="ml-1 inline size-3" />
          </a>
        </div>

        <div className="flex flex-col gap-8">
          {figures.map((figure) => (
            <figure
              key={figure.src}
              className="glass-panel top-highlight relative flex flex-col gap-4 overflow-hidden rounded-xl p-3 md:p-5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={figure.src}
                alt={figure.alt}
                loading="lazy"
                className="w-full rounded-lg border border-border/60 bg-background/40"
              />
              <figcaption className="flex flex-col gap-3 px-1 pb-1">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-foreground md:text-base">{figure.title}</h3>
                  <EvidenceBadge evidence={figure.evidence} label={figure.evidenceLabel} />
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">{figure.caption}</p>
                <p className="font-mono text-[10px] leading-relaxed text-muted-foreground/80 md:text-[11px]">
                  {figure.scope}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
