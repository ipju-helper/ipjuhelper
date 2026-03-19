'use client';

import * as React from 'react';
import { cn } from '@workspace/ui/lib/utils';

type CheckVariant = 'circle' | 'plain';

interface CheckButtonProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  variant?: CheckVariant;
  onChange?: (checked: boolean) => void;
  className?: string;
}

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 12.5L10 16.5L18 8.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function getIconColor(variant: CheckVariant, checked: boolean, disabled: boolean) {
  if (variant === 'circle') return '#FFFFFF';
  if (disabled) return '#E4E7EB';
  if (checked) return '#1F6FEB';
  return '#9AA5B1';
}

function getCircleBg(checked: boolean, disabled: boolean) {
  if (disabled) return '#E4E7EB';
  if (checked) return '#1F6FEB';
  return '#9AA5B1';
}

const CheckButton = React.forwardRef<HTMLButtonElement, CheckButtonProps>(
  ({ checked = false, disabled = false, label, variant = 'circle', onChange, className }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        role="checkbox"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={cn('inline-flex items-center gap-0 disabled:pointer-events-none', className)}
      >
        <span className="flex h-10 w-10 items-center justify-center">
          {variant === 'circle' ? (
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full"
              style={{ backgroundColor: getCircleBg(checked, disabled) }}
            >
              <CheckIcon color={getIconColor(variant, checked, disabled)} />
            </span>
          ) : (
            <CheckIcon color={getIconColor(variant, checked, disabled)} />
          )}
        </span>
        {label && (
          <span
            className={cn(
              variant === 'circle'
                ? 'typo-heading-h3 text-[#1E1E1E]'
                : 'typo-label-xl text-[#1F2933]',
            )}
          >
            {label}
          </span>
        )}
      </button>
    );
  },
);
CheckButton.displayName = 'CheckButton';

export { CheckButton };
export type { CheckButtonProps };
