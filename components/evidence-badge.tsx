export type EvidenceClass = 'live' | 'offline' | 'analytic' | 'open' | 'none'

const classStyle: Record<EvidenceClass, string> = {
  live: 'evidence-live',
  offline: 'evidence-offline',
  analytic: 'evidence-analytic',
  open: 'evidence-open',
  none: 'evidence-none',
}

const defaultLabel: Record<EvidenceClass, string> = {
  live: 'Live verified',
  offline: 'Offline verified',
  analytic: 'Analytically verified',
  open: 'Not qualified',
  none: 'Not achieved',
}

interface EvidenceBadgeProps {
  evidence: EvidenceClass
  label?: string
  className?: string
}

/**
 * A single visual language for the evidence tier behind a result.
 * `live` means the simulator ran and the behaviour occurred; `offline` means a
 * controller or plant rollout with no simulator instance and no commanded torque.
 */
export function EvidenceBadge({ evidence, label, className }: EvidenceBadgeProps) {
  return (
    <span
      className={`w-fit rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.13em] ${classStyle[evidence]} ${className ?? ''}`}
    >
      {label ?? defaultLabel[evidence]}
    </span>
  )
}
