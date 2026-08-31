'use client'

import { Braces, Check, GitBranch, Gauge } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const codeLines = [
  'for seed in candidate_seeds:',
  '    q = solve_ik(pregrasp_pose, seed)',
  '    if valid(q) and fk_matches_target(q):',
  '        candidates.add(q)',
  'return select_deterministic_candidate(candidates)',
]

export function EngineeringDeepDives() {
  return (
    <section id="deep-dives" className="mx-auto flex max-w-7xl scroll-mt-20 flex-col gap-12 px-5 py-20 md:px-8 md:py-24">
      <div className="flex max-w-3xl flex-col gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">04 / Engineering deep dives</p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">Engineering decisions behind repeatable manipulation.</h2>
      </div>

      <Tabs defaultValue="pregrasp" className="gap-6">
        <TabsList variant="line" className="tab-strip h-auto w-full justify-start gap-6 overflow-x-auto overflow-y-hidden border-b pb-2">
          <TabsTrigger value="pregrasp" className="flex-none px-0 py-3">Deterministic Pregrasp</TabsTrigger>
          <TabsTrigger value="validation" className="flex-none px-0 py-3">Evidence-Based Validation</TabsTrigger>
        </TabsList>

        <TabsContent value="pregrasp">
          <div className="grid gap-4 lg:grid-cols-[.8fr_1.2fr]">
            <Card className="rounded-xl">
              <CardHeader>
                <Braces className="mb-5 size-6 text-primary" />
                <CardTitle className="text-2xl">A valid IK solution is not necessarily a repeatable one.</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-5">
                <p className="leading-relaxed text-muted-foreground">
                  The robot can reach the same Cartesian target through multiple joint configurations. The manipulation pipeline evaluates several seeded IK candidates and selects a deterministic pregrasp configuration before executing the Cartesian descent.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Multi-seed IK</Badge>
                  <Badge variant="secondary">FK validation</Badge>
                  <Badge variant="secondary">Joint bounds</Badge>
                  <Badge variant="secondary">Deterministic selection</Badge>
                </div>
              </CardContent>
            </Card>

            <div className="glass-panel top-highlight relative overflow-hidden rounded-xl">
              <div className="flex items-center justify-between border-b px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                <span>Conceptual Selection Pipeline</span>
                <GitBranch className="size-4" />
              </div>
              <div className="border-b px-5 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-primary">Pseudocode — not source</div>
              <div className="flex flex-col gap-3 overflow-x-auto p-5 font-mono text-xs leading-relaxed md:p-8 md:text-sm">
                {codeLines.map((line, index) => (
                  <div key={line} className="flex min-w-max gap-4">
                    <span className="select-none text-muted-foreground">{String(index + 1).padStart(2, '0')}</span>
                    <code className={index === codeLines.length - 1 ? 'text-primary' : 'text-foreground'}>{line}</code>
                  </div>
                ))}
              </div>
              <div className="border-t p-4 text-xs leading-relaxed text-muted-foreground">
                Multiple feasible branches are evaluated before motion execution instead of accepting an arbitrary first IK solution.
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="validation">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="flex size-7 items-center justify-center rounded-full border font-mono text-xs">01</span>
                  Command completion is only one signal.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  Planning and controller success do not by themselves show whether the object remained stable throughout the manipulation sequence.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-xl border-primary/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check className="size-4" /></span>
                  Measure the resulting behavior.
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-5">
                <p className="leading-relaxed text-muted-foreground">
                  The validation tooling records robot execution and object state so perception accuracy, grasp behavior, lift/transport motion, and placement can be checked quantitatively.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Object Pose', 'Gripper State', 'Lift Motion', 'Transport Motion', 'Placement Error'].map((label) => (
                    <Badge key={label} variant="secondary">{label}</Badge>
                  ))}
                </div>
                <div className="flex items-center gap-3 border-l-2 border-primary pl-4 font-mono text-xs text-primary">
                  <Gauge className="size-4" />Measured Gazebo evidence
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
