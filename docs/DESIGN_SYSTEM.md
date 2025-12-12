# Design System - Databricks WAF Assessment Tool

Modern, impactful, and robust design system built with cutting-edge UI/UX best practices.

## Overview

The Databricks WAF Assessment Tool features a premium design system that combines:
- **Glassmorphism effects** for modern aesthetics
- **Gradient backgrounds** for visual depth
- **Micro-interactions** for delightful user experience
- **Smooth animations** for professional polish
- **Accessibility-first** approach
- **Mobile-responsive** design

## Design Principles

### 1. **Modern & Impactful**
- Bold typography with gradient text effects
- Elevated cards with soft shadows
- Smooth transitions and animations
- Visual hierarchy through color and spacing

### 2. **Robust & Maintainable**
- CSS Custom Properties (variables) for easy theming
- Consistent spacing scale
- Reusable component patterns
- Clear naming conventions

### 3. **Accessible & Inclusive**
- WCAG AA compliant color contrasts
- Focus indicators for keyboard navigation
- Reduced motion support
- Screen reader friendly

### 4. **Performant**
- Hardware-accelerated animations
- Optimized CSS selectors
- Minimal repaints and reflows
- Progressive enhancement

## Color System

### Brand Colors

```css
--color-primary: #FF3621          /* Databricks Red */
--color-primary-gradient: linear-gradient(135deg, #FF3621 0%, #FF6B47 100%)

--color-secondary: #1C3E5A        /* Databricks Blue */
--color-secondary-gradient: linear-gradient(135deg, #1C3E5A 0%, #2A5F8F 100%)
```

### Neutral Colors

```css
--color-text: #1A1A1A
--color-text-light: #5A5A5A
--color-background: #FFFFFF
--color-background-light: #F8F9FA
--color-border: #DEE2E6
```

### Status Colors

```css
--color-success: #10B981          /* Green */
--color-warning: #F59E0B          /* Amber */
--color-error: #EF4444            /* Red */
--color-info: #3B82F6             /* Blue */
```

### Color Usage

- **Primary**: Main CTAs, active states, important highlights
- **Secondary**: Headers, secondary buttons, navigation
- **Success**: Confirmations, active badges
- **Warning**: Alerts, attention needed
- **Error**: Errors, destructive actions
- **Info**: Information, hints, tips

## Typography

### Font Stack

```css
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif
--font-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace
```

### Type Scale

| Name | Size | Usage |
|------|------|-------|
| xs | 12px | Small labels, captions |
| sm | 14px | Body text (small), meta info |
| base | 16px | Body text, inputs |
| lg | 18px | Emphasized text |
| xl | 20px | Subtitles, large body text |
| 2xl | 24px | Section headers |
| 3xl | 30px | Page subtitles |
| 4xl | 36px | Page titles |
| 5xl | 48px | Hero titles |

### Typography Guidelines

- **Headings**: Bold (700), tight letter-spacing (-0.02em)
- **Body**: Regular (400), comfortable line-height (1.7)
- **Labels**: Semi-bold (600), uppercase with tracking
- **Monospace**: Code snippets, technical data

## Spacing System

Consistent spacing scale based on 8px grid:

```css
--spacing-xs: 0.5rem    /* 8px */
--spacing-sm: 1rem      /* 16px */
--spacing-md: 1.5rem    /* 24px */
--spacing-lg: 2rem      /* 32px */
--spacing-xl: 3rem      /* 48px */
--spacing-2xl: 4rem     /* 64px */
--spacing-3xl: 6rem     /* 96px */
```

### Usage

- **xs**: Between related elements
- **sm**: Standard gap between components
- **md**: Comfortable spacing, form fields
- **lg**: Section spacing
- **xl**: Large section gaps
- **2xl**: Major section divisions
- **3xl**: Page-level spacing

## Border Radius

Soft, modern rounded corners:

```css
--radius-sm: 6px
--radius-md: 12px
--radius-lg: 16px
--radius-xl: 24px
--radius-full: 9999px  /* Pills, circles */
```

## Shadows

Layered shadow system for depth:

```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08)
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.12)
--shadow-xl: 0 20px 50px rgba(0, 0, 0, 0.15)
--shadow-glow: 0 0 20px rgba(255, 54, 33, 0.3)
--shadow-glow-lg: 0 0 40px rgba(255, 54, 33, 0.4)
```

### Usage

- **sm**: Subtle elevation (cards at rest)
- **md**: Medium elevation (buttons, modals)
- **lg**: High elevation (dropdowns, hover states)
- **xl**: Maximum elevation (prominent modals)
- **glow**: Accent glow (primary buttons, active states)

## Transitions

Smooth, natural motion:

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1)
```

### Easing Curve

Using Material Design's standard easing (`cubic-bezier(0.4, 0, 0.2, 1)`):
- Accelerates quickly
- Decelerates slowly
- Feels natural and responsive

## Components

### Header (Glassmorphism)

```css
background: rgba(255, 255, 255, 0.85)
backdrop-filter: blur(20px) saturate(180%)
```

**Features**:
- Semi-transparent background
- Blur effect for depth
- Gradient bottom border on hover
- Sticky positioning

### Cards

**Standard Card**:
```css
background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))
backdrop-filter: blur(10px)
border-radius: var(--radius-xl)
box-shadow: var(--shadow-lg)
```

**Hover State**:
```css
transform: translateY(-8px) scale(1.02)
box-shadow: var(--shadow-xl)
```

### Buttons

**Primary Button**:
- Gradient background
- Glow shadow
- Lift on hover
- Scale animation on click

**Icon Buttons**:
- Circular or rounded
- Tooltip on hover
- Color change with smooth transition

### Modals

**Features**:
- Backdrop blur
- Scale + translateY entrance animation
- Gradient header accent
- Smooth close animation

### Forms

**Input Fields**:
- Clear borders
- Focus state with glow
- Subtle lift on focus
- Validation states (success/error)

## Animations

### Page Transitions

```css
@keyframes pageEnter {
    from {
        opacity: 0;
        transform: translateY(30px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}
```

### Micro-interactions

1. **Button Hover**: Lift + shadow increase
2. **Card Hover**: Lift + border color change
3. **Logo**: Pulsing animation
4. **Nav Underline**: Scale from center
5. **Assessment Display**: Shimmer effect
6. **Badge**: Pulse animation

### Animation Guidelines

- Keep animations under 500ms
- Use GPU-accelerated properties (transform, opacity)
- Provide reduced motion support
- Add subtle delays for cascade effects

## Responsive Design

### Breakpoints

```css
@media (max-width: 1024px)  /* Tablet landscape */
@media (max-width: 768px)   /* Tablet portrait */
@media (max-width: 480px)   /* Mobile */
```

### Mobile-First Approach

1. Base styles for mobile
2. Enhance for larger screens
3. Grid layouts adapt automatically
4. Typography scales down
5. Touch targets minimum 44×44px

## Accessibility

### Focus Indicators

```css
*:focus-visible {
    outline: 3px solid var(--color-primary);
    outline-offset: 2px;
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

### Screen Readers

- `.visually-hidden` class for SR-only content
- Proper heading hierarchy
- ARIA labels where needed
- Semantic HTML structure

### Keyboard Navigation

- All interactive elements focusable
- Clear focus indicators
- Logical tab order
- Escape to close modals

## Z-Index Scale

Organized layering system:

```css
--z-dropdown: 1000
--z-sticky: 1020      /* Header */
--z-fixed: 1030
--z-modal-backdrop: 1040
--z-modal: 1050
--z-popover: 1060
--z-tooltip: 1070
```

## Best Practices

### Do's ✅

- Use CSS variables for consistency
- Leverage gradient backgrounds
- Add micro-interactions
- Maintain visual hierarchy
- Test on multiple devices
- Ensure accessibility
- Use semantic HTML
- Optimize for performance

### Don'ts ❌

- Don't use inline styles
- Don't skip accessibility features
- Don't use fixed pixel values (use rem/em)
- Don't animate width/height (use transform)
- Don't nest selectors too deeply
- Don't forget hover/focus states
- Don't ignore loading states
- Don't overcomplicate animations

## Testing Checklist

### Visual Testing
- [ ] All breakpoints (480px, 768px, 1024px, 1280px+)
- [ ] All browsers (Chrome, Firefox, Safari, Edge)
- [ ] Dark/light environments
- [ ] High contrast mode
- [ ] Print styles

### Interaction Testing
- [ ] All hover states
- [ ] All focus states
- [ ] All active states
- [ ] Keyboard navigation
- [ ] Screen reader
- [ ] Touch interactions

### Performance Testing
- [ ] Smooth 60fps animations
- [ ] Fast page transitions
- [ ] Optimized paint operations
- [ ] Minimal layout shifts
- [ ] Acceptable Lighthouse score

## Future Enhancements

### Planned Features
- [ ] Dark mode toggle
- [ ] Theme customization
- [ ] Additional color schemes
- [ ] More animation variants
- [ ] Advanced hover effects
- [ ] Particle backgrounds
- [ ] Scroll-triggered animations

### Under Consideration
- CSS Grid subgrid (when supported)
- Container queries (when supported)
- View transitions API
- CSS Houdini effects
- 3D transforms
- Advanced blend modes

## Resources

### Design Inspiration
- Material Design 3
- Tailwind CSS
- Stripe Design System
- Apple Human Interface Guidelines
- Microsoft Fluent Design

### Tools Used
- CSS Custom Properties
- Flexbox & CSS Grid
- Backdrop Filter
- CSS Transitions
- CSS Animations
- Media Queries
- CSS Gradients

### References
- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/)
- [CSS Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)

---

## Version History

### v0.3.2 (Current)
- Complete design system rewrite
- Glassmorphism effects
- Modern gradient backgrounds
- Enhanced animations
- Improved accessibility
- Premium component library

---

**Design System Version**: 1.0.0
**Last Updated**: 2024-12-08
**Maintained By**: Databricks Solution Architecture Team
