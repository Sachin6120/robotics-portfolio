import { ArrowDown, ArrowUpRight, Code2, Crosshair, GitBranch, Route } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const tech = ['ROS 2 Jazzy', 'Gazebo Harmonic', 'MoveIt 2', 'ros2_control', 'C++', 'Python', 'OpenCV', 'TF2']

const snapshot = [
  ['ROBOT', 'UR5e / Gazebo'],
  ['PERCEPTION', 'RGB-D XYZ + Yaw'],
  ['PLANNING', 'MoveIt 2 / IK'],
  ['LIFECYCLE', 'PlanningScene'],
]

export function CaseStudyHero() {
  return (
    <section className="hero-ambient relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:py-20">
      <div className="relative flex flex-col items-start gap-7">
        <div className="tech-pill flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em]">
          <span className="size-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
          Perception-Guided Manipulation in Simulation
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="heading-gradient max-w-3xl text-balance font-sans text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
            Perception-Guided UR5e Pick &amp; Place in Simulation
          </h1>
          <p className="max-w-2xl text-pretty text-base font-medium leading-relaxed text-foreground/90 md:text-lg">
            RGB-D object pose estimation, deterministic pregrasp selection, MoveIt 2 motion planning, and quantitative simulation validation in ROS 2.
          </p>
          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            The pipeline estimates object XYZ and axial yaw, transforms the perceived pose into the world frame with TF2, selects a repeatable pregrasp through MoveIt&apos;s configured IK, and validates the resulting object behavior in Gazebo.
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
            render={<a href="https://github.com/Sachin6120/ur5e-robotiq-pickplace" target="_blank" rel="noreferrer" />}
          >
            <Code2 data-icon="inline-start" /> View GitHub <ArrowUpRight data-icon="inline-end" />
          </Button>
          <Button size="lg" variant="outline" nativeButton={false} render={<a href="#demo" />}>
            Watch Demo <ArrowDown data-icon="inline-end" />
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="telemetry-breathe glass-panel top-highlight relative overflow-hidden rounded-xl">
          <div className="flex items-center justify-between border-b px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            <span className="flex items-center gap-2">
              <GitBranch className="size-3.5 text-primary" /> System Snapshot
            </span>
            <span className="text-primary">ROS 2 / SIMULATION</span>
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
              <Route className="size-3.5 text-primary" /> manipulation pipeline / world frame
            </div>
            <svg viewBox="0 0 600 330" className="relative size-full" role="img" aria-label="Conceptual perception-to-manipulation path">
              <defs>
                <linearGradient id="trajectory" x1="0" y1="0" x2="1" y2="0">
                  <stop stopColor="var(--violet)" />
                  <stop offset="0.48" stopColor="var(--cyan)" />
                  <stop offset="1" stopColor="var(--primary)" />
                </linearGradient>
              </defs>
              <path d="M55 255 C118 245 132 195 198 205 S272 255 335 208 S430 108 545 95" fill="none" stroke="url(#trajectory)" strokeWidth="4" strokeLinecap="round" className="trajectory-path" />
              <path d="M55 260 H550 M55 260 V42" fill="none" stroke="var(--border)" strokeWidth="1" />
              <circle cx="55" cy="255" r="5" fill="var(--violet)" />
              <circle cx="198" cy="205" r="5" fill="var(--cyan)" />
              <circle cx="335" cy="208" r="5" fill="var(--cyan)" />
              <circle cx="545" cy="95" r="6" fill="var(--primary)" />
              <text x="37" y="286" fill="var(--muted-foreground)" fontSize="10" fontFamily="monospace">perceived object</text>
              <text x="164" y="188" fill="var(--muted-foreground)" fontSize="10" fontFamily="monospace">pregrasp</text>
              <text x="317" y="232" fill="var(--muted-foreground)" fontSize="10" fontFamily="monospace">grasp / lift</text>
              <text x="523" y="77" fill="var(--muted-foreground)" fontSize="10" fontFamily="monospace">place</text>
              <g transform="translate(545 95)" strokeWidth="3" strokeLinecap="round">
                <path d="M0 0 L38 0" stroke="var(--axis-x)" />
                <path d="M0 0 L0 -38" stroke="var(--axis-y)" />
                <path d="M0 0 L-22 22" stroke="var(--axis-z)" />
              </g>
            </svg>
            <div className="absolute bottom-4 left-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
              <Crosshair className="size-3.5 text-primary" /> Perceived target → deterministic pregrasp
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          <span>TF2 / WORLD TARGET</span>
          <span>DETERMINISTIC PREGRASP</span>
        </div>
      </div>
    </section>
  )
}
