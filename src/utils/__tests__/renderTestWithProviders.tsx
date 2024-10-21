import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

export function RenderTestWithProviders(children: ReactNode) {
  const queryClient = new QueryClient();

  return render(children, {
    wrapper: ({ children }) => {
      return (
        <MemoryRouter>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </MemoryRouter>
      );
    },
  });
}
