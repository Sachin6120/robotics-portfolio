export interface ProjectMetric {
  value: string
  label: string
}

export interface ProjectMedia {
  src: string
  alt: string
  caption: string
}

export interface FeaturedProject {
  slug: string
  title: string
  tagline: string
  summary: string
  /** Validation scope, stated on every card so no card implies hardware results. */
  scope: string
  media: ProjectMedia
  tech: string[]
  metrics: ProjectMetric[]
  /** Internal case-study route, where one exists. */
  href?: string
  github: string
}

export interface SecondaryProject {
  title: string
  tagline: string
  summary: string
  /** Headline result, or the validation that was performed. */
  result: string
  status: string
  github?: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: 'g1-contact-aware-control',
    title: 'Unitree G1 — Contact-Aware Whole-Body Control',
    tagline: 'Whole-Body Control · Hierarchical QP · Isaac Sim',
    summary:
      'Exchanging authority over a humanoid’s twelve leg joints between a learned locomotion policy and a model-based contact-aware whole-body controller, and loading and unloading contact through it, without publishing a torque command that jumps.',
    scope: 'Simulation only · no hardware · work in progress',
    media: {
      src: '/g1-contact/figure_f_live_handoff_continuity.png',
      alt: 'Measured live controller handoff torque-continuity plot for the Unitree G1',
      caption: 'Live command-continuity telemetry · NOT live contact reload or touchdown',
    },
    tech: ['NVIDIA Isaac Sim', 'Isaac Lab', 'Whole-Body Control', 'Hierarchical QP', 'Pinocchio', 'Unitree G1'],
    metrics: [
      { value: '0.8000 N·m', label: 'Worst per-node command step, live — limit ≤ 1.0' },
      { value: '33 / 33', label: 'Contact-reload cases qualified offline' },
    ],
    href: '/projects/g1-contact-aware-control',
    github: 'https://github.com/Sachin6120/g1-contact-aware-whole-body-control',
  },
  {
    slug: 'ur5e',
    title: 'UR5e — Perception-Guided Pick & Place',
    tagline: 'ROS 2 · MoveIt 2 · Gazebo',
    summary:
      'RGB-D object pose estimation, deterministic pregrasp selection and MoveIt 2 motion planning, validated through repeatable simulation experiments across four planar pose cases.',
    scope: 'Simulation only · ROS 2 Jazzy / Gazebo Harmonic',
    media: {
      src: '/ur5e-demo-poster.jpg',
      alt: 'UR5e Gazebo simulation demo poster for perception-guided pick and place',
      caption: 'UR5e simulation demo · four pose cases validated separately',
    },
    tech: ['ROS 2 Jazzy', 'Gazebo Harmonic', 'MoveIt 2', 'ros2_control', 'OpenCV', 'TF2'],
    metrics: [
      { value: '4 / 4', label: 'Validated pose cases' },
      { value: '≤ 1.613 mm', label: 'Worst perception error' },
    ],
    href: '/projects/ur5e',
    github: 'https://github.com/Sachin6120/ur5e-robotiq-pickplace',
  },
  {
    slug: 'predictive-dynamic-obstacle-navigation',
    title: 'Predictive Dynamic-Obstacle Navigation',
    tagline: 'ROS 2 · Nav2 · MPPI · Kalman Prediction',
    summary:
      'A per-object Kalman tracker propagates moving obstacles forward under a constant-velocity model and paints the predicted occupancy into a custom Nav2 costmap layer, so MPPI plans against where an obstacle will be rather than where it was last seen.',
    scope: 'Simulation only · staged Gazebo validation campaign',
    media: {
      src: '/predictive-navigation/predictive_navigation_hero.png',
      alt: 'Predictive dynamic-obstacle navigation project illustration from its repository',
      caption: 'Project visualization · measured trial results in source repository',
    },
    tech: ['ROS 2 Jazzy', 'Nav2', 'MPPI', 'C++', 'Kalman Filter', 'costmap_2d plugin'],
    metrics: [
      { value: '448 trials', label: 'Final robustness pass, 46 condition groups' },
      { value: '6 → 0', label: 'Head-on collisions, reactive → predictive' },
    ],
    github: 'https://github.com/Sachin6120/predictive-dynamic-obstacle-navigation',
  },
  {
    slug: 'g1-robust-locomotion',
    title: 'Unitree G1 — Robust PPO Locomotion',
    tagline: 'PPO · Isaac Lab · Domain Randomization',
    summary:
      'Controlled robustness study of a 37-DoF humanoid locomotion policy, comparing a baseline and a domain-randomized PPO checkpoint on a held-out lateral-push benchmark.',
    scope: 'Simulation only · sim-to-real-oriented study, no transfer',
    media: {
      src: '/g1/g1_push_1p5_side_by_side.gif',
      alt: 'Paired simulated Unitree G1 locomotion rollouts: baseline falls and domain-randomized policy recovers under a 1.5 meters per second lateral push',
      caption: 'ONE paired rollout · aggregate results shown below; no hardware transfer',
    },
    tech: ['NVIDIA Isaac Lab', 'PPO', 'RSL-RL', 'PyTorch', 'Domain Randomization'],
    metrics: [
      { value: '20,480', label: 'Evaluated episodes, friction + push benchmarks' },
      { value: '39.84% → 13.28%', label: 'Fall rate @ 1.5 m/s, baseline → DR' },
    ],
    href: '/projects/g1-robust-locomotion',
    github: 'https://github.com/Sachin6120/isaaclab-g1-robust-locomotion',
  },
]

export const additionalProjects: SecondaryProject[] = [
  {
    title: 'Franka Panda — PPO Pick & Lift',
    tagline: 'PPO · Isaac Lab · RSL-RL',
    summary:
      'A custom external Isaac Lab ManagerBasedRLEnv task in which a Franka Panda learns reach → grasp → lift → sustain from a randomized cube position, with reward design and evaluation protocol built for this project.',
    result: '25 / 25 held-out test positions successful, 0 drops',
    status: 'Simulation-only PPO · no hardware claims',
    github: 'https://github.com/Sachin6120/franka-pick-lift-ppo-isaaclab',
  },
  {
    title: 'Elliptical Gear Design',
    tagline: 'Lua · IceSL · Non-Circular Gearing',
    summary:
      'Parametric generation of conjugate elliptical gear profiles, checked analytically and then against a printed pair.',
    result: 'Analytical + physical validation',
    status: 'Full case study coming soon',
  },
  {
    title: '12-Segment Collapsible Core',
    tagline: 'Mechanism Design · Lua · 3D Printing',
    summary:
      'A twelve-segment collapsing core mechanism, parametrically generated and validated as a functional printed prototype.',
    result: 'Functional prototype validated',
    status: 'Full case study coming soon',
  },
]
