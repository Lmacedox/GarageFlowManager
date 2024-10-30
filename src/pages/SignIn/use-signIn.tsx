import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { useToast } from '@/hooks/use-toast';
import { api } from '@/lib/axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';

export const signInSchema = z.object({
  userName: z.string().min(1, { message: 'Campo obrigatório' }),
  password: z.string().min(1, { message: 'Campo obrigatório' }),
});

type signInForm = z.infer<typeof signInSchema>;

export function useSignIn() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [hasError, sethasError] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<signInForm>({
    resolver: zodResolver(signInSchema),
    resetOptions: {
      keepTouched: true,
      keepIsValidating: true,
    },
  });

  const SignIn = async ({ ...user }: signInForm) => {
    const { data, status } = await api.get('/users', {
      params: {
        ...user,
      },
    });

    if (data.length === 0) {
      sethasError(true);
      const obj = {
        status: 401,
      };
      return obj;
    }

    return { data, status };
  };

  const { mutateAsync: SignInFn, isPending } = useMutation({
    mutationFn: SignIn,
    onSuccess: ({ status }) => {
      if (status === 401) {
        toast({
          title: 'Parece que temos algo errado.....',
          description: 'Credenciais inválidas',
          variant: 'destructive',
          duration: 10000,
        });
      } else {
        navigate('/dashboard');
      }
    },
  });

  const onSubmit = handleSubmit(async ({ userName, password }) => {
    await SignInFn({ userName, password });
  });

  return {
    errors,
    register,
    onSubmit,
    isPending,
    hasError,
    watch,
  };
}
