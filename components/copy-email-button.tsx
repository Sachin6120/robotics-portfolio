'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

const EMAIL = 'sachinkpal612@gmail.com'

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setError(false)
      window.setTimeout(() => setCopied(false), 2500)
    } catch {
      setError(true)
    }
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-background/40 px-4 text-sm font-medium text-foreground transition-colors hover:bg-background/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      aria-label="Copy email address to clipboard"
      title={error ? `Copy manually: ${EMAIL}` : 'Copy email address'}
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      {copied ? 'Email copied' : error ? 'Copy unavailable' : 'Copy Email'}
    </button>
  )
}
