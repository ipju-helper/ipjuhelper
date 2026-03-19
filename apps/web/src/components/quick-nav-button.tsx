'use client';

import * as React from 'react';
import { cn } from '@workspace/ui/lib/utils';

interface QuickNavButtonProps {
  icon: React.ReactNode;
  label: string;
  direction?: 'vertical' | 'horizontal';
  onClick?: () => void;
  className?: string;
}

const QuickNavButton = React.forwardRef<HTMLButtonElement, QuickNavButtonProps>(
  ({ icon, label, direction = 'vertical', onClick, className }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={cn(
          'flex items-center justify-center rounded-2xl transition-colors hover:bg-[#1D5DD8]',
          direction === 'vertical' ? 'flex-col gap-1 px-7 py-3' : 'h-20 flex-row gap-4 px-[28.5px]',
          className,
        )}
      >
        <span
          className={cn(
            'flex items-center justify-center rounded-lg bg-white',
            direction === 'vertical' ? 'h-7 w-7' : 'h-8 w-8',
          )}
        >
          {icon}
        </span>
        <span
          className={cn(
            'text-white',
            direction === 'vertical'
              ? 'text-sm leading-5 font-medium tracking-[0.2px]'
              : 'text-[19px] font-semibold',
          )}
        >
          {label}
        </span>
      </button>
    );
  },
);
QuickNavButton.displayName = 'QuickNavButton';

export { QuickNavButton };
export type { QuickNavButtonProps };
