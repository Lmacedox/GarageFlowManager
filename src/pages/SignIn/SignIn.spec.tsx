import { Toaster } from '@/components/ui/toaster';
import { RenderTestWithProviders } from '@/utils/__tests__/renderTestWithProviders';
import { act, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SignIn } from './signIn';

describe('SignIn', () => {
  it('Should sucess in authentication', async () => {
    const wrapper = RenderTestWithProviders(
      <>
        <Toaster />
        <SignIn />
      </>,
    );

    const user = userEvent.setup();
    const userName = wrapper.getByPlaceholderText(
      /Usuário/i,
    ) as HTMLInputElement;

    const password = wrapper.getByPlaceholderText(/Senha/i) as HTMLInputElement;

    fireEvent.change(userName, { target: { value: 'teste' } });
    fireEvent.change(password, { target: { value: 'pass1' } });

    const submitButton = wrapper.getByRole('button');

    await user.click(submitButton);

    const textElement = wrapper.queryAllByText('Campo obrigatório');

    expect(
      wrapper.queryByText(/Credenciais inválidas/i),
    ).not.toBeInTheDocument();
    expect(textElement.length).equals(0);
  });

  it('Should has feedback to required fields to send empty form fields', async () => {
    const wrapper = RenderTestWithProviders(<SignIn />);

    const submitButton = wrapper.getByRole('button');

    await act(async () => {
      fireEvent.click(submitButton);
    });

    const textElement = wrapper.queryAllByText('Campo obrigatório');

    expect(textElement.length).equals(2);
  });

  it('Should show feedback to invalid credentials', async () => {
    const wrapper = RenderTestWithProviders(
      <>
        <Toaster />
        <SignIn />
      </>,
    );

    const userName = wrapper.getByPlaceholderText(
      /Usuário/i,
    ) as HTMLInputElement;
    const password = wrapper.getByPlaceholderText(/Senha/i) as HTMLInputElement;

    fireEvent.change(userName, { target: { value: 'invalidUser' } });
    fireEvent.change(password, { target: { value: 'invalidPassword' } });

    const submitButton = wrapper.getByRole('button');

    await act(async () => {
      fireEvent.click(submitButton);
    });

    await waitFor(
      () => {
        expect(wrapper.getByText(/Credenciais inválidas/i)).toBeInTheDocument();
      },
      { timeout: 4000 },
    );
  });
});
