# Sachin Kumar Pal — Robotics Portfolio

A Next.js case study for the public project **UR5e Perception-Guided Pick-and-Place**.

**Stack:** ROS 2 Jazzy · Gazebo Harmonic · MoveIt 2 · ros2_control · C++ · Python · OpenCV · TF2

Project repository: https://github.com/Sachin6120/ur5e-robotiq-pickplace

Stage-2 release: https://github.com/Sachin6120/ur5e-robotiq-pickplace/releases/tag/stage2-pose-generalization-pass

## Current project scope

This portfolio represents the published Stage-2 simulation baseline. RGB-D perception estimates object XYZ and axial yaw, TF2 transforms the perceived pose into the world frame, and deterministic pregrasp selection evaluates candidates returned by MoveIt's configured IK. MoveIt 2 provides collision-aware and Cartesian planning, while PlanningScene state explicitly manages grasp, attachment, pickup, payload transport, placement, detach, and retreat.

Gazebo ground truth is evaluation-only and never a planning input. Validation measures actual simulated object motion, contacts, grasp behavior, transport, and placement rather than treating controller completion as task success. This project does not claim hardware validation, production certification, or formal safety certification.

## Published Stage-2 baseline

| Case | XY offset | Axial yaw | Result |
|---|---:|---:|:---:|
| Scene-A | 0, 0 mm | 0° | PASS |
| D1 | +30, +30 mm | +30° | PASS |
| D2 | −30, −30 mm | −30° | PASS |
| D3 | +30, −30 mm | +45° | PASS |

- Worst validated perception position error: **1.613 mm**
- Cartesian descent fraction: **1.0000 in all four cases**
- D3 qualification placement error: **1.9793 mm**
- Package baseline: **105 tests, 0 failures, 0 errors, 0 skipped**

### D3 clearance correction

The historical 1.5 mm fixed-side clearance produced an approximately −0.0759 mm predicted margin; fixed-pad contact occurred and descent failed. Increasing the clearance to 2.0 mm produced an approximately +0.4241 mm predicted margin, zero pre-close pad contacts, and a complete D3 PASS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run build
npm start
```

Open `http://localhost:3000` again and verify the production build before deploying.

## Deploy to Vercel

1. Create a GitHub repository for this portfolio (for example, `robotics-portfolio`).
2. Push this folder to it.
3. In Vercel: **Add New → Project → Import Git Repository**.
4. Keep the framework preset as **Next.js**.
5. Deploy using the detected defaults.
6. Add the final Vercel URL to your CV, LinkedIn, and GitHub profile.


## Final pre-publish checklist

- Run `npm run build` successfully.
- Check the demo video and poster.
- Test `View GitHub`, email, and navigation links.
- Check desktop and mobile layouts (375 / 768 / 1024 / 1440 / 1920 px).
- Confirm no claims exceed what is supported by the public project repository.

## Recommended CV link label

**Robotics Portfolio — UR5e Perception-Driven Manipulation**

## Recommended CV project entry

**Perception-Guided UR5e Pick-and-Place Simulation | ROS 2, MoveIt 2, Gazebo, C++**

Implemented and integrated an RGB-D XYZ + axial-yaw perception-to-manipulation pipeline with TF2 world targeting, MoveIt-configured deterministic pregrasp selection, collision-aware planning, PlanningScene payload management, ros2_control execution, and quantitative simulation validation across four planar pose cases.
