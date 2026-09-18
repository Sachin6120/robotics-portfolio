import Link from 'next/link'
import { Code2 } from 'lucide-react'

interface ProjectNavLink {
  label: string
  href: string
  className?: string
}

interface ProjectNavProps {
  links: ProjectNavLink[]
  githubHref: string
}

export function ProjectNav({ links, githubHref }: ProjectNavProps) {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Primary navigation">
        <Link href="/" className="font-mono text-xs font-semibold uppercase tracking-[0.16em] hover:text-primary">
          Sachin Kumar Pal // Robotics
        </Link>
        <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground md:gap-5">
          <Link href="/" className="hidden hover:text-foreground sm:inline">Portfolio</Link>
          {links.map((link) => (
            <a key={link.href} href={link.href} className={`hidden hover:text-foreground ${link.className ?? ''}`}>
              {link.label}
            </a>
          ))}
          <a href={githubHref} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foreground">
            <Code2 className="size-4" />GitHub
          </a>
        </div>
      </nav>
    </header>
  )
}
