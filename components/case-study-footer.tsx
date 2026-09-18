import { ArrowUpRight, Code2, Mail } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

interface CaseStudyFooterProps {
  bottomLeft: string
  bottomRight: string
}

export function CaseStudyFooter({ bottomLeft, bottomRight }: CaseStudyFooterProps) {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 md:px-8 md:py-16">
      <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
        <div className="flex max-w-2xl flex-col gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Built by Sachin Kumar Pal</p>
          <h2 className="text-balance text-2xl font-semibold md:text-3xl">Robotics engineering across learning, perception, planning, control, and simulation.</h2>
          <div className="mt-2 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <p className="font-medium text-foreground">Sachin Kumar Pal</p>
            <p>M.Sc. Mechatronics &amp; Cyber-Physical Systems</p>
            <p>Deggendorf Institute of Technology</p>
          </div>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
            Reinforcement Learning · ROS 2 · Autonomous Navigation · Manipulation · Simulation
          </p>
          <div className="mt-3 inline-flex w-fit rounded-full border border-primary/20 bg-primary/5 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.13em] text-primary">
            Open to Master&apos;s Thesis · Working Student · Robotics / Automation Opportunities
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://github.com/Sachin6120" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm hover:text-primary">
            <Code2 className="size-4" />Sachin6120 <ArrowUpRight className="size-3" />
          </a>
          <a href="mailto:sachinkpal612@gmail.com" className="flex items-center gap-2 text-sm hover:text-primary" aria-label="Email Sachin Kumar Pal at sachinkpal612@gmail.com">
            <Mail className="size-4" />sachinkpal612@gmail.com <ArrowUpRight className="size-3" />
          </a>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col justify-between gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:flex-row">
        <span>{bottomLeft}</span>
        <span>{bottomRight}</span>
      </div>
    </footer>
  )
}
