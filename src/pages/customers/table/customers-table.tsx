import { Typography } from '@/components/typography';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/ui/nav-link';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { SquarePen } from 'lucide-react';
import { useCustomersTable } from './use-customers-table';

export function Customers() {
  const { isLoadingCustomersList, customersList } = useCustomersTable();

  return (
    <div>
      <div className="mb-4 flex w-full justify-between">
        <Typography.H2>Clientes</Typography.H2>
        <Button type="button" data-cy="newCustomer-button" asChild>
          <NavLink to={'/new-customer'}>
            <Typography.P>Adicionar</Typography.P>
          </NavLink>
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[450px]">Nome</TableHead>
              <TableHead>Veículo</TableHead>
              <TableHead>Contato</TableHead>
              <TableHead>Manutenções</TableHead>
              <TableHead>Registado em</TableHead>
              <TableHead className="text-right">Cliente há</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customersList?.data.map((e: any) => {
              return (
                <TableRow key={e.id}>
                  <TableCell className="font-medium">{e.name}</TableCell>
                  <TableCell>{e.vehicle}</TableCell>
                  <TableCell>{e.phoneNumber}</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>{e.registerData}</TableCell>
                  <TableCell className="text-right">2 anos e 4 Meses</TableCell>
                  <TableCell className="text-center">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      data-cy="editCustomer-button"
                      asChild
                    >
                      <NavLink to={`/new-customer/${e.id}`}>
                        <SquarePen className="h-4 w-4" />
                      </NavLink>
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={6}>Total</TableCell>
              <TableCell className="text-right">
                {customersList?.data.length}
              </TableCell>
            </TableRow>
          </TableFooter>
          <TableCaption className="py-2">
            Sua listagem de clientes!
          </TableCaption>
        </Table>
      </div>
    </div>
  );
}
