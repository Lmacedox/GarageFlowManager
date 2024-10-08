import { queryClient } from '@/lib/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { act, fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';

import { SignIn } from './signIn';

interface IWrapper {
  children: React.ReactNode;
}

describe('SignIn', () => {
  const wrapper = render(<SignIn />, {
    wrapper: ({ children }: IWrapper) => {
      return (
        <MemoryRouter>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </MemoryRouter>
      );
    },
  });

  // it('Should has feedback to required fields to send empty form fields', async () => {
  //   const submitButton = wrapper.getByRole('button');

  //   await act(async () => {
  //     fireEvent.click(submitButton);
  //   });

  //   const textElement = wrapper.queryAllByText('Campo obrigatório');

  //   expect(textElement.length).equals(2);
  // });

  it('Should sucess in authentication', async () => {
    const user = userEvent.setup();
    const userName = wrapper.getByPlaceholderText(
      /Nome do cliente/i,
    ) as HTMLInputElement;

    const password = wrapper.getByPlaceholderText(/Senha/i) as HTMLInputElement;

    fireEvent.change(userName, { target: { value: 'teste' } });
    fireEvent.change(password, { target: { value: 'pass1' } });

    const submitButton = wrapper.getByRole('button');

    // await act(async () => {
    //   fireEvent.click(submitButton);
    // });

    await user.click(submitButton);

    // Aguarda a navegação para a nova rota
    expect(wrapper.asFragment()).toMatchSnapshot();
    // await wrapper.findByText(/DashBoard/i);

    // expect(wrapper.getByText(/DashBoard/i)).toBeInTheDocument();
  });
});
