import { ArrowRight, Bot, ClipboardList, Cpu, Crosshair, Database, Gauge, LineChart, Radar, Repeat, Waves } from 'lucide-react'

const trainingFlow = [
  { label: 'G1 Simulation', sub: '37 DoF / 4096 envs', icon: Bot },
  { label: 'Policy Observation', sub: 'Proprioception + commands', icon: Radar },
  { label: 'PPO Actor', sub: 'RSL-RL policy network', icon: Cpu },
  { label: 'Joint Position Actions', sub: 'Per-DoF targets', icon: Crosshair },
  { label: 'Newton/MJWarp Dynamics', sub: 'Physics step', icon: Gauge },
  { label: 'Contact / State Feedback', sub: 'Feeds back to observation', icon: Repeat },
]

const evaluationFlow = [
  { label: 'Checkpoint', sub: 'Baseline or DR policy', icon: Database },
  { label: 'Controlled Environment', sub: 'Fixed seed / nominal contact', icon: ClipboardList },
  { label: '1.5 m/s Push @ 5 s', sub: 'One lateral Y disturbance', icon: Waves },
  { label: 'Recovery Metrics', sub: 'XY + yaw tracking error', icon: LineChart },
  { label: 'Aggregate Analysis', sub: '20,480 episodes', icon: Cpu },
]

function FlowRow({ nodes }: { nodes: { label: string; sub: string; icon: typeof Bot }[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {nodes.map((node, index) => {
        const Icon = node.icon
        return (
          <div key={node.label} className="glass-panel top-highlight relative flex min-h-32 flex-col gap-4 overflow-hidden rounded-lg p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40">
            <div className="flex items-center justify-between text-primary">
              <Icon className="size-5" strokeWidth={1.5} />
              <span className="font-mono text-[10px] text-muted-foreground">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-medium">{node.label}</h3>
              <p className="font-mono text-[10px] leading-relaxed text-muted-foreground">{node.sub}</p>
            </div>
            {index < nodes.length - 1 && (
              <ArrowRight className="architecture-arrow absolute -right-4 top-1/2 hidden size-5 -translate-y-1/2 text-primary lg:block" strokeWidth={1.5} aria-hidden="true" />
            )}
          </div>
        )
      })}
    </div>
  )
}

export function G1SystemArchitecture() {
  return (
    <section id="architecture" className="scroll-mt-20 border-y bg-background/20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 py-20 md:px-8 md:py-24">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">02 / Training &amp; evaluation architecture</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">From policy rollout to aggregate robustness metrics.</h2>
          <p className="leading-relaxed text-muted-foreground">
            Training and evaluation run as two distinct loops in Isaac Lab: a closed-loop PPO training cycle over 1500 iterations, and a controlled, held-out disturbance benchmark applied to the resulting checkpoints.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Training loop</p>
          <FlowRow nodes={trainingFlow} />
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Evaluation loop</p>
          <FlowRow nodes={evaluationFlow} />
        </div>
      </div>
    </section>
  )
}
