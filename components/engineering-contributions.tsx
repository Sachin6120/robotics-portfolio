import { Blocks, Bot, Camera, Crosshair, FlaskConical, Gauge, GitBranch, Wrench } from 'lucide-react'

const contributions = [
  { title: 'Perception', text: 'Custom RGB-D object localization using C++ and OpenCV.', icon: Camera },
  { title: 'Robot Integration', text: 'UR5e and parallel-jaw gripper simulation integrated with ROS 2 Jazzy and Gazebo Harmonic.', icon: Bot },
  { title: 'Transforms', text: 'TF2-based camera-to-world target handling for perception-driven manipulation.', icon: GitBranch },
  { title: 'Motion Planning', text: 'MoveIt 2 integration, deterministic pregrasp selection, Cartesian manipulation, and transport planning.', icon: Crosshair },
  { title: 'Control', text: 'ros2_control integration for UR5e trajectory execution and gripper actuation.', icon: Gauge },
  { title: 'Grasp Modeling', text: 'Parallel-jaw aperture geometry and object-width-aware grasp configuration.', icon: Wrench },
  { title: 'Experiment Tooling', text: 'Python and shell tooling for controlled runs, logging, regression checks, and evidence preservation.', icon: Blocks },
  { title: 'Validation', text: 'Quantitative checks for perception error, path execution, object motion, grasp behavior, and final placement.', icon: FlaskConical },
]

export function EngineeringContributions() {
  return (
    <section id="contributions" className="mx-auto flex max-w-7xl scroll-mt-20 flex-col gap-10 px-5 py-20 md:px-8 md:py-24">
      <div className="flex max-w-3xl flex-col gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">03 / Engineering contributions</p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">What I implemented and integrated across the manipulation stack.</h2>
        <p className="max-w-2xl leading-relaxed text-muted-foreground">
          The project combines perception, planning, robot integration, control, and experiment tooling rather than isolating one layer of the robotics stack.
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
