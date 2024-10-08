import { Typography } from '@/components/typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { InputErrorMessage } from '@/components/input-error-message';
import { useSignIn } from './use-signIn';
import { LoaderCircle } from 'lucide-react';

export function SignIn() {
  const { onSubmit, register, errors, isPending, sucess } = useSignIn();

  return (
    <div className="w-full text-center">
      <Typography.H2>Acessar Painel</Typography.H2>
      <Typography.P className="text-muted-foreground">
        Acompanhe o fluxo da sua garagem!
      </Typography.P>

      <form onSubmit={onSubmit} className="mt-11 flex flex-col gap-2">
        <div className="space-y-5 text-left">
          <Input placeholder="Nome do cliente" {...register('userName')} />
          <InputErrorMessage inputName={'userName'} errors={errors} />
        </div>

        <div className="space-y-5 text-left">
          <Input
            placeholder="Senha"
            type="password"
            {...register('password')}
          />
          <InputErrorMessage inputName={'password'} errors={errors} />
        </div>

        <Button className="mt-1 w-full" disabled={isPending}>
          {isPending ? <LoaderCircle className="animate-spin" /> : 'Entrar'}
        </Button>

        <h1>{sucess}</h1>
      </form>
    </div>
  );
}
