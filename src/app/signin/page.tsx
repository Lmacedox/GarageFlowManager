'use client'

import SignInView from './signIn.view'

export default function SignIn() {
  return (
    <SignInView
      SignInProps={{
        handleSignIn: ({ ...user }) => {
          console.log('@User', user)

          return new Promise((resolve) => {
            // Simulando uma operação assíncrona
            setTimeout(() => {
              const form = {
                userName: 'exampleUser',
                password: 'examplePassword123',
              }

              // Resolva a Promise com o objeto signInForm
              resolve(form)
            }, 1000) // Simula um atraso de 1 segundo
          })
        },
      }}
    />
  )
}
