import { ArrowRight, Camera, CheckCircle2, Cpu, Move3d, Radio, ScanLine, Waypoints } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const nodes = [
  { label: 'RGB-D Camera', sub: 'Color + depth', icon: Camera },
  { label: 'Object Pose', sub: 'XYZ + axial yaw', icon: Cpu },
  { label: 'TF2 Transform', sub: 'Perception → world', icon: Waypoints },
  { label: 'MoveIt 2', sub: 'Configured IK + planning', icon: ScanLine },
  { label: 'PlanningScene', sub: 'Attach → place → detach', icon: Move3d },
  { label: 'ros2_control', sub: 'Arm + gripper execution', icon: Radio },
  { label: 'Simulation Evidence', sub: 'Object behavior', icon: CheckCircle2 },
]

const features = [
  {
    title: 'Perception',
    description: 'Color and depth observations estimate object XYZ and axial yaw; TF2 transforms that perceived pose into the robot\'s world frame. Gazebo ground truth is reserved for evaluation.',
    icon: ScanLine,
    note: 'RGB-D → WORLD TARGET',
  },
  {
    title: 'Planning + Scene Lifecycle',
    description: 'MoveIt\'s configured IK supports deterministic pregrasp selection and collision-aware planning. PlanningScene state manages grasp contact, attachment, pickup, payload transport, placement, detach, and retreat.',
    icon: Move3d,
    note: 'MOVEIT IK + CARTESIAN + OMPL',
  },
  {
    title: 'Validation',
    description: 'The experiment pipeline compares planned execution with measured robot and object behavior in Gazebo instead of treating controller completion alone as manipulation success.',
    icon: CheckCircle2,
    note: 'MEASURED SIMULATION EVIDENCE',
  },
]

export function SystemArchitecture() {
  return (
    <section id="architecture" className="scroll-mt-20 border-y bg-background/20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 py-20 md:px-8 md:py-24">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">02 / System architecture</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">From RGB-D observation to verified object behavior.</h2>
          <p className="leading-relaxed text-muted-foreground">
            The ROS 2 pipeline connects perceived XYZ + axial yaw, TF2 world targeting, MoveIt 2 collision-aware planning, explicit PlanningScene payload management, ros2_control execution, and behavior-based simulation evidence.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
          {nodes.map((node, index) => {
            const Icon = node.icon
            return (
              <div key={node.label} className="glass-panel top-highlight relative flex min-h-36 flex-col gap-5 overflow-hidden rounded-lg p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40">
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

        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="rounded-xl transition-all duration-300 [--card-spacing:--spacing(6)] hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                <CardHeader>
                  <Icon className="mb-5 size-6 text-primary" strokeWidth={1.5} />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="font-mono text-xs uppercase tracking-wide text-primary">{feature.note}</CardDescription>
                </CardHeader>
                <CardContent><p className="leading-relaxed text-muted-foreground">{feature.description}</p></CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
