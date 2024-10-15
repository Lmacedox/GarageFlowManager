import { Menu } from '@/components/menu/menu';
import { Toaster } from '@/components/ui/toaster';
import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Menu />

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
        <Toaster />
      </div>
    </div>
  );
}
