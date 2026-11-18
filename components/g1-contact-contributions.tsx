import { EvidenceBadge, type EvidenceClass } from '@/components/evidence-badge'

interface Contribution {
  title: string
  text: string
  metric: string
  metricLabel: string
  evidence: EvidenceClass
  evidenceLabel: string
}

const contributions: Contribution[] = [
  {
    title: 'A state-triggered, slew-limited controller handoff',
    text: 'Transfers ownership of the twelve leg torques from a learned policy to a whole-body QP across the 6.51–6.80 N·m torque gap. It terminates on a measured convergence predicate rather than a node count, because the target moves at 1.38× the slew authority per node and a fixed-length blend has far less margin than a static capacity calculation suggests.',
    metric: '0.8000 N·m',
    metricLabel: 'Worst per-node command step · 20% margin under the 1.0 N·m limit',
    evidence: 'live',
    evidenceLabel: 'Live verified · 3/3',
  },
  {
    title: 'A complete bilateral load transfer, live',
    text: 'One sole’s commanded normal-force bound is ramped from body weight down to 4.789 N and back with both soles planted, the sole’s normal force strictly positive throughout, and zero aborts over 1111–1113 control nodes per episode.',
    metric: '2.6367 N',
    metricLabel: 'Minimum unloading-sole normal force · limit > 0 throughout',
    evidence: 'live',
    evidenceLabel: 'Live verified · 3/3',
  },
  {
    title: 'Budgeted entry-load allocation for contact reload',
    text: 'The entry load at touchdown stops being an open-loop constant — which provably cannot work, because the 33 landing states have non-empty feasible sets whose intersection is empty — and becomes the largest value whose reaction fits a declared command-step budget, solved per state from two non-commanding probes.',
    metric: '33 / 33',
    metricLabel: 'Landing cases qualified · allocation prediction error ≤ 4.219e-04 N·m',
    evidence: 'offline',
    evidenceLabel: 'Offline verified',
  },
  {
    title: 'Relaxed contact transitions',
    text: 'A rigid contact-set change costs 26–35 N·m against a 1.0 N·m limit. Formulating a contact whose six motion rows are an L2-penalised slack closes the insertion continuously instead, a factor of roughly 1370 lower.',
    metric: '0.005621 N·m',
    metricLabel: 'Insertion command step under the relaxed formulation',
    evidence: 'offline',
    evidenceLabel: 'Offline verified',
  },
  {
    title: 'An execution contract separating simulated time from wall clock',
    text: 'Eight frozen criteria built from the project’s own documentary record, with 25 citations each located by exact substring match. It declares a simulated-time operating mode and preserves the wall-clock criterion as a separate, unretired FAIL — with the explicit consequence that no result here may be called real-time.',
    metric: '5 / 8',
    metricLabel: 'Criteria passing · one not qualified, one never attempted live, wall clock FAIL',
    evidence: 'open',
    evidenceLabel: 'Mixed · one standing FAIL',
  },
  {
    title: 'A measurement discipline that caught six defective criteria',
    text: 'Including a probe-isolation flag that was a hardcoded literal rather than a measurement, and a citation gate that failed on its own author’s citation. Both verdicts are preserved in every case, and every correction is stricter than what it replaced.',
    metric: '6',
    metricLabel: 'Mis-specified criteria found, corrected and preserved',
    evidence: 'analytic',
    evidenceLabel: 'Method · verdicts preserved',
  },
]

export function G1ContactContributions() {
  return (
    <section id="contributions" className="scroll-mt-20 border-y bg-background/20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 md:px-8 md:py-24">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            03 / Major engineering contributions
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Six contributions, each with the measurement that justifies it.
          </h2>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            Each item below is labelled with the evidence tier it actually reached. Two ran live in the simulator;
            two are offline controller and plant results with no commanded torque; two are method contributions.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {contributions.map((item, index) => (
            <article
              key={item.title}
              className="glass-panel top-highlight relative flex flex-col gap-4 overflow-hidden rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/30 font-mono text-[11px] text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base font-semibold leading-snug text-foreground">{item.title}</h3>
                </div>
                <EvidenceBadge evidence={item.evidence} label={item.evidenceLabel} className="shrink-0" />
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>

              <div className="mt-auto rounded-lg border border-border/60 bg-background/40 p-4">
                <p className="metric-glow text-xl font-semibold tracking-tight text-primary">{item.metric}</p>
                <p className="mt-1 font-mono text-[10px] uppercase leading-relaxed tracking-wide text-muted-foreground">
                  {item.metricLabel}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
