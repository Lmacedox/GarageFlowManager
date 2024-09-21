import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

export const newCustomerSchema = z.object({
  name: z.string().min(1, { message: 'Campo obrigatório' }),
  document: z.string().min(1, { message: 'Campo obrigatório' }),
  phoneNumber: z.string().min(1, { message: 'Campo obrigatório' }),
  vehicle: z.string().min(1, { message: 'Campo obrigatório' }),
  registerAt: z.string().optional(),
});

type newCustomerForm = z.infer<typeof newCustomerSchema>;

export const useNewCustomers = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<newCustomerForm>({
    resolver: zodResolver(newCustomerSchema),
    resetOptions: {
      keepTouched: true,
      keepIsValidating: true,
    },
  });

  const onSubmit = handleSubmit((data) => console.log('@Data', data));

  return {
    errors,
    register,
    onSubmit,
  };
};
