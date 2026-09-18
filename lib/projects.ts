export interface FeaturedProject {
  slug: string
  title: string
  tagline: string
  summary: string
  tech: string[]
  metrics: { value: string; label: string }[]
  href: string
  github: string
}

export interface PlannedProject {
  title: string
  tagline: string
  result: string
  status: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: 'g1-robust-locomotion',
    title: 'Robust G1 Humanoid Locomotion',
    tagline: 'PPO · Isaac Lab · Domain Randomization',
    summary:
      'Controlled robustness study of humanoid locomotion under held-out lateral disturbances.',
    tech: ['NVIDIA Isaac Lab', 'PPO', 'RSL-RL', 'Domain Randomization'],
    metrics: [
      { value: '20,480', label: 'Evaluated episodes' },
      { value: '39.84% → 13.28%', label: 'Fall rate @ 1.5 m/s' },
    ],
    href: '/projects/g1-robust-locomotion',
    github: 'https://github.com/Sachin6120/isaaclab-g1-robust-locomotion',
  },
  {
    slug: 'ur5e',
    title: 'Perception-Guided UR5e Pick & Place',
    tagline: 'ROS 2 · MoveIt 2 · Gazebo',
    summary:
      'RGB-D perception-driven manipulation validated through repeatable simulation experiments across four planar pose cases.',
    tech: ['ROS 2 Jazzy', 'Gazebo Harmonic', 'MoveIt 2', 'ros2_control'],
    metrics: [
      { value: '4 / 4', label: 'Validated pose cases' },
      { value: '≤1.613 mm', label: 'Worst perception error' },
    ],
    href: '/projects/ur5e',
    github: 'https://github.com/Sachin6120/ur5e-robotiq-pickplace',
  },
]

export const plannedProjects: PlannedProject[] = [
  {
    title: 'Predictive Dynamic-Obstacle Navigation',
    tagline: 'ROS 2 · Nav2 · MPPI · Kalman Prediction',
    result: '448 simulation trials',
    status: 'Full case study coming soon',
  },
  {
    title: 'Elliptical Gear Design',
    tagline: 'Lua · IceSL · Non-Circular Gearing',
    result: 'Analytical + physical validation',
    status: 'Full case study coming soon',
  },
  {
    title: '12-Segment Collapsible Core',
    tagline: 'Mechanism Design · Lua · 3D Printing',
    result: 'Functional prototype validated',
    status: 'Full case study coming soon',
  },
]
