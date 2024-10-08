import { useForm } from 'react-hook-form';

import { useToast } from '@/hooks/use-toast';
import { api } from '@/lib/axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const signInSchema = z.object({
  userName: z.string().min(1, { message: 'Campo obrigatório' }),
  password: z.string().min(1, { message: 'Campo obrigatório' }),
});

type signInForm = z.infer<typeof signInSchema>;

export const useSignIn = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [sucess, setSucess] = useState<'erro' | 'sucesso' | undefined>(
    undefined,
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signInForm>({
    resolver: zodResolver(signInSchema),
    resetOptions: {
      keepTouched: true,
      keepIsValidating: true,
    },
  });

  const loadCustomersList = async ({ ...user }: signInForm) => {
    const { data, status } = await api.get('/users', {
      params: {
        ...user,
      },
    });

    if (data.length === 0) {
      throw { status: 401 };
    }

    return { data, status };
  };

  const { mutateAsync: registerRestaurantFn, isPending } = useMutation({
    mutationFn: loadCustomersList,
    onSuccess: () => {
      console.log('@Teda');
      setSucess('sucesso');
      navigate('/dashboard');
    },
    onError: () => {
      setSucess('erro');
      toast({
        title: 'Parece que temos algo errado.....',
        description: 'Usuário inválido!',
        variant: 'destructive',
      });
    },
  });

  const onSubmit = handleSubmit(({ userName, password }) =>
    registerRestaurantFn({ userName, password }),
  );

  return {
    errors,
    register,
    onSubmit,
    isPending,
    sucess,
  };
};
