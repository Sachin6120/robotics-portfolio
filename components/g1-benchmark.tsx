import { Info } from 'lucide-react'

const benchmarkMetrics = [
  { value: '5', label: 'Push Magnitudes', detail: '0.5, 0.8, 1.0, 1.2, 1.5 m/s' },
  { value: '2', label: 'Policies Evaluated', detail: 'Baseline vs. DR' },
  { value: '5', label: 'Evaluation Seeds', detail: 'Per magnitude, per policy' },
  { value: '256', label: 'Episodes / Cell', detail: 'Magnitude × policy × seed' },
]

const totals = [
  { value: '7,680', label: 'Friction Benchmark Episodes' },
  { value: '12,800', label: 'Push Benchmark Episodes' },
]

export function G1Benchmark() {
  return (
    <section id="benchmark" className="scroll-mt-20 border-y bg-background/20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 md:px-8 md:py-24">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">04 / Benchmark design</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">A controlled, one-shot push-recovery benchmark.</h2>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            Each evaluation episode applies exactly one lateral Y-velocity disturbance at t = 5.0 s under nominal contact physics — the first half of environments pushed in +Y, the second half in −Y — and scores whether the policy recovers within a fixed window.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {benchmarkMetrics.map((metric) => (
            <div key={metric.label} className="glass-panel top-highlight relative flex min-h-40 flex-col justify-between overflow-hidden rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-6">
              <p className="metric-glow text-balance text-2xl font-semibold tracking-tight text-primary md:text-4xl">{metric.value}</p>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-foreground">{metric.label}</p>
                <p className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">{metric.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {totals.map((metric) => (
            <div key={metric.label} className="glass-panel top-highlight relative overflow-hidden rounded-xl p-5 md:p-6">
              <p className="metric-glow text-balance text-3xl font-semibold tracking-tight text-primary">{metric.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="glass-panel top-highlight relative overflow-hidden rounded-xl p-5 md:p-6">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.5} />
            <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Recovery definition:</span> XY velocity tracking error &lt; 0.5 m/s <span className="text-foreground">and</span> yaw velocity tracking error &lt; 0.8 rad/s, continuously, for at least 0.5 s after the push.
              </p>
              <p>
                The five evaluation seeds are held-out evaluation seeds run against <span className="font-medium text-foreground">one trained checkpoint per condition</span> — they are not independent PPO training seeds, and do not represent five separately trained policies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
