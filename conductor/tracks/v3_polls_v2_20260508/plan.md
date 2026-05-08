# 🗺️ Implementation Plan: Polls v2

## Phase 1: Visual Enrichment
- [ ] Task: Define Color Palettes for 6 Options
    - [ ] Update CSS with `--poll-col-1` to `--poll-col-6`
- [ ] Task: Implement Glass-Liquid Animation
    - [ ] Create a reusable CSS animation for the bar "cap"
- [ ] Task: Conductor - User Manual Verification 'Visual Enrichment'

## Phase 2: Interaction & Ceremony
- [ ] Task: Bounce & Particle Feedback
    - [ ] Add `poll-impact` animation class on vote change
- [ ] Task: The "Grand Reveal" Logic
    - [ ] Update `features.poll.checkWinner()` to apply grayscale to others and enhanced glow to winner
    - [ ] Customize `ui.confetti()` to accept color arrays
- [ ] Task: Conductor - User Manual Verification 'Interaction & Ceremony'
