import { Play } from 'lucide-react'

const stages = [
  ['01', 'PERCEIVE', 'RGB-D object localization'],
  ['02', 'TARGET', 'Camera → world target'],
  ['03', 'PREGRASP', 'Deterministic IK selection'],
  ['04', 'GRASP', 'Close parallel-jaw gripper'],
  ['05', 'TRANSFER', 'Lift + transport'],
  ['06', 'PLACE', 'Controlled release'],
]

export function DemoVideo() {
  return (
    <section id="demo" aria-labelledby="demo-heading" className="scroll-mt-20 border-y bg-background/20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 md:px-8 md:py-20">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Demo / Pick &amp; place</p>
            <h2 id="demo-heading" className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              See the complete manipulation cycle.
            </h2>
          </div>
          <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            The demonstration shows the UR5e executing a perception-driven approach, grasp, lift, transport, and placement sequence in Gazebo Harmonic.
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
                <span className="hidden items-center gap-2 sm:flex"><Play className="size-3 text-primary" />System demonstration</span>
              </div>
              <span>UR5e / Parallel-Jaw Gripper</span>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute left-3 top-3 z-10 flex max-w-[calc(100%-1.5rem)] flex-wrap gap-2 md:left-5 md:top-5">
                <span className="rounded-full border border-primary/30 bg-background/85 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-wide text-primary shadow-lg backdrop-blur-md">Perception-Driven Pick &amp; Place</span>
                <span className="rounded-full border border-border bg-background/85 px-3 py-1.5 font-mono text-[10px] font-medium text-muted-foreground shadow-lg backdrop-blur-md">ROS 2 Jazzy · Gazebo Harmonic · MoveIt 2</span>
              </div>
              <video
                className="aspect-video w-full bg-background object-contain"
                controls
                preload="metadata"
                poster="/ur5e-demo-poster.jpg"
                playsInline
                muted
                aria-label="UR5e perception-driven pick-and-place demonstration"
              >
                <source src="/ur5e-demo-video.mp4" type="video/mp4" />
                Your browser does not support HTML video playback.
              </video>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {stages.map(([num, title, text]) => (
            <div key={num} className="glass-panel rounded-lg p-4">
              <p className="font-mono text-[10px] text-primary">{num}</p>
              <p className="mt-3 font-mono text-[10px] font-semibold uppercase tracking-[0.13em] text-foreground">{title}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
