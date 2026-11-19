# Sachin Kumar Pal — Robotics Engineering Portfolio

A Next.js portfolio showcasing **simulation-validated robotics engineering case studies** across humanoid whole-body control, robot manipulation, predictive navigation and reinforcement learning.

**Live website:** https://robotics-portfolio-i4bp9wgvt-sachincena1206-1777.vercel.app
**GitHub profile:** https://github.com/Sachin6120

## Featured projects

| Project | Engineering focus | Evidence and scope |
| --- | --- | --- |
| [Unitree G1 — Contact-Aware Whole-Body Control](https://github.com/Sachin6120/g1-contact-aware-whole-body-control) | Hierarchical QP, torque-continuous controller handoff, contact transition | Live handoff command step 0.8000 N·m (limit 1.0); 33/33 contact-reload cases **offline**. No qualified live reload or hardware execution. |
| [UR5e — Perception-Guided Pick & Place](https://github.com/Sachin6120/ur5e-robotiq-pickplace) | RGB-D perception, TF2, MoveIt 2, PlanningScene, ros2_control | Four simulation pose cases passed; worst reported perception error 1.613 mm. |
| [Predictive Dynamic-Obstacle Navigation](https://github.com/Sachin6120/predictive-dynamic-obstacle-navigation) | Kalman obstacle tracking, Nav2 MPPI, predictive costmap | Repository reports 448 simulated trials across 46 condition groups. |
| [Unitree G1 — Robust PPO Locomotion](https://github.com/Sachin6120/isaaclab-g1-robust-locomotion) | Isaac Lab, RSL-RL PPO, disturbance robustness | At held-out 1.5 m/s push, baseline fall rate 39.84% versus domain-randomized policy 13.28%, in simulation. |

Additional published work includes a [Franka Panda PPO pick-and-lift task](https://github.com/Sachin6120/franka-pick-lift-ppo-isaaclab) and mechanism design projects.

## Validation and scientific integrity

Project results are reported within their actual evidence scope. **LIVE VERIFIED** means observed in an executing simulator with measured telemetry; **OFFLINE VERIFIED** is a controller or plant replay without live simulation execution. Analytical results and failed acceptance criteria are distinguished where applicable. No project on this website claims physical-hardware validation.

In particular, the G1 controller case study is an **evidence-backed showcase**, not a fully public reproduction package: controller implementation, trained policy parameters and full raw telemetry are not included in the public repository. See its [evidence inventory](https://github.com/Sachin6120/g1-contact-aware-whole-body-control/blob/main/evidence/EVIDENCE_INVENTORY.md) and [limitations](https://github.com/Sachin6120/g1-contact-aware-whole-body-control/blob/main/docs/limitations.md).

## Website stack

Next.js · TypeScript · React · Tailwind CSS · Vercel Analytics. Project technologies include ROS 2 Jazzy, NVIDIA Isaac Sim / Isaac Lab, Gazebo Harmonic, MoveIt 2, Nav2, PyTorch, Pinocchio, C++ and Python.

## Run the website locally

```bash
npm install
npm run dev
```

For a production build check:

```bash
npm run build
npm start
```

## Deployment

The `main` branch is connected to Vercel. Pushing updates to `main` triggers an automatic deployment, subject to Vercel build checks. No manual CLI deployment is needed for normal changes.

## Before applying

- Verify that project media and links open correctly on mobile and desktop.
- Link a current CV once the PDF is added to `public/`.
- Keep quantitative claims synchronized with their evidence repositories.
- Test Contact and Copy Email from different browsers.

## Contact

**Sachin Kumar Pal** — M.Sc. Mechatronics & Cyber-Physical Systems, Deggendorf Institute of Technology.
Email: sachinkpal612@gmail.com
