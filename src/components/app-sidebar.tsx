import * as React from 'react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from '@/components/ui/sidebar'
import { NavMain } from './ui/nav-main'
import { NavUser } from './ui/nav-user'

// This is sample data.
const data = {
  versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
  navMain: [
    {
      title: 'Clientes',
      url: '#',
      items: [
        {
          title: 'Novo',
          url: '#',
        },
        {
          title: 'Project Structure',
          url: '#',
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser
          user={{
            email: 'navbar@nav.com',
            name: 'Navbar User',
            avatar: 'https://github.com/shadcn.png',
          }}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
