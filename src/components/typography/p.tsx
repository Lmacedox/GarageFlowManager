import { cn } from '@/lib/utils';

interface IPTypography extends React.HTMLAttributes<HTMLParagraphElement> {}

export function P({ className, children }: IPTypography) {
  return <p className={cn('leading-7 ', className)}>{children}</p>;
}
