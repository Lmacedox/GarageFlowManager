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

  console.log('@Loading', isLoadingCustomersList);
  console.log('@customersList', customersList);

  return (
    <div>
      <div className="mb-4 flex w-full justify-between">
        <Typography.H2>Clientes</Typography.H2>
        <Button type="button" asChild>
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
              <TableHead>Manutenções realizadas</TableHead>
              <TableHead>Registado em</TableHead>
              <TableHead className="text-right">Cliente há</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customersList?.data.map((e: any) => {
              return (
                <TableRow>
                  <TableCell className="font-medium">{e.name}</TableCell>
                  <TableCell>{e.vehicle}</TableCell>
                  <TableCell>{e.phoneNumber}</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>{e.registerData}</TableCell>
                  <TableCell className="text-right">2 anos e 4 Meses</TableCell>
                  <TableCell className="text-center">
                    <Button variant="outline" size="icon">
                      <SquarePen className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
            {/* <TableRow>
              <TableCell className="font-medium">Cristiano Ronaldo</TableCell>
              <TableCell>Celta</TableCell>
              <TableCell>(00) 00000-0000</TableCell>
              <TableCell>4</TableCell>
              <TableCell>01/05/2022</TableCell>
              <TableCell className="text-right">2 anos e 4 Meses</TableCell>
              <TableCell className="text-center">
                <Button variant="outline" size="icon">
                  <SquarePen className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Lionel Messi</TableCell>
              <TableCell>Gol</TableCell>
              <TableCell>(00) 00000-0000</TableCell>
              <TableCell>2</TableCell>
              <TableCell>01/05/2022</TableCell>
              <TableCell className="text-right">1 anos e 4 Meses</TableCell>
              <TableCell className="text-center">
                <Button variant="outline" size="icon">
                  <SquarePen className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow> */}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={6}>Total</TableCell>
              <TableCell className="text-right">2</TableCell>
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
