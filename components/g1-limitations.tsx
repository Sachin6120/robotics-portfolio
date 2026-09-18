import { ShieldCheck } from 'lucide-react'

const limitations = [
  { title: 'Simulation only', text: 'All results are produced entirely in NVIDIA Isaac Lab. No hardware deployment or physical G1 was involved.' },
  { title: 'One checkpoint per condition', text: 'Baseline and DR each reflect a single trained PPO checkpoint, not an ensemble or a distribution over training runs.' },
  { title: 'Evaluation seeds, not training seeds', text: 'The 5 seeds used in the benchmark vary the evaluation rollout only. They are not 5 independently trained policies per condition.' },
  { title: 'Friction and push changed together', text: 'The DR policy differs from the baseline in both friction range and training-time push magnitude at once, so the two factors are not isolated from each other.' },
  { title: 'Friction-only benchmark near ceiling', text: 'The 7,680-episode friction robustness benchmark showed limited headroom for both policies, so its discriminative value is lower than the push benchmark\'s.' },
  { title: 'No real-world transfer', text: 'This is a sim-to-real-oriented robustness study. No claim is made about sim-to-real transfer or real-world performance.' },
  { title: 'No wheeled-biped locomotion', text: 'The G1 is evaluated as a standard bipedal humanoid. No wheeled-biped implementation or configuration is used or claimed.' },
]

export function G1Limitations() {
  return (
    <section id="limitations" className="scroll-mt-20 border-y bg-background/20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 md:px-8 md:py-24">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">07 / Scope &amp; limitations</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">What this benchmark does and does not show.</h2>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            Stating scope precisely is part of the methodology, not a disclaimer bolted on afterward. These are the boundaries the benchmark design and audit surfaced.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {limitations.map((item, index) => (
            <div key={item.title} className="glass-panel top-highlight relative flex gap-4 overflow-hidden rounded-xl p-5 md:p-6">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/30 font-mono text-[11px] text-primary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}
          <div className="glass-panel top-highlight relative flex items-start gap-3 overflow-hidden rounded-xl border-primary/30 p-5 md:p-6">
            <ShieldCheck className="mt-0.5 size-6 shrink-0 text-primary" strokeWidth={1.5} />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Why this matters:</span> the headline result is reported as one controlled comparison at one held-out disturbance level, audited for push timing, direction balance, and episode accounting — not as a general robustness guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
