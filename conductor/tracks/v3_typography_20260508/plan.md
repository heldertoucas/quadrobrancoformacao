# 🗺️ Implementation Plan: Typography v3.0

## Phase 1: Dynamic Optical Scaling
- [ ] Task: Implement `ui.updateOpticalScaling()`
    - [ ] Calculate `weight` and `letter-spacing` based on `scale-factor`
    - [ ] Update `h1` style dynamically
- [ ] Task: Variable Line-Height Logic
    - [ ] Map content length to a `line-height` variable
- [ ] Task: Conductor - User Manual Verification 'Dynamic Optical Scaling'

## Phase 2: Serif & Cinematic Entry
- [ ] Task: Integrate Serif Google Fonts
    - [ ] Add Playfair Display/EB Garamond to HTML head
    - [ ] Create `.serif-mode` CSS class
- [ ] Task: Character Animation Engine
    - [ ] Implement `ui.animateTextIn()` using `span` wrapping or CSS keyframes
- [ ] Task: Conductor - User Manual Verification 'Serif & Cinematic Entry'
