import { ArrowDown, ArrowUpRight, Code2, GitBranch, Radar, Waves } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const tech = [
  'NVIDIA Isaac Lab',
  'PPO',
  'RSL-RL',
  'PyTorch',
  'Newton/MJWarp',
  'Domain Randomization',
  'Python',
  'Unitree G1',
]

const snapshot = [
  ['ROBOT', 'Unitree G1 / 37 DoF'],
  ['TRAINING', 'PPO / 4096 envs'],
  ['PHYSICS', 'Newton / MJWarp'],
  ['EVALUATION', '20,480 episodes'],
]

export function G1Hero() {
  return (
    <section className="hero-ambient relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:py-20">
      <div className="relative flex flex-col items-start gap-7">
        <div className="tech-pill flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em]">
          <span className="size-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
          Simulation-Only Robustness Study
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="heading-gradient max-w-3xl text-balance font-sans text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
            Robust G1 Humanoid Locomotion with PPO &amp; Domain Randomization
          </h1>
          <p className="max-w-2xl text-pretty text-base font-medium leading-relaxed text-foreground/90 md:text-lg">
            Controlled robustness evaluation of a 37-DoF humanoid locomotion policy in NVIDIA Isaac Lab.
          </p>
          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            A baseline PPO policy and a domain-randomized PPO policy are trained under identical conditions except for friction and disturbance ranges, then compared on a controlled, held-out lateral-push benchmark. This is entirely simulation work — a sim-to-real-oriented robustness study, not a sim-to-real transfer or hardware deployment.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <Badge key={item} variant="outline" className="tech-pill font-mono">
              {item}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            size="lg"
            nativeButton={false}
            render={<a href="https://github.com/Sachin6120/isaaclab-g1-robust-locomotion" target="_blank" rel="noreferrer" />}
          >
            <Code2 data-icon="inline-start" /> View GitHub <ArrowUpRight data-icon="inline-end" />
          </Button>
          <Button size="lg" variant="outline" nativeButton={false} render={<a href="#results" />}>
            View Results <ArrowDown data-icon="inline-end" />
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="telemetry-breathe glass-panel top-highlight relative overflow-hidden rounded-xl">
          <div className="flex items-center justify-between border-b px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            <span className="flex items-center gap-2">
              <GitBranch className="size-3.5 text-primary" /> System Snapshot
            </span>
            <span className="text-primary">ISAAC LAB / SIMULATION</span>
          </div>

          <div className="grid gap-px border-b bg-border/50 sm:grid-cols-2 lg:grid-cols-4">
            {snapshot.map(([label, value]) => (
              <div key={label} className="bg-background/40 px-4 py-3">
                <p className="font-mono text-[9px] uppercase tracking-wide text-muted-foreground">{label}</p>
                <p className="mt-1 text-xs font-medium text-foreground">{value}</p>
              </div>
            ))}
          </div>

          <div className="relative aspect-[16/10] overflow-hidden p-5">
            <div className="system-grid absolute inset-0 opacity-35" />
            <div className="absolute left-5 top-4 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
              <Waves className="size-3.5 text-primary" /> lateral push / recovery window
            </div>
            <svg viewBox="0 0 600 330" className="relative size-full" role="img" aria-label="Conceptual velocity-tracking-error recovery curve after a lateral push">
              <defs>
                <linearGradient id="g1trajectory" x1="0" y1="0" x2="1" y2="0">
                  <stop stopColor="var(--violet)" />
                  <stop offset="0.48" stopColor="var(--cyan)" />
                  <stop offset="1" stopColor="var(--primary)" />
                </linearGradient>
              </defs>
              <path d="M55 200 H260" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M260 200 C285 200 285 260 300 268 C340 290 380 236 420 210 C460 186 500 180 545 178" fill="none" stroke="url(#g1trajectory)" strokeWidth="4" strokeLinecap="round" className="trajectory-path" />
              <path d="M55 260 H550 M55 260 V42" fill="none" stroke="var(--border)" strokeWidth="1" />
              <path d="M260 60 V268" fill="none" stroke="var(--violet)" strokeWidth="1.5" strokeDasharray="3 5" />
              <circle cx="260" cy="200" r="5" fill="var(--violet)" />
              <circle cx="300" cy="268" r="5" fill="var(--cyan)" />
              <circle cx="545" cy="178" r="6" fill="var(--primary)" />
              <text x="222" y="50" fill="var(--violet)" fontSize="10" fontFamily="monospace">push @ t=5.0s</text>
              <text x="308" y="292" fill="var(--muted-foreground)" fontSize="10" fontFamily="monospace">peak tracking error</text>
              <text x="470" y="168" fill="var(--muted-foreground)" fontSize="10" fontFamily="monospace">recovered</text>
              <text x="37" y="286" fill="var(--muted-foreground)" fontSize="10" fontFamily="monospace">nominal walking</text>
            </svg>
            <div className="absolute bottom-4 left-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
              <Radar className="size-3.5 text-primary" /> Velocity tracking error → recovery
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          <span>RSL-RL PPO / NEWTON MJWARP</span>
          <span>CONTROLLED PUSH BENCHMARK</span>
        </div>
      </div>
    </section>
  )
}
