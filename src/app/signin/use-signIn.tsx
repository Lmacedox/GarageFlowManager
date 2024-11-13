import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import * as z from 'zod'

export const signInSchema = z.object({
  userName: z.string().min(1, 'Campo obrigatório'),
  password: z.string().min(1, 'Campo obrigatório'),
})

type signInForm = z.infer<typeof signInSchema>

export const useSignIn = () => {
  const form = useForm<signInForm>({
    resolver: zodResolver(signInSchema),
    resetOptions: {
      keepTouched: true,
      keepIsValidating: true,
    },
  })

  const onSubmit = form.handleSubmit(async ({ userName, password }) => {
    console.log('@SignIn', {
      userName,
      password,
    })
  })

  return {
    form,
    onSubmit,
  }
}
