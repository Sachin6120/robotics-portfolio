import { ShieldCheck } from 'lucide-react'

import { EvidenceBadge, type EvidenceClass } from '@/components/evidence-badge'

const limitations: { title: string; text: string; evidence: EvidenceClass; label: string }[] = [
  {
    title: 'Simulation only',
    text: 'Every result comes from NVIDIA Isaac Sim 6.0.1 / Isaac Lab 3.0.0-beta2 with GPU PhysX 5. No physical Unitree G1 hardware was involved at any point, no sim-to-real transfer was attempted, and none is claimed.',
    evidence: 'none',
    label: 'No hardware',
  },
  {
    title: 'No verified integrated autonomous object grasp',
    text: 'The hands have never closed on the payload in a qualified run. There has been no live object contact of any kind.',
    evidence: 'none',
    label: 'Not achieved',
  },
  {
    title: 'No verified object lift or complete pick-and-place',
    text: 'No load transfer to the hands, no detached lift, no carry, no place and no release. The integrated autonomous pick-and-place state machine has never been executed, so its repeatability is unknown.',
    evidence: 'none',
    label: 'Not achieved',
  },
  {
    title: 'No qualified complete live walking step',
    text: 'A contact has been released and deleted live and the released foot measured clear of the ground — but no horizontal swing translation has ever been commanded live, no flight phase has occurred, no contact has ever been re-inserted live, and there has been no touchdown under the current architecture.',
    evidence: 'none',
    label: 'Not achieved',
  },
  {
    title: 'Live reload-torque execution remains unqualified',
    text: 'Live torque eligibility at the reload transaction is FALSE by a standing decision in the project’s frozen execution contract. The contract requires five criteria established live before any torque frame; one is not qualified and not reachable at this frontier, and one has never been attempted live.',
    evidence: 'open',
    label: 'Implemented, not verified',
  },
  {
    title: 'M95 verifies offline reproducibility, not live execution',
    text: 'The 15,222,085-value bitwise comparison shows that the offline qualification replays identically in a freshly built environment. It says nothing about live Isaac Sim execution or hardware performance.',
    evidence: 'offline',
    label: 'Offline only',
  },
  {
    title: 'Nothing here is real-time',
    text: 'The wall-clock 20 ms criterion was evaluated and FAILS structurally: 16.7656 ms of the period (83.83%) is consumed by bare simulator costs before any controller runs, and the projected integrated cycle is 25.095–26.840 ms. The verdict is preserved unchanged and is not retired. The 50 Hz contract this project meets is a simulated-time contract.',
    evidence: 'open',
    label: 'Standing FAIL',
  },
  {
    title: 'The post-release state is bounded, not stable',
    text: 'It is qualified for the inherited 25-node (0.5 s) window and no further. Beyond it the post-deletion hold is laterally unstable, and the regime breaks at post-deletion node 2 on 3 of 3 states under a +0.05 rad/s released-hip-roll perturbation — about half that joint’s own measured peak.',
    evidence: 'open',
    label: 'Bounded only',
  },
  {
    title: 'Two measured walls stand before a live step',
    text: 'The narrow-stance landed-load acceptance rate is 2.3349–2.3714 N/node against a frozen 3.1341–3.1723 N/node requirement, and post-release lateral arrest reaches +0.835 mm of divergent-component margin against an inherited 1.5 mm requirement, held 0 of 9 nodes. Both are measured insufficiencies against unchanged limits, not unexplored regions.',
    evidence: 'open',
    label: 'Measured insufficiency',
  },
  {
    title: '3 of 3 is not a statistical sample',
    text: 'Live results rest on three independent clean-reset episodes. The 33-case reload qualification is a bounded robustness evaluation over deliberately chosen conditions, not a Monte Carlo study, and no distributional claim follows from it.',
    evidence: 'none',
    label: 'Scope limit',
  },
  {
    title: 'No on-board perception, one workcell geometry',
    text: 'State estimation uses simulation ground truth, not vision or tactile sensing. One object geometry and one structured workcell with a priori known table positions; clutter, dynamic obstacles and moving humans are out of scope.',
    evidence: 'none',
    label: 'Scope limit',
  },
  {
    title: 'The public repository is a technical showcase',
    text: 'It is not the complete private controller implementation. The controller implementation, trained policy parameters, environment configuration and raw telemetry are not published. The figures and the evidence inventory regenerate from the public repository alone; the live experiments are not reproducible by a third party.',
    evidence: 'none',
    label: 'Showcase, not a reproduction package',
  },
]

export function G1ContactLimitations() {
  return (
    <section id="limitations" className="scroll-mt-20 border-y bg-background/20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 md:px-8 md:py-24">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">09 / Limitations</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            What this system cannot do, stated as plainly as the results.
          </h2>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            The project&apos;s objective is autonomous whole-body locomanipulation. Its achieved state is a qualified
            contact-aware control stack up to and including bilateral load transfer, with the release and reload
            transitions qualified and the step blocked by two measured walls. The gap between those two sentences is
            the honest description of this work — stating it precisely is part of the methodology, not a disclaimer
            bolted on afterward.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {limitations.map((item, index) => (
            <div
              key={item.title}
              className="glass-panel top-highlight relative flex gap-4 overflow-hidden rounded-xl p-5 md:p-6"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/30 font-mono text-[11px] text-primary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  <EvidenceBadge evidence={item.evidence} label={item.label} />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}

          <div className="glass-panel top-highlight relative flex items-start gap-3 overflow-hidden rounded-xl border-primary/30 p-5 md:col-span-2 md:p-6">
            <ShieldCheck className="mt-0.5 size-6 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Why this matters:</span> four failed or unreached results
              are reported here with the same prominence as the passes — the wall-clock deadline, live
              controller-state synchronisation, the narrow-stance landed-load acceptance rate and post-release
              lateral arrest. Each was evaluated against a criterion declared before measurement, and each verdict
              is preserved unchanged rather than retired. Status: work in progress, in active development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
