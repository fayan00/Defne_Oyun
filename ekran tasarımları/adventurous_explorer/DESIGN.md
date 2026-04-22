---
name: Adventurous Explorer
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#3e484e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#6e797f'
  outline-variant: '#bdc8cf'
  surface-tint: '#006686'
  primary: '#006686'
  on-primary: '#ffffff'
  primary-container: '#4cb9e7'
  on-primary-container: '#00475e'
  inverse-primary: '#70d2ff'
  secondary: '#705d00'
  on-secondary: '#ffffff'
  secondary-container: '#fdd73b'
  on-secondary-container: '#715d00'
  tertiary: '#006c46'
  on-tertiary: '#ffffff'
  tertiary-container: '#36c487'
  on-tertiary-container: '#004b2f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c0e8ff'
  primary-fixed-dim: '#70d2ff'
  on-primary-fixed: '#001e2b'
  on-primary-fixed-variant: '#004d66'
  secondary-fixed: '#ffe173'
  secondary-fixed-dim: '#e8c426'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#554500'
  tertiary-fixed: '#75fbb9'
  tertiary-fixed-dim: '#56de9f'
  on-tertiary-fixed: '#002112'
  on-tertiary-fixed-variant: '#005234'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-xl:
    fontFamily: Lexend
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Lexend
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Lexend
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Lexend
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  label-bold:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: 0.02em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-margin: 24px
  gutter: 16px
  element-gap-sm: 8px
  element-gap-md: 16px
  element-gap-lg: 32px
---

## Brand & Style

The design system is built to evoke a sense of wonder, safety, and accomplishment for 7-to-8-year-olds. The brand personality is that of a supportive "learning companion"—always encouraging, never punishing. The visual style leans into a **Tactile / Skeuomorphic** hybrid, often referred to as "soft-UI," where elements look like physical objects children want to touch, press, and move. 

By utilizing thick strokes, bouncy animations, and "squishy" interaction states, the design system transforms digital learning into a toy-like experience. The emotional goal is to reduce the friction of learning by making every interaction feel like play.

## Colors

The palette uses a "Pastel-Plus" approach. The base environment uses soft, soothing pastels to prevent cognitive overload, while interactive elements use high-saturation "Action Accents."

- **Primary (Sky Blue):** Used for main navigation and core progress indicators. It represents the "limitless sky" of the adventure.
- **Secondary (Sunny Yellow):** Reserved for "Eureka!" moments, buttons that advance the game, and rewards.
- **Tertiary (Mint Green):** Used for "Correct" states, growth tracking, and health bars.
- **Supportive Accents:** A soft coral (#FF8E8E) is used sparingly for critical feedback to ensure it feels like a gentle nudge rather than a harsh error.
- **Neutrals:** Backgrounds are off-white or very light cream to reduce eye strain and provide a warm, paper-like feel.

## Typography

This design system utilizes **Lexend** exclusively. Designed specifically to improve reading proficiency, Lexend’s expanded character spacing and rounded glyphs make it the perfect choice for 2nd-grade readers.

- **Headlines:** Use Bold weights to create a clear hierarchy. Headlines should always be in sentence case to appear more friendly and less "academic."
- **Body Text:** Use Regular weight with generous line height (1.5x minimum) to ensure young readers don't lose their place.
- **Readability:** Avoid all-caps for instructional text, as the varying heights of lowercase letters (ascenders and descenders) help children recognize word shapes.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** with oversized touch targets. Given the developing motor skills of 2nd graders, the design system prioritizes a "Thumb-Friendly" layout.

- **Safe Zones:** Maintain a 24px margin around all screen edges to account for various device bezels and small hands gripping the tablet.
- **Rhythm:** Use an 8px base unit. Component heights should typically be 56px or 64px to ensure they are easy to tap.
- **Negative Space:** Use white space aggressively to isolate tasks. Only one primary question or action should occupy the visual focus at any time.

## Elevation & Depth

Hierarchy is conveyed through **Tactile Depth**. Instead of realistic lighting, we use "Playful Shadows" that make elements look like stickers or plastic tiles.

- **Button Shadows:** Interactive elements feature a solid, non-blurred bottom shadow (4px to 6px offset) in a darker shade of the element's base color. When pressed, the element moves down on the Y-axis and the shadow disappears, simulating a physical "click."
- **Card Depth:** Content containers use soft, colored ambient shadows (e.g., a faint blue shadow for a blue card) with a 15% opacity to make them lift off the background without looking "heavy."
- **Layering:** Background elements are flat, while interactive elements are always elevated.

## Shapes

The shape language is defined by the absence of sharp corners. Everything in this design system is "bumping-safe."

- **Primary Radius:** Components use a minimum of 16px (rounded-lg) for standard containers.
- **Buttons & Chips:** These are always **Pill-shaped** (fully rounded) to maximize the "toy" aesthetic.
- **Icons:** Use thick paths (2px or 3px) with rounded caps and joins. Avoid thin, spindly lines.
- **Sticker Effect:** Important visuals or rewards should have a thick white border (4px) to make them look like physical stickers.

## Components

### Buttons
Buttons are the primary interaction point. They must feature a "3D Press" effect. The secondary (yellow) button is used for the "Next" or "Go" action, while the primary (blue) is used for standard choices.

### Cards & Containers
Cards should have a thick, 2px border in a slightly darker shade than the background of the card itself. This defines the boundary clearly for children.

### Progress Bars
Progress bars should be chunky (at least 24px high) and use the "Mint Green" tertiary color. Add a "sparkle" or "star" icon at the end of the bar to signify the goal.

### Feedback Toasts
When a child answers correctly, use a full-screen, low-opacity overlay with "Confetti" particles. For incorrect answers, the component should "shake" horizontally (a physical "no" gesture) rather than displaying a red "X."

### Character Avatars
All instructional text should be paired with a small character icon or "Learning Buddy" to make the interface feel inhabited and encouraging.