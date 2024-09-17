import { Typography } from '@/components/typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { useNavigate } from 'react-router-dom';

export function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="w-full text-center">
      <Typography.H2>Acessar Painel</Typography.H2>
      <Typography.P className="text-muted-foreground">
        Acompanhe o fluxo da sua garagem!
      </Typography.P>

      <div className="mt-11 flex flex-col gap-2">
        <Input placeholder="Usuário" />
        <Input type="password" placeholder="Senha" />

        <Button
          className="mt-1 w-full"
          type="button"
          onClick={() => {
            navigate('/');
          }}
        >
          Entrar
        </Button>
      </div>
    </div>
  );
}
