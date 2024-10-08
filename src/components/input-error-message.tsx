import * as React from 'react';

import { cn } from '@/lib/utils';

interface IInputErrorMessage<T> extends React.HTMLAttributes<HTMLSpanElement> {
  errors: T;
  inputName: string;
}

const InputErrorMessage = React.forwardRef<
  HTMLInputElement,
  IInputErrorMessage<any>
>(({ className, errors, inputName, ...props }, ref) => {
  const errorMessage = errors[inputName]?.message;

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
  );
});
InputErrorMessage.displayName = 'Input';

export { InputErrorMessage };
