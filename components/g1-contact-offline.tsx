import { ArrowUpRight } from 'lucide-react'

import { EvidenceBadge } from '@/components/evidence-badge'

const metrics = [
  { value: '33 / 33', label: 'Landing cases qualified', detail: '11 perturbation families × 3 landing states' },
  { value: '72', label: 'Distinct rollouts', detail: '3 of 3 on every perturbation family' },
  { value: '0.930005 N·m', label: 'Worst per-node command step', detail: 'Limit ≤ 1.0 N·m, across every reload node' },
  { value: '+0.069995 N·m', label: 'Command-step headroom', detail: 'Required ≥ 0.05 N·m' },
]

const rows: [string, string, string][] = [
  ['Per-node command step, every reload node', '0.930005 N·m', '≤ 1.0 N·m'],
  ['Reload command-step headroom', '+0.069995 N·m', '≥ 0.05 N·m'],
  ['Landed-load tracking ratio', '0.944452', '≤ 0.9499469'],
  ['Landed centre-of-pressure margin, controller', '+25.952 mm', '≥ −1e−8 m'],
  ['Landed centre-of-pressure margin, independent plant', '+16.872 mm', '≥ 0'],
  ['Stance centre-of-pressure margin, independent plant', '+3.4505 mm', '≥ 0'],
  ['Landed normal force, plant', '3.29694 N', '> 0'],
  ['Friction-cone margin, plant', '+1.37584 N', '≥ 0'],
  ['Effort fraction of actuator limit', '0.33932', '≤ 0.50'],
  ['Useful-touchdown node', '{7, 9, 10}', '≤ 11'],
  ['Pre-touchdown trace preservation', '0 of 5,606,136 values differ', 'bitwise identical'],
]

const releaseBridge = [
  ['Stance CoP margin, controller / independent plant', '+1.830774 / +1.830721 mm'],
  ['Global command step', '0.800000 N·m'],
  ['Release-stage command step', '0.377831 N·m'],
  ['Contact-deletion command step', '0.036787 N·m'],
  ['Reverse recovery path', '3/3 plus 24/24 perturbation cells'],
]

export function G1ContactOffline() {
  return (
    <section id="offline" className="scroll-mt-20 border-y bg-background/20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 md:px-8 md:py-24">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            05 / Offline controller qualification
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            The contact-reload transition, qualified over 33 landing cases.
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Eleven perturbation families — unperturbed; landed ankle pitch ±0.05 and ±0.10 rad; swing hip roll
            ±0.05 rad/s; contact height ± a band; swing vertical velocity ±½ — across three landing states. All 33
            pass the complete offline chain with no failed conjunct. The allocation&apos;s own prediction error is at
            most 4.219e-04 N·m: the law lands where it aims.
          </p>
          <div className="glass-panel relative flex flex-col gap-2 rounded-xl border-primary/30 p-5">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Classification note</p>
              <EvidenceBadge evidence="offline" label="Offline verified · 33/33" />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="text-foreground">No Isaac instance ran, no torque was commanded, and no landing
              physically occurred.</span>{' '}
              A pass here is an offline feasibility result for the transition, not a demonstration of a landing. No
              live touchdown has ever occurred under the current architecture, and live torque eligibility at the
              reload transaction stands at FALSE by a standing decision in the project&apos;s frozen execution
              contract.
            </p>
          </div>
          <a
            href="https://github.com/Sachin6120/g1-contact-aware-whole-body-control/blob/main/evidence/EVIDENCE_INVENTORY.md"
            target="_blank"
            rel="noreferrer"
            className="w-fit font-mono text-xs uppercase tracking-[0.13em] text-primary hover:text-foreground"
          >
            Per-result evidence inventory <ArrowUpRight className="ml-1 inline size-3" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="glass-panel top-highlight relative flex min-h-44 flex-col justify-between gap-3 overflow-hidden rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-6"
            >
              <p className="metric-glow break-words text-balance text-lg font-semibold tracking-tight text-primary md:text-2xl">
                {metric.value}
              </p>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-foreground">{metric.label}</p>
                <p className="font-mono text-[10px] uppercase leading-relaxed tracking-wide text-muted-foreground">
                  {metric.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
          <div className="glass-panel top-highlight relative overflow-hidden rounded-xl">
            <div className="border-b px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground md:px-5">
              Contact reload — worst value over all 33 cases
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[32rem] border-collapse text-left">
                <thead>
                  <tr className="border-b bg-background/40 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    <th scope="col" className="px-4 py-2.5 font-medium md:px-5">
                      Quantity
                    </th>
                    <th scope="col" className="px-4 py-2.5 text-right font-medium md:px-5">
                      Worst over 33
                    </th>
                    <th scope="col" className="px-4 py-2.5 text-right font-medium md:px-5">
                      Acceptance limit
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {rows.map(([quantity, measured, limit]) => (
                    <tr key={quantity} className="align-top">
                      <th
                        scope="row"
                        className="px-4 py-3 text-xs font-normal leading-relaxed text-muted-foreground md:px-5"
                      >
                        {quantity}
                      </th>
                      <td className="px-4 py-3 text-right font-mono text-xs font-medium text-[var(--cyan)] md:px-5">
                        {measured}
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-xs text-muted-foreground md:px-5">
                        {limit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="glass-panel top-highlight relative overflow-hidden rounded-xl">
              <div className="border-b px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Release bridge and contact deletion — offline, 3 of 3
              </div>
              <dl className="divide-y divide-border/60">
                {releaseBridge.map(([label, value]) => (
                  <div key={label} className="flex flex-col gap-1 px-4 py-3">
                    <dt className="text-xs leading-relaxed text-muted-foreground">{label}</dt>
                    <dd className="font-mono text-xs font-medium text-[var(--cyan)]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Qualified offline from the measured live terminal unload states, then executed live 3 of 3. A
              provenance caveat applies to every offline result: the offline controller toolchain runs Pinocchio
              3.8.0 while the live side runs 4.1.0, so each offline result is produced under a different major
              version of the rigid-body library than any live-side computation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
