import { Check, Shuffle } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const baselineSpecs = [
  ['Static friction', '0.8 (fixed)'],
  ['Dynamic friction', '0.6 (fixed)'],
  ['Random horizontal push', '±0.5 m/s'],
]

const drSpecs = [
  ['Static friction', 'U(0.6, 1.2)'],
  ['Dynamic friction', 'U(0.3, 0.6)'],
  ['Random horizontal push', '±0.8 m/s'],
]

export function G1DomainRandomization() {
  return (
    <section id="domain-randomization" className="mx-auto flex max-w-7xl scroll-mt-20 flex-col gap-10 px-5 py-20 md:px-8 md:py-24">
      <div className="flex max-w-3xl flex-col gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">03 / Domain randomization</p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">Controlled training differences: friction and disturbance magnitude.</h2>
        <p className="max-w-2xl leading-relaxed text-muted-foreground">
          The intended training-configuration differences were limited to contact-friction ranges and training-time push magnitude; all other configured task and PPO settings — robot, observation space, reward terms, network architecture, and the 1500-iteration schedule across 4096 parallel environments — were matched between the baseline and domain-randomized (DR) runs.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="rounded-xl">
          <CardHeader>
            <span className="mb-5 flex size-10 items-center justify-center rounded-lg border font-mono text-xs text-muted-foreground">01</span>
            <CardTitle className="text-xl">Baseline</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {baselineSpecs.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between border-b border-border/60 pb-3 last:border-none last:pb-0">
                <span className="text-sm text-muted-foreground">{label}</span>
                <span className="font-mono text-sm font-medium text-foreground">{value}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-xl border-primary/40">
          <CardHeader>
            <span className="mb-5 flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Shuffle className="size-5" strokeWidth={1.5} /></span>
            <CardTitle className="text-xl">Domain-Randomized (DR)</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {drSpecs.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between border-b border-border/60 pb-3 last:border-none last:pb-0">
                <span className="text-sm text-muted-foreground">{label}</span>
                <span className="font-mono text-sm font-medium text-primary">{value}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="glass-panel top-highlight relative flex items-start gap-3 overflow-hidden rounded-xl p-5 text-sm leading-relaxed text-muted-foreground md:p-6">
        <Check className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.5} />
        <p>
          Network size, reward shaping, episode length, and the 4096-environment, 1500-iteration, ~147M-transition training budget were matched across both configurations. Because one trained checkpoint was evaluated per condition, the study does not isolate training-run stochasticity — a re-run of either configuration with a different training seed could land differently.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {['Unitree G1 / 37 DoF', '4096 parallel envs', '1500 PPO iterations', '~147M transitions / policy'].map((item) => (
          <Badge key={item} variant="secondary" className="font-mono">{item}</Badge>
        ))}
      </div>
    </section>
  )
}
