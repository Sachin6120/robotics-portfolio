import { Activity, Blocks, Cpu, Crosshair, FlaskConical, Grid3x3, LineChart, Waves } from 'lucide-react'

const contributions = [
  { title: 'PPO Training Pipeline', text: 'RSL-RL PPO training loop for the Unitree G1 across 4096 parallel Isaac Lab environments, run to 1500 iterations per policy (~147M transitions).', icon: Cpu },
  { title: 'Isaac Lab Environment Configuration', text: 'G1 (37 DoF) task, observation, and reward configuration on Isaac Lab with Newton/MJWarp physics.', icon: Grid3x3 },
  { title: 'Domain Randomization', text: 'Sampled static/dynamic friction ranges and widened training-time push disturbances, isolated as the only variable between baseline and DR policies.', icon: Blocks },
  { title: 'Controlled Disturbance Event', text: 'A single, precisely-timed lateral Y-velocity push applied at t = 5.0 s under nominal contact physics, balanced +Y/−Y across environments.', icon: Waves },
  { title: 'Recovery Metric Design', text: 'Explicit XY and yaw velocity-tracking-error thresholds, sustained for 0.5 s, used to score recovery rather than relying on fall detection alone.', icon: Crosshair },
  { title: 'Automated Evaluation Matrix', text: '5 push magnitudes × 2 policies × 5 evaluation seeds × 256 episodes, executed as a repeatable 12,800-episode push benchmark plus a 7,680-episode friction benchmark.', icon: FlaskConical },
  { title: 'Statistical Aggregation', text: 'Aggregation of fall rate, recovery rate, recovery time, and post-push tracking error across seeds and magnitudes for both policies.', icon: Activity },
  { title: 'Reproducible Visualization', text: 'Scripted generation of comparison plots and paired baseline-vs-DR video evidence directly from evaluation logs.', icon: LineChart },
]

export function G1EngineeringContributions() {
  return (
    <section id="contributions" className="mx-auto flex max-w-7xl scroll-mt-20 flex-col gap-10 px-5 py-20 md:px-8 md:py-24">
      <div className="flex max-w-3xl flex-col gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">06 / Engineering contributions</p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">What I implemented across training and evaluation.</h2>
        <p className="max-w-2xl leading-relaxed text-muted-foreground">
          The project spans PPO training configuration, domain randomization, a controlled disturbance benchmark, and the statistical tooling used to report results honestly.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {contributions.map((item, index) => {
          const Icon = item.icon
          return (
            <article key={item.title} className="glass-panel top-highlight group relative min-h-52 overflow-hidden rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-6">
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 text-primary"><Icon className="size-5" strokeWidth={1.5} /></span>
                <span className="font-mono text-[10px] text-muted-foreground">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
