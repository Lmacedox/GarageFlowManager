import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { signInForm } from './signIn.type'
import { signInSchema } from './signIn.schema'
import { SignInProps } from './signIn.view'

export function useSignIn({ SignInProps }: SignInProps) {
  const form = useForm<signInForm>({
    resolver: zodResolver(signInSchema),
    resetOptions: {
      keepTouched: true,
      keepIsValidating: true,
    },
  })

  const { mutateAsync: SignInFn, isPending } = useMutation({
    mutationFn: SignInProps.handleSignIn,
    onSuccess: ({ ...data }) => {
      console.log('@Data', data)
      console.log('@Sucess')
    },
    onError: ({}) => {
      console.log('@Error')
    },
  })

  const onSubmit = form.handleSubmit(async ({ userName, password }) => {
    console.log('@User', { userName, password })
    await SignInFn({ userName, password })
  })

  return {
    onSubmit,
    isPending,

    form,
  }
}
