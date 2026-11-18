import { ArrowUpRight } from 'lucide-react'

import { EvidenceBadge } from '@/components/evidence-badge'

const headlineMetrics = [
  {
    value: '0.8000 N·m',
    label: 'Worst per-node command step',
    detail: 'Limit ≤ 1.0 N·m · across a 6.51–6.80 N·m gap',
  },
  {
    value: '0.000000000 N·m',
    label: 'Handoff residual at convergence',
    detail: 'Limit ≤ 0.05 N·m · converged at node 9 / 9 / 13',
  },
  {
    value: '2.6367 N',
    label: 'Minimum unloading-sole normal force',
    detail: 'Limit > 0 throughout · contact never lost',
  },
  {
    value: '315 / 315',
    label: 'Independent stance acquisitions, all safe',
    detail: '0 aborts, 0 falls, max roll 0.002809 rad',
  },
]

const handoffTable: [string, string, string][] = [
  ['Per-node commanded-torque step', '0.8000 N·m', '≤ 1.0 N·m'],
  ['Handoff torque gap traversed', '6.5141–6.8037 N·m', '—'],
  ['Handoff residual at convergence', '0.000000000 N·m', '≤ 0.05 N·m'],
  ['Handoff convergence node', '9 / 9 / 13', 'ceiling 39'],
  ['Minimum unloading-sole normal force', '2.6367 N', '> 0 throughout'],
  ['Minimum stance normal force', '157.771 N', '—'],
  ['Attitude roll deviation', '0.004442 rad', '≤ 0.05 rad'],
  ['Leg-posture deviation', '0.078516 rad', '≤ 0.10 rad'],
  ['Effort fraction of actuator limit', '0.3408', '≤ 0.50'],
  ['Stance-foot slip', '0.0022 mm', '≤ 5 mm'],
  ['Non-foot contact force', '0.0000 N', '= 0 N'],
  ['Computed vs. applied leg torque, every owned substep', '0.000e+00 N·m', 'exact'],
  ['Control-node cadence', '550 nodes, 0 skipped, 0 duplicated', '0 / 0'],
  ['Contact-channel content lag', '0 substeps', '0'],
  ['Episodes / aborts / falls', '3 of 3 / 0 / 0', '0 / 0'],
]

const releaseTable: [string, string, string][] = [
  ['Deletion-node command step', '0.11454504938956678 N·m', '≤ 1.0 N·m'],
  ['Release-bridge maximum command step', '0.4594786611126054 N·m', '≤ 1.0 N·m'],
  ['Inherited deletion checks', '12 of 12 true', 'all true'],
  ['Active contact set after deletion', '1 sole', '1'],
  ['Measured released-sole height, max per trial', '1.615095 / 1.495223 / 1.848968 mm', 'above the 0.174963 mm chatter band'],
  ['Tail nodes with released-sole ground contact', '0 / 0 / 0', '0'],
  ['Ground re-touch events after clearance', '0 / 0 / 0', '0'],
  ['Observation nodes completed', '25 / 25 on all three', '25'],
]

function ResultTable({
  caption,
  rows,
}: {
  caption: string
  rows: [string, string, string][]
}) {
  return (
    <div className="glass-panel top-highlight relative overflow-hidden rounded-xl">
      <div className="border-b px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground md:px-5">
        {caption}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-left">
          <thead>
            <tr className="border-b bg-background/40 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              <th scope="col" className="px-4 py-2.5 font-medium md:px-5">
                Quantity
              </th>
              <th scope="col" className="px-4 py-2.5 text-right font-medium md:px-5">
                Measured (worst of 3)
              </th>
              <th scope="col" className="px-4 py-2.5 text-right font-medium md:px-5">
                Acceptance limit
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {rows.map(([quantity, measured, limit]) => (
              <tr key={quantity} className="align-top">
                <th scope="row" className="px-4 py-3 text-xs font-normal leading-relaxed text-muted-foreground md:px-5">
                  {quantity}
                </th>
                <td className="px-4 py-3 text-right font-mono text-xs font-medium text-primary md:px-5">{measured}</td>
                <td className="px-4 py-3 text-right font-mono text-xs text-muted-foreground md:px-5">{limit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function G1ContactLiveResults() {
  return (
    <section id="live-results" className="scroll-mt-20 border-y bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 md:px-8 md:py-24">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">04 / Live simulation results</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            What actually ran in the simulator, and what it measured.
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            A result is called live only when all five of these hold: Isaac Sim actually ran, the claimed behaviour
            actually occurred, raw telemetry exists on disk, the analysis reads that telemetry, and the result
            reproduces. Three independent clean-reset episodes execute the complete chain{' '}
            <span className="text-foreground">
              acquire stance → controller handoff → hold → unload one sole → load hold → recover
            </span>
            , at 1111–1113 control nodes and 4444–4452 owned 200 Hz substeps each.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <EvidenceBadge evidence="live" label="Live verified · simulation only" />
            <a
              href="https://github.com/Sachin6120/g1-contact-aware-whole-body-control/blob/main/docs/experimental_validation.md"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-[0.13em] text-primary hover:text-foreground"
            >
              Experimental validation record <ArrowUpRight className="ml-1 inline size-3" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {headlineMetrics.map((metric) => (
            <div
              key={metric.label}
              className="glass-panel top-highlight relative flex min-h-44 flex-col justify-between gap-3 overflow-hidden rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-6"
            >
              <p className="metric-glow break-words text-balance text-lg font-semibold tracking-tight text-primary md:text-2xl">
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

        <ResultTable
          caption="Controller handoff and bilateral load transfer — live, 3 of 3 episodes"
          rows={handoffTable}
        />

        <div className="glass-panel top-highlight relative flex flex-col gap-2 overflow-hidden rounded-xl p-5 md:p-6">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Classification note</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            The transfer, the unload, the hold and the recovery are live. The centre-of-pressure and friction margins
            reported alongside them are <span className="text-foreground">offline evaluations of the measured live
            states</span>, not independent live measurements — in this simulator the net contact-force channel
            carries no tangential component, so no live centre of pressure exists to measure. Both soles remained in
            the hard equality set at priority zero at all 3,335 commanded nodes.
          </p>
        </div>

        <div className="flex max-w-3xl flex-col gap-3">
          <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
            Live contact release, deletion and measured foot clearance
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            The furthest the project has physically got, and the result most easily overstated — so it is stated
            narrowly. The relaxed release bridge and the whole-body controller&apos;s contact deletion ran live with the
            robot under full effort ownership, and the released foot was measured clear of the ground. One trial
            records physical contact at the first observation node only, before the clearance ramp has risen; the
            gated quantity is the tail, and it is zero on all three.
          </p>
        </div>

        <ResultTable caption="Release bridge, contact deletion and foot clearance — live, 3 of 3 trials" rows={releaseTable} />

        <div className="glass-panel top-highlight relative flex flex-col gap-3 overflow-hidden rounded-xl border-primary/30 p-5 md:p-6">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
              What the release result is not
            </p>
            <EvidenceBadge evidence="none" label="Not a step" />
          </div>
          <ul className="flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
            <li>
              <span className="text-foreground">Not a step.</span> No horizontal swing translation was commanded —
              the commanded horizontal components are exactly 0.0 at every node. A +5.0 mm forward swing is
              qualified offline only.
            </li>
            <li>
              <span className="text-foreground">Not a flight phase, and not a touchdown.</span> Nothing was
              re-inserted; nothing landed.
            </li>
            <li>
              <span className="text-foreground">Not a stable post-release regime.</span> It is qualified for the
              inherited 25-node (0.5 s) window and no further. Over a 50-node window the post-deletion hold crosses
              the command-step limit at node 41, and the live regime breaks at post-deletion node 2 on 3 of 3 states
              under a +0.05 rad/s released-hip-roll perturbation — about half that joint&apos;s own measured peak.
            </li>
            <li>
              <span className="text-foreground">Not one observation repeated three ways.</span> The three trials are
              genuinely distinct stances.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
