import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Perception-Guided UR5e Simulation | Sachin Kumar Pal',
  description:
    'Simulation-only UR5e manipulation case study using ROS 2 Jazzy, RGB-D XYZ and axial-yaw estimation, TF2, MoveIt 2, PlanningScene, ros2_control, and Gazebo Harmonic.',
  applicationName: 'Sachin Kumar Pal Robotics Portfolio',
  authors: [{ name: 'Sachin Kumar Pal' }],
  creator: 'Sachin Kumar Pal',
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
