# 🗺️ Implementation Plan: Dual Screen v2

## Phase 1: Signal & Enquadramento
- [ ] Task: Connection Heartbeat
    - [ ] Implement ping/pong between windows via `BroadcastChannel`
- [ ] Task: Safe Area UI
    - [ ] Create a `.safe-area-outline` visible only to the trainer
- [ ] Task: Conductor - User Manual Verification 'Signal & Enquadramento'

## Phase 2: Narrative Control
- [ ] Task: Laser Pointer Overlay
    - [ ] Sync mouse coordinates and render a glow div on the projector
- [ ] Task: Stage & Push Implementation
    - [ ] Add a `state.staging` buffer and only broadcast on click
- [ ] Task: Conductor - User Manual Verification 'Narrative Control'
