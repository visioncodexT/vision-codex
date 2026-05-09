import { motion } from 'motion/react';

/* ─────────────────────────────────────────────
   Reusable Motion Components for scroll reveals
   ───────────────────────────────────────────── */

// Viewport config shared across all components
const viewport = { once: true, margin: '-60px' };

/**
 * FadeUp — Fades in and slides up on scroll
 */
export const FadeUp = ({ children, delay = 0, duration = 0.6, className = '', ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={viewport}
    transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

/**
 * FadeIn — Simple opacity fade on scroll
 */
export const FadeIn = ({ children, delay = 0, duration = 0.6, className = '', ...props }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={viewport}
    transition={{ duration, delay, ease: 'easeOut' }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

/**
 * ScaleIn — Scales up from slightly smaller
 */
export const ScaleIn = ({ children, delay = 0, duration = 0.5, className = '', ...props }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.92 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={viewport}
    transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

/**
 * SlideIn — Slides in from left or right
 */
export const SlideIn = ({ children, from = 'left', delay = 0, duration = 0.6, className = '', ...props }) => (
  <motion.div
    initial={{ opacity: 0, x: from === 'left' ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={viewport}
    transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

/**
 * StaggerContainer — Container for staggered children
 */
export const StaggerContainer = ({ children, stagger = 0.08, delay = 0, className = '', ...props }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: stagger,
          delayChildren: delay,
        },
      },
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

/**
 * StaggerItem — Child of StaggerContainer
 */
export const StaggerItem = ({ children, className = '', ...props }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
      },
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

/**
 * HoverLift — Adds a subtle lift + shadow on hover
 */
export const HoverLift = ({ children, className = '', scale = 1.03, ...props }) => (
  <motion.div
    whileHover={{ y: -6, scale, transition: { duration: 0.3, ease: 'easeOut' } }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

// Re-export motion for inline use
export { motion };
