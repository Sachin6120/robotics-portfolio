import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Sachin Kumar Pal | Robotics & Reinforcement Learning Portfolio',
  description:
    'Mechatronics engineer portfolio featuring NVIDIA Isaac Lab reinforcement learning, ROS 2 manipulation, autonomous navigation and simulation-based robotics validation.',
  applicationName: 'Sachin Kumar Pal Robotics Portfolio',
  authors: [{ name: 'Sachin Kumar Pal' }],
  creator: 'Sachin Kumar Pal',
  keywords: [
    'Robotics',
    'Reinforcement Learning',
    'NVIDIA Isaac Lab',
    'ROS 2',
    'UR5e',
    'Unitree G1',
    'PPO',
    'Domain Randomization',
    'MoveIt 2',
    'Gazebo Harmonic',
    'Robotic Manipulation',
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
