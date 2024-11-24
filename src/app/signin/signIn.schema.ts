import { z } from 'zod'

export const signInSchema = z.object({
  userName: z.string().min(1, 'Campo obrigatório'),
  password: z.string().min(1, 'Campo obrigatório'),
})
