# 🗺️ Implementation Plan: Ink Overlay v2

## Phase 1: Mathematics & Curves
- [ ] Task: Implement Quadratic Bézier Smoothing
    - [ ] Update `features.ink.draw()` to store last 3 points and use `quadraticCurveTo`
- [ ] Task: Ink Performance Check
    - [ ] Ensure low latency synchronization via `BroadcastChannel`
- [ ] Task: Conductor - User Manual Verification 'Mathematics & Curves'

## Phase 2: Materiality & Modes
- [ ] Task: Neon Glow & Shadow Logic
    - [ ] Update `features.ink.setColor()` to apply `shadowBlur` if in dark theme
- [ ] Task: Highlighter Tool Implementation
    - [ ] Add `opacity` and `lineWidth` toggle for Highlighter mode
- [ ] Task: Conductor - User Manual Verification 'Materiality & Modes'
