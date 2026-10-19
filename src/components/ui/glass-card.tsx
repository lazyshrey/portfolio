import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type MotionDivProps = React.ComponentProps<typeof motion.div>;

interface GlassCardProps extends Omit<MotionDivProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  glow?: boolean;
  hover?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      className,
      variant = 'primary',
      glow = false,
      hover = true,
      children,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary: 'bg-white/6 border border-white/10',
      secondary:
        'bg-gradient-to-br from-white/6 to-white/3 border border-white/8',
      tertiary: 'bg-black/6 border border-accent/12',
    };

    return (
      <motion.div
        ref={ref}
        // combine classes with utility helper
        className={cn(
          'relative rounded-2xl p-6 backdrop-blur-xl', // frosted base
          'transition-all duration-400 ease-out',
          // soft layered shadow; outer + subtle inset highlight
          'shadow-[0_10px_30px_rgba(2,6,23,0.5),inset_0_1px_0_rgba(255,255,255,0.03)]',
          // variant surfaces
          variants[variant],
          // hover/lift
          hover &&
            'hover:shadow-[0_18px_50px_rgba(2,6,23,0.55),inset_0_1px_0_rgba(255,255,255,0.04)] hover:translate-y-[-4px] hover:scale-[1.02] hover:border-white/20',
          // optional glow layer implemented via pseudo-element class (Tailwind plugin required) or fallback
          glow &&
            'before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-primary/30 before:to-secondary/30 before:opacity-40 before:blur-xl',
          className
        )}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        {...props}
      >
        {/* subtle white overlay highlight for translucent effect */}
        <div
          // explicit string ensures React's className is a string (no MotionValue)
          className={'absolute inset-0 rounded-2xl pointer-events-none'}
          // Keep the overlay subtle: use background with very low opacity
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
          }}
        />
        {typeof children === 'object' && (children as React.ReactNode)}
      </motion.div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

export { GlassCard };
