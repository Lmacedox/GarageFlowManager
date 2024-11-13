import * as React from 'react'

import { cn } from '@/lib/utils'

interface ErrorMessage {
  message?: string
}

interface DynamicErrors {
  [key: string]: ErrorMessage
}

interface IInputErrorMessage<T> extends React.HTMLAttributes<HTMLSpanElement> {
  errors: T
  inputName: string
}

const InputErrorMessage = React.forwardRef<
  HTMLInputElement,
  IInputErrorMessage<DynamicErrors>
>(({ className, errors, inputName, ...props }, ref) => {
  const errorMessage = errors[inputName]?.message
  const dadip = errors[inputName]
  console.log('@Dadip', dadip)

  console.log('@errorMessage', errorMessage)

  return (
    errorMessage && (
      <span
        className={cn('text-xs text-red-400', className)}
        ref={ref}
        {...props}
      >
        {errorMessage}
      </span>
    )
  )
})
InputErrorMessage.displayName = 'Input'

export { InputErrorMessage }
