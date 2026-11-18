import { AlertTriangle, Gauge, Scale, Split } from 'lucide-react'

import { EvidenceBadge } from '@/components/evidence-badge'

const tensions = [
  {
    icon: Split,
    title: 'Two controllers, one set of joints',
    text: 'A learned locomotion policy walks well and positions poorly; a model-based whole-body controller is the opposite. Using both means handing the same twelve leg joints back and forth at runtime.',
  },
  {
    icon: Scale,
    title: 'They disagree at the identical pose',
    text: 'At the narrow stance the policy holds position by servo error — about ±12.3 N·m of hip-roll effort where the whole-body controller’s static equilibrium needs about ±5.5 N·m. The gap is 6.51–6.80 N·m, roughly 3.8× the gap at the wide default stance.',
  },
  {
    icon: Gauge,
    title: 'The policy exposes no footstep interface',
    text: 'The policy interface is [vx, vy, ωz, hip height] and nothing else — no foothold, swing-foot or gait-phase API. One fixed stance command disperses 57.340 mm over 17 repeats into a 15.312 mm feasible band, so precision had to come from a loop around the policy, not from the command.',
  },
  {
    icon: AlertTriangle,
    title: 'Contact changes are discontinuous by default',
    text: 'A rigid single-node contact-set change costs 26–35 N·m against the 1.0 N·m limit, in both directions. Loading and unloading contact therefore has to be reformulated, not tuned.',
  },
]

const evidenceClasses = [
  {
    evidence: 'live' as const,
    label: 'Live verified',
    text: 'Isaac Sim ran, the behaviour occurred, raw telemetry exists, the analysis reads it, and it reproduces.',
  },
  {
    evidence: 'offline' as const,
    label: 'Offline verified',
    text: 'Controller or plant rollout. No Isaac instance ran and no torque was commanded.',
  },
  {
    evidence: 'analytic' as const,
    label: 'Analytically verified',
    text: 'Closed-form calculation, no simulation.',
  },
  {
    evidence: 'open' as const,
    label: 'Not qualified / failed',
    text: 'Implemented or evaluated against a declared criterion and not passed. Preserved unchanged, never retired.',
  },
  {
    evidence: 'none' as const,
    label: 'Not achieved',
    text: 'Declared as a direction and never reached — including the live step, the grasp and the lift.',
  },
]

export function G1ContactProblem() {
  return (
    <section id="problem" className="scroll-mt-20 border-y bg-background/20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 py-20 md:px-8 md:py-24">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">01 / Research problem</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Can leg authority be exchanged mid-run without a torque discontinuity?
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            The research question the architecture exists to answer is narrow and concrete: can authority over a
            humanoid&apos;s legs be exchanged between a learned policy and a model-based whole-body controller, and can
            contact be loaded and unloaded through that controller, without ever publishing a torque command that
            jumps?
          </p>
        </div>

        <div className="glass-panel top-highlight relative flex flex-col gap-4 overflow-hidden rounded-xl p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">The safety requirement, stated once</p>
          <div className="overflow-x-auto">
            <code className="block whitespace-pre font-mono text-sm leading-relaxed text-foreground md:text-base">
              {'‖ τ_cmd(k) − τ_cmd(k−1) ‖∞  ≤  1.0 N·m        for every 50 Hz control node'}
            </code>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Every result on this page is a measurement against that limit and the limits beside it. No limit in the
            project has been relaxed to make a result pass. Where a <em>criterion</em> was found to be mis-specified,
            both the original verdict and the stricter correction are preserved.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {tensions.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="glass-panel top-highlight relative flex gap-4 overflow-hidden rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 md:p-6"
              >
                <Icon className="mt-0.5 size-6 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex max-w-3xl flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">How results are labelled</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Every number on this page carries one of these classes, and they are never blurred. Nothing verified
              offline is presented as live.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {evidenceClasses.map((item) => (
              <div key={item.label} className="glass-panel flex flex-col gap-2.5 rounded-lg p-4">
                <EvidenceBadge evidence={item.evidence} label={item.label} />
                <p className="text-xs leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
