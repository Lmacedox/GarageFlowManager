import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'

import React, { ReactNode } from 'react'

export function RenderTestWithProviders(children: ReactNode) {
  const queryClient = new QueryClient()

  return render(children, {
    wrapper: ({ children }) => {
      return (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      )
    },
  })
}
