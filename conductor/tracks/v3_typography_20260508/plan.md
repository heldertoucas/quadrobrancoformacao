# 🗺️ Implementation Plan: Typography v3.0

## Phase 1: Infrastructure & Optical Scaling
- [ ] Task: Integrate **Playfair Display** Google Font.
    - [ ] Update `index.html` head with new font family and weights.
- [ ] Task: Implement Dynamic Optical Scaling Engine.
    - [ ] Create `ui.updateOpticalScaling(charCount)` to calculate CSS custom properties.
    - [ ] Map character count to `--optical-weight` and `--optical-spacing`.
- [ ] Task: Update Display Logic for Variable Line-Height.
    - [ ] Refactor `ui.updateDisplay` to apply dynamic line-height based on text volume.
- [ ] Task: Conductor - User Manual Verification 'Infrastructure & Optical Scaling'

## Phase 2: Editorial Modes & UI Integration
- [ ] Task: Implement **Serif Mode** (Citations).
    - [ ] Define `.serif-mode` CSS class and apply Playfair Display styling.
- [ ] Task: Implement **Word-by-word Animation** Engine.
    - [ ] Create `ui.animateTextIn()` using CSS transitions/keyframes and staggered delays.
- [ ] Task: UI Submenu Refinement.
    - [ ] Add "Serif" and "Animate" toggle buttons to the `#rich-toolbar`.
    - [ ] Implement active state feedback for these buttons.
- [ ] Task: Conductor - User Manual Verification 'Editorial Modes & UI'
