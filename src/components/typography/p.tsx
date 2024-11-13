import { cn } from '@/lib/utils'

type IPTypography = React.HTMLProps<HTMLParagraphElement>

export function P({ className, children, ...props }: IPTypography) {
  return (
    <p className={cn('leading-7', className)} {...props}>
      {children}
    </p>
  )
}
