import { Home, Cog, Users } from 'lucide-react';
import { Separator } from '../ui/separator';
import { NavLink } from '../ui/nav-link';

export function Menu() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Cog className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Inicio
          </NavLink>
          <NavLink to="/customers">
            <Users className="h-4 w-4" />
            Clientes
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {/* <ThemeToggle /> */}
          {/* <AccountMenu /> */}
        </div>
      </div>
    </div>
  );
}
