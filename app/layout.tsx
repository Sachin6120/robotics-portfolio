import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Sachin Kumar Pal | Robotics, Control & Autonomous Systems Portfolio',
  description:
    'M.Sc. Mechatronics student seeking a robotics master\u2019s thesis position. Portfolio of simulation-validated work in humanoid whole-body control, ROS 2 manipulation, motion planning, predictive navigation and reinforcement learning in NVIDIA Isaac Lab.',
  applicationName: 'Sachin Kumar Pal Robotics Portfolio',
  authors: [{ name: 'Sachin Kumar Pal' }],
  creator: 'Sachin Kumar Pal',
  keywords: [
    'Robotics',
    'Autonomous Systems',
    'Robot Control',
    'Whole-Body Control',
    'Robotic Manipulation',
    'Motion Planning',
    'Reinforcement Learning',
    'ROS 2',
    'Nav2',
    'MoveIt 2',
    'NVIDIA Isaac Sim',
    'NVIDIA Isaac Lab',
    'Gazebo Harmonic',
    'PPO',
    'Unitree G1',
    'UR5e',
    'Franka Panda',
    'Humanoid Robotics',
    'Simulation-Based Validation',
    'Master\u2019s Thesis Robotics',
    'Mechatronics',
  ],
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#08090d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark bg-background ${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
