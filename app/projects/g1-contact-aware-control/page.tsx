import type { Metadata } from 'next'

import { G1ContactCaseStudy } from '@/components/g1-contact-case-study'

export const metadata: Metadata = {
  title: 'Unitree G1 — Contact-Aware Whole-Body Control | Sachin Kumar Pal',
  description:
    'Simulation-only contact-aware whole-body control case study on a 29-DoF Unitree G1 in NVIDIA Isaac Sim: a slew-limited handoff between a learned locomotion policy and a hierarchical whole-body QP across a 6.5–6.8 N·m torque gap, live bilateral load transfer, live contact release, and a 33-case offline contact-reload qualification.',
  keywords: [
    'Robotics',
    'Whole-Body Control',
    'Contact-Aware Control',
    'Humanoid Robotics',
    'Unitree G1',
    'NVIDIA Isaac Sim',
    'Isaac Lab',
    'Hierarchical QP',
    'Task-Space Inverse Dynamics',
    'Pinocchio',
    'Robot Control',
    'Simulation-Based Validation',
  ],
}

export default function G1ContactAwareControlPage() {
  return <G1ContactCaseStudy />
}
