import { api } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

export const useCustomersTable = () => {
  const loadCustomersList = async () => {
    return await api.get('/customers');
  };

  const { data: customersList, isLoading: isLoadingCustomersList } = useQuery({
    queryKey: ['profile'],
    queryFn: loadCustomersList,
  });

  return {
    customersList,
    isLoadingCustomersList,
  };
};
