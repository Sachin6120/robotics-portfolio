import type { Metadata } from 'next'

import { G1CaseStudy } from '@/components/g1-case-study'

export const metadata: Metadata = {
  title: 'Robust G1 Humanoid Locomotion | Sachin Kumar Pal',
  description:
    'Simulation-only sim-to-real-oriented robustness study of a 37-DoF Unitree G1 PPO locomotion policy in NVIDIA Isaac Lab, comparing a baseline and a domain-randomized checkpoint on a controlled, held-out lateral-push benchmark.',
  keywords: [
    'Robotics',
    'Reinforcement Learning',
    'NVIDIA Isaac Lab',
    'PPO',
    'RSL-RL',
    'Domain Randomization',
    'Humanoid Locomotion',
    'Unitree G1',
    'Newton Physics',
    'MJWarp',
  ],
}

export default function G1ProjectPage() {
  return <G1CaseStudy />
}
