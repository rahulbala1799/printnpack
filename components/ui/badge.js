import { cn } from '../../lib/cn';

const variants = {
  default: 'border-transparent bg-violet-600 text-white',
  secondary: 'border-transparent bg-stone-100 text-stone-700',
  outline: 'border-stone-200 text-stone-700',
};

export function Badge({ className, variant = 'default', ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
