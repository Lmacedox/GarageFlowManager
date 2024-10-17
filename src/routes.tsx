import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from './pages/_layouts/auth';
import { SignIn } from './pages/SignIn/signIn';
import { NotFound } from './pages/NotFound';
import { AppLayout } from './pages/_layouts/app';
import { Dashboard } from './pages/dashboard/dashboard';
import { Customers } from './pages/customers/table/customers-table';
import { NewCustomer } from './pages/customers/new-customer/new-customer';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/', element: <SignIn /> }],
  },
  {
    path: '/',
    element: <AppLayout />,
    // errorElement: <Error />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/customers', element: <Customers /> },
      { path: '/new-customer/:customerId?', element: <NewCustomer /> },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
]);
