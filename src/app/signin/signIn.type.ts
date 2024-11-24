import { z } from 'zod'
import { signInSchema } from './signIn.schema'

export type signInForm = z.infer<typeof signInSchema>
