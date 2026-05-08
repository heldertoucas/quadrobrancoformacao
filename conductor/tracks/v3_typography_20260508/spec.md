# ✍️ Specification: Typography & Dynamic Scaling v3.0

## Overview
Elevate the typography of the "Quadro Branco" to an editorial standard, ensuring that text is not only legible but also aesthetically pleasing across all scales and contexts.

## Functional Requirements
- **Optical Weight Adjustment:** Implement a JS logic that dynamically reduces `font-weight` (e.g., 900 to 600) and increases `letter-spacing` as the `font-size` decreases (handling long texts).
- **Variable Line-Height:** Adapt `line-height` dynamically between 1.1 (short titles) and 1.5 (long paragraphs) based on content length.
- **Serif Font Support:** Introduce a class or mode for "Citations" using a classic serif font (e.g., Playfair Display or EB Garamond) to change the "mood" of the screen.
- **Cinematic Text Entry:** Implement an optional sequential entry animation (character-by-character or word-by-word fade/slide) for key messages.

## Acceptance Criteria
- [ ] Text weight and spacing adjust correctly when long text is entered.
- [ ] Line-height remains comfortable for multi-line content.
- [ ] Switching to "Serif Mode" correctly applies the new font family and styling.
- [ ] Animations run smoothly at 60fps.
