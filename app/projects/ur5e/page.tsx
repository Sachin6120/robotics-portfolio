import type { Metadata } from 'next'

import { RoboticsCaseStudy } from '@/components/robotics-case-study'

export const metadata: Metadata = {
  title: 'Perception-Guided UR5e Simulation | Sachin Kumar Pal',
  description:
    'Simulation-only UR5e manipulation case study using ROS 2 Jazzy, RGB-D XYZ and axial-yaw estimation, TF2, MoveIt 2, PlanningScene, ros2_control, and Gazebo Harmonic.',
  keywords: [
    'Robotics',
    'ROS 2',
    'UR5e',
    'MoveIt 2',
    'Gazebo Harmonic',
    'Robotic Manipulation',
    'RGB-D Perception',
    'ros2_control',
    'OpenCV',
    'Mechatronics',
  ],
}

export default function Ur5eProjectPage() {
  return <RoboticsCaseStudy />
}
