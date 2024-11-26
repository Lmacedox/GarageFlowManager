import { signInForm } from '@/app/signin/signIn.type'

export class SignInHttpRequests {
  async SignInService(userData: signInForm) {
    console.log('@UserData', userData)
  }
}
