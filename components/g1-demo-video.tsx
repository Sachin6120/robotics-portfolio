import { Play } from 'lucide-react'

const facts = [
  ['SEED', 'Seed 42 / Env 0'],
  ['DISTURBANCE', '+1.5 m/s lateral push @ t = 5.0 s'],
  ['COMPARISON', 'Baseline (left) vs. domain-randomized (right)'],
]

export function G1DemoVideo() {
  return (
    <section id="demo" aria-labelledby="demo-heading" className="scroll-mt-20 border-y bg-background/20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 md:px-8 md:py-20">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Demo / Disturbance recovery</p>
            <h2 id="demo-heading" className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              Watch one paired lateral-push trial.
            </h2>
          </div>
          <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            The baseline falls shortly after the push, while the domain-randomized checkpoint recovers. This is one paired example; aggregate results are reported below.
          </p>
        </div>

        <div className="demo-ambient relative rounded-xl">
          <div className="glass-panel top-highlight relative overflow-hidden rounded-xl shadow-2xl transition-all hover:border-primary/40">
            <div className="flex h-11 items-center justify-between border-b bg-card/80 px-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-muted-foreground/50" />
                  <span className="size-2.5 rounded-full bg-muted-foreground/70" />
                  <span className="size-2.5 rounded-full bg-primary/80" />
                </span>
                <span className="hidden items-center gap-2 sm:flex"><Play className="size-3 text-primary" />Paired evaluation clip</span>
              </div>
              <span>Unitree G1 / 37 DoF</span>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute left-3 top-3 z-10 flex max-w-[calc(100%-1.5rem)] flex-wrap gap-2 md:left-5 md:top-5">
                <span className="rounded-full border border-primary/30 bg-background/85 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-wide text-primary shadow-lg backdrop-blur-md">Baseline vs. Domain-Randomized</span>
                <span className="rounded-full border border-border bg-background/85 px-3 py-1.5 font-mono text-[10px] font-medium text-muted-foreground shadow-lg backdrop-blur-md">Isaac Lab · RSL-RL PPO · Newton/MJWarp</span>
              </div>
              <video
                className="aspect-[32/9] w-full bg-background object-contain"
                controls
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="Paired evaluation example — seed 42, env 0, +1.5 m/s lateral disturbance, baseline versus domain-randomized G1 policy"
              >
                <source src="/g1/g1_push_1p5_side_by_side.mp4" type="video/mp4" />
                Your browser does not support HTML video playback.
              </video>
            </div>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          Paired evaluation example — seed 42, env 0, +1.5 m/s lateral disturbance. The baseline falls shortly after the push while the DR checkpoint recovers. This is one paired example; aggregate results are reported below.
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {facts.map(([label, value]) => (
            <div key={label} className="glass-panel rounded-lg p-4">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.13em] text-primary">{label}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
