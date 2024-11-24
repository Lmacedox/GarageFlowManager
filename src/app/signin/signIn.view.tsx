'use client'

import { Typography } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useSignIn } from './use-signIn'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { signInForm } from './signIn.type'

export type LoadSignIn = {
  handleSignIn: (user: signInForm) => Promise<signInForm>
}

export type SignInProps = {
  SignInProps: LoadSignIn
}

export default function SignInView({ SignInProps }: SignInProps) {
  const { onSubmit, form } = useSignIn({ SignInProps })

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='flex w-full max-w-96 flex-col items-center justify-center'>
        <div className='w-full text-center'>
          <Typography.H2>Acessar Painel</Typography.H2>
          <Typography.P className='text-muted-foreground'>
            Acompanhe o fluxo da sua garagem!
          </Typography.P>

          <Form {...form}>
            <form onSubmit={onSubmit} className='mt-11 flex flex-col gap-2'>
              <div className='space-y-5 text-left'>
                <FormField
                  control={form.control}
                  name='userName'
                  render={() => (
                    <FormItem>
                      <FormLabel>Usuário</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Usuário'
                          {...form.register('userName')}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className='space-y-5 text-left'>
                <FormField
                  control={form.control}
                  name='password'
                  render={() => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Senha'
                          {...form.register('password')}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                className='mt-1 w-full'
                disabled={false}
                data-cy='submit-button'
              >
                {/* {isPending ? <LoaderCircle className='animate-spin' /> : 'Entrar'} */}
                Entrar
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
