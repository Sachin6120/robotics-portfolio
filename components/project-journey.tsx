'use client'

import { useState } from 'react'
import { Camera, Crosshair, Route, ShieldCheck } from 'lucide-react'

import { cn } from '@/lib/utils'

const chapters = [
  {
    label: 'Foundation',
    title: 'Build a stable manipulation baseline',
    text: 'Integrate the simulated UR5e, parallel-jaw gripper, MoveIt 2, ros2_control, and Gazebo Harmonic into a complete grasp–attach–pickup–transport–place–detach–retreat sequence.',
    icon: Route,
  },
  {
    label: 'Perception',
    title: 'Give the manipulation stack visual input',
    text: 'A C++ and OpenCV RGB-D pipeline estimates object XYZ and axial yaw, then TF2 transforms the perceived pose into the robot\'s world frame for manipulation.',
    icon: Camera,
  },
  {
    label: 'Repeatability',
    title: 'Make pregrasp selection deterministic',
    text: 'Multiple candidates from MoveIt\'s configured IK solver are evaluated before execution so repeated targets produce a stable pregrasp configuration and a consistent Cartesian approach.',
    icon: Crosshair,
  },
  {
    label: 'Validation',
    title: 'Measure what actually happened',
    text: 'Experiment tooling records perception, trajectory execution, gripper state, object motion, contacts, and final placement across four pose cases so success is based on simulated behavior rather than controller completion alone.',
    icon: ShieldCheck,
  },
]

export function ProjectJourney() {
  const [active, setActive] = useState(0)
  const chapter = chapters[active]
  const Icon = chapter.icon

  return (
    <section id="journey" aria-labelledby="journey-heading" className="mx-auto flex max-w-7xl scroll-mt-20 flex-col gap-10 px-5 py-20 md:px-8 md:py-24">
      <div className="flex max-w-3xl flex-col gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">01 / Project journey</p>
        <h2 id="journey-heading" className="text-3xl font-semibold tracking-tight md:text-5xl">From scripted motion to perception-driven manipulation.</h2>
        <p className="max-w-2xl leading-relaxed text-muted-foreground">
          The project evolved from a stable simulation baseline to RGB-D-driven XYZ + axial-yaw targeting, repeatable pregrasp selection, explicit payload lifecycle management, and validation across changing planar object poses.
        </p>
      </div>

      <div className="glass-panel top-highlight relative overflow-hidden rounded-xl p-4 md:p-6">
        <div className="relative grid grid-cols-2 gap-2 md:grid-cols-4" role="tablist" aria-label="Project journey stages">
          <div className="absolute left-[12.5%] right-[12.5%] top-5 hidden h-px bg-border md:block" aria-hidden="true" />
          {chapters.map((item, index) => {
            const ItemIcon = item.icon
            return (
              <button
                key={item.label}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-controls="journey-panel"
                onClick={() => setActive(index)}
                className={cn(
                  'relative flex min-h-28 flex-col items-start gap-3 rounded-lg border border-transparent p-3 text-left font-mono text-xs transition-all hover:bg-secondary/50 md:items-center md:text-center',
                  active === index && 'border-primary/30 bg-primary/10 text-primary',
                )}
              >
                <span className={cn('relative flex size-10 items-center justify-center rounded-full border bg-background transition-all', active === index ? 'border-primary shadow-[0_0_18px_var(--primary)]' : 'border-border text-muted-foreground')}>
                  <ItemIcon className="size-4" aria-hidden="true" />
                </span>
                <span>{item.label}</span>
              </button>
            )
          })}
        </div>

        <article id="journey-panel" role="tabpanel" className="mt-4 flex min-h-48 flex-col gap-5 rounded-lg border bg-background/35 p-5 md:flex-row md:items-start md:p-8">
          <Icon className="size-7 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
          <div className="flex max-w-3xl flex-col gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">{chapter.label}</p>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">{chapter.title}</h3>
            <p className="leading-relaxed text-muted-foreground">{chapter.text}</p>
          </div>
        </article>
      </div>
    </section>
  )
}
