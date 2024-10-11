import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { api } from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';

export const newCustomerSchema = z.object({
  name: z.string().min(1, { message: 'Campo obrigatório' }),
  document: z.string().min(1, { message: 'Campo obrigatório' }),
  phoneNumber: z.string().min(1, { message: 'Campo obrigatório' }),
  vehicle: z.string().min(1, { message: 'Campo obrigatório' }),
  birthDate: z.string().min(1, { message: 'Campo obrigatório' }),
  foundThrough: z.string().min(1, { message: 'Campo obrigatório' }),
  personWhoIndicated: z.string().optional(),
  registerAt: z.string().optional(),
});

type newCustomerForm = z.infer<typeof newCustomerSchema>;

export const useNewCustomers = () => {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm<newCustomerForm>({
    resolver: zodResolver(newCustomerSchema),
    resetOptions: {
      keepTouched: true,
      keepIsValidating: true,
    },
  });

  const newCustomer = async ({ ...customer }: newCustomerForm) => {
    console.log('@Call');
    const { data, status } = await api.post('/customers', customer);

    console.log('@Data', data);

    if (data.length === 0) {
      throw { status: 401 };
    }

    return { data, status };
  };

  const { mutateAsync: registerNewCustomer, isPending } = useMutation({
    mutationFn: newCustomer,
    onSuccess: () => {
      toast({
        title: 'Novo cliente adicionado ',
        variant: 'success',
      });
    },
    onError: () => {
      toast({
        title: 'Parece que temos algo errado.....',
        description: 'Não foi possível adicionar o cliente, tente novamente.',
        variant: 'destructive',
      });
    },
  });

  const onSubmit = handleSubmit(({ ...customer }) =>
    registerNewCustomer({ ...customer }),
  );

  return {
    errors,
    register,
    onSubmit,
    watch,
    control,
    isPending,
  };
};
