# 🗺️ Implementation Plan: Text Submenu Refinement

## Phase 1: Structural Reorganization
- [ ] Task: Move Buttons to Submenu
    - [ ] Locate "Citação" and "Animar" buttons in `index.html`.
    - [ ] Relocate them into the rich-text submenu container.
- [ ] Task: Conductor - User Manual Verification 'Structural Reorganization' (Protocol in workflow.md)

## Phase 2: Visual Feedback & Toggle Signaling
- [ ] Task: Implement Toggle CSS
    - [ ] Add CSS classes to provide a subtle border for active/toggled buttons in the submenu.
- [ ] Task: Apply Toggle Logic
    - [ ] Update JavaScript logic to correctly apply the active CSS class when buttons are toggled.
- [ ] Task: Conductor - User Manual Verification 'Visual Feedback' (Protocol in workflow.md)

## Phase 3: Alignment & Synchronization
- [ ] Task: Enforce Alignment on Elements
    - [ ] Ensure that CSS rules for lists (`<ul>`, `<ol>`) inherit the text alignment of their container.
- [ ] Task: Update Synchronization Payload
    - [ ] Modify the broadcast function to include the current text alignment state in the payload.
- [ ] Task: Apply Synchronized Alignment
    - [ ] Update the receiver logic to apply the broadcasted alignment to the main text display.
- [ ] Task: Conductor - User Manual Verification 'Alignment & Synchronization' (Protocol in workflow.md)