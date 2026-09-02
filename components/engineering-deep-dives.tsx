'use client'

import { Braces, Check, GitBranch, Gauge } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const codeLines = [
  'for seed_state in candidate_seeds:',
  '    solved = moveit_state.setFromIK(group, target, seed_state)',
  '    if solved and collision_free(moveit_state):',
  '        candidates.add(moveit_state.joint_values())',
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
          <TabsTrigger value="clearance" className="flex-none px-0 py-3">D3 Clearance Correction</TabsTrigger>
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
                  The robot can reach the same Cartesian target through multiple joint configurations. The pipeline requests several seeded candidates from MoveIt&apos;s configured IK solver, then selects a deterministic pregrasp before executing the Cartesian descent. This is candidate-selection logic around MoveIt IK, not a handwritten IK solver.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Configured MoveIt IK</Badge>
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
              <div className="border-b px-5 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-primary">Conceptual MoveIt API use — not source</div>
              <div className="flex flex-col gap-3 overflow-x-auto p-5 font-mono text-xs leading-relaxed md:p-8 md:text-sm">
                {codeLines.map((line, index) => (
                  <div key={line} className="flex min-w-max gap-4">
                    <span className="select-none text-muted-foreground">{String(index + 1).padStart(2, '0')}</span>
                    <code className={index === codeLines.length - 1 ? 'text-primary' : 'text-foreground'}>{line}</code>
                  </div>
                ))}
              </div>
              <div className="border-t p-4 text-xs leading-relaxed text-muted-foreground">
                Multiple feasible solutions from MoveIt&apos;s configured kinematics plugin are evaluated before motion execution instead of accepting an arbitrary first result.
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="clearance">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="flex size-7 items-center justify-center rounded-full border font-mono text-xs">01</span>
                  Historical D3 failure
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-5">
                <p className="leading-relaxed text-muted-foreground">
                  A 1.5 mm fixed-side clearance was smaller than D3&apos;s governing projection. The predicted margin was approximately −0.0759 mm, and fixed-pad contact occurred during the simulated Cartesian descent.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">1.5 mm clearance</Badge>
                  <Badge variant="secondary">≈ −0.0759 mm margin</Badge>
                  <Badge variant="secondary">Fixed-pad contact</Badge>
                  <Badge variant="secondary">Descent failed</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl border-primary/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check className="size-4" /></span>
                  Evidence-based correction
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-5">
                <p className="leading-relaxed text-muted-foreground">
                  Increasing fixed-side clearance to 2.0 mm changed the predicted margin to approximately +0.4241 mm. The corrected run recorded zero pre-close pad contacts, a 1.0000 descent fraction, and a complete D3 PASS.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">2.0 mm clearance</Badge>
                  <Badge variant="secondary">≈ +0.4241 mm margin</Badge>
                  <Badge variant="secondary">0 pre-close contacts</Badge>
                  <Badge variant="secondary">D3 PASS</Badge>
                </div>
              </CardContent>
            </Card>

            <div className="glass-panel top-highlight relative overflow-hidden rounded-xl p-5 text-sm leading-relaxed text-muted-foreground lg:col-span-2 md:p-6">
              The qualification run measured a D3 placement position error of <span className="font-mono text-primary">1.9793 mm</span>. The change was driven by the clearance model and verified contact evidence, not by controller status alone.
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
                  The validation tooling records robot execution and object state so perception accuracy, contacts, grasp behavior, lift/transport motion, and placement can be checked quantitatively. Scene-A and D1–D3 all pass; D3&apos;s qualification placement error is 1.9793 mm.
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
