import { ArrowUpRight } from 'lucide-react'

const headlineMetrics = [
  { value: '20,480', label: 'Total Evaluation Episodes', detail: 'Friction + push benchmarks' },
  { value: '12,800', label: 'Push Benchmark Episodes', detail: '5 magnitudes × 2 policies × 5 seeds × 256' },
  { value: '39.84% → 13.28%', label: 'Fall Rate @ 1.5 m/s', detail: 'Baseline → DR, held-out push' },
  { value: '60.31% → 86.72%', label: 'Recovery @ 1.5 m/s', detail: 'Baseline → DR, held-out push' },
]

const deltaMetrics = [
  { value: '−26.56 pp', label: 'Fall rate change at 1.5 m/s' },
  { value: '+26.41 pp', label: 'Recovery rate change at 1.5 m/s' },
]

const figures = [
  { src: '/g1/fall_rate_vs_push.png', caption: 'Fall rate vs. push magnitude, baseline vs. DR.' },
  { src: '/g1/recovery_rate_vs_push.png', caption: 'Recovery rate vs. push magnitude, baseline vs. DR.' },
  { src: '/g1/recovery_time_vs_push.png', caption: 'Recovery time vs. push magnitude, baseline vs. DR.' },
  { src: '/g1/post_push_xy_error_vs_push.png', caption: 'Post-push XY velocity tracking error vs. push magnitude.' },
  { src: '/g1/post_push_yaw_error_vs_push.png', caption: 'Post-push yaw velocity tracking error vs. push magnitude.' },
]

export function G1Results() {
  return (
    <section id="results" className="scroll-mt-20 border-y bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 md:px-8 md:py-24">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">05 / Results</p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Improved robustness under the held-out 1.5 m/s disturbance.</h2>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            At the held-out 1.5 m/s push, the domain-randomized checkpoint showed improved disturbance robustness under the controlled held-out lateral-push benchmark. This is not a claim that domain randomization universally improves robustness — see the results across all five push magnitudes below.
          </p>
          <a href="https://github.com/Sachin6120/isaaclab-g1-robust-locomotion" target="_blank" rel="noreferrer" className="w-fit font-mono text-xs uppercase tracking-[0.13em] text-primary hover:text-foreground">
            View source &amp; results <ArrowUpRight className="ml-1 inline size-3" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {headlineMetrics.map((metric) => (
            <div key={metric.label} className="glass-panel top-highlight relative flex min-h-44 flex-col justify-between overflow-hidden rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-6">
              <p className="metric-glow text-balance text-xl font-semibold tracking-tight text-primary md:text-3xl">{metric.value}</p>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-foreground">{metric.label}</p>
                <p className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">{metric.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {deltaMetrics.map((metric) => (
            <div key={metric.label} className="glass-panel top-highlight relative overflow-hidden rounded-xl p-5 md:p-6">
              <p className="metric-glow text-balance text-2xl font-semibold tracking-tight text-primary">{metric.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {figures.map((figure) => (
            <figure key={figure.src} className="glass-panel top-highlight relative overflow-hidden rounded-xl p-3 md:p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={figure.src} alt={figure.caption} loading="lazy" className="w-full rounded-lg border border-border/60" />
              <figcaption className="mt-3 px-1 text-xs leading-relaxed text-muted-foreground">{figure.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
