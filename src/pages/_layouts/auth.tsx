import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';

export function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-96 flex-col items-center justify-center">
        <Outlet />
        <Toaster />
      </div>
    </div>
  );
}
