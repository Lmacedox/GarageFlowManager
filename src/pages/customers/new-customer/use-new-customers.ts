import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { api } from '@/lib/axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { useParams } from 'react-router-dom';

export const newCustomerSchema = z.object({
  name: z.string().min(1, { message: 'Campo obrigatório' }),
  document: z.string().min(1, { message: 'Campo obrigatório' }),
  phoneNumber: z.string().min(1, { message: 'Campo obrigatório' }),
  vehicle: z.string().min(1, { message: 'Campo obrigatório' }),
  birthDate: z.string().min(1, { message: 'Campo obrigatório' }),
  foundThrough: z.string({ message: 'Campo obrigatório' }),
  personWhoIndicated: z.string().optional(),
  registerAt: z.string().optional(),
});

type newCustomerForm = z.infer<typeof newCustomerSchema>;

export interface ICustomerData {
  id: string;
  name: string;
  document: string;
  phoneNumber: string;
  vehicle: string;
  birthDate: string;
  rg: string;
  email: string;
  zipCode: string;
  address: string;
  foundThrough: string;
  personWhoIndicated: string;
  registerData: string;
}

export const useNewCustomers = () => {
  const form = useForm<newCustomerForm>({
    resolver: zodResolver(newCustomerSchema),
    resetOptions: {
      keepTouched: true,
      keepIsValidating: true,
    },
  });

  const { toast } = useToast();

  const { customerId } = useParams();

  const newCustomer = async ({ ...customer }: newCustomerForm) => {
    console.log('@Call');
    const { data, status } = await api.post('/customers', customer);

    console.log('@Data', data);

    if (data.length === 0) {
      throw { status: 401 };
    }

    return { data, status };
  };

  const getCustomer = async (customerId: string) => {
    const { data, status } = await api.get<ICustomerData>(
      `/customers/${customerId.toString()}`,
    );

    if (status === 200) {
      form.reset({ ...data });
    }

    console.log('@Data', data);
    return data;
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

  const { data: customerData, isLoading: load } = useQuery({
    queryKey: ['customer', customerId],
    queryFn: () => getCustomer(customerId!),
    enabled: !!customerId,
  });

  const onSubmit = form.handleSubmit(({ ...customer }) =>
    registerNewCustomer({ ...customer }),
  );

  return {
    form,
    onSubmit,
    isPending,
    customerData,
  };
};
