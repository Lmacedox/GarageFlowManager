import { Typography } from '@/components/typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { useNewCustomers } from './use-new-customers';
import { InputErrorMessage } from '@/components/input-error-message';
import { Controller } from 'react-hook-form';

export function NewCustomer() {
  const { errors, register, onSubmit, watch, control } = useNewCustomers();

  const foundThrough = watch('foundThrough');

  console.log('@foundThrough', foundThrough);

  return (
    <div>
      <div className="mb-4 flex w-full justify-between">
        <Typography.H2>Cliente - Cristiano Ronaldo</Typography.H2>
      </div>
      <div className="rounded border p-4">
        <Typography.H3>Dados</Typography.H3>
        <Separator orientation="horizontal" className="my-3" />
        <form onSubmit={onSubmit}>
          <div className="flex flex-row flex-wrap gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Contato</Label>
              <Input placeholder="Nome do cliente" {...register('name')} />
              <InputErrorMessage inputName={'name'} errors={errors} />
            </div>

            <div className="max-w-[150px] space-y-2">
              <Label htmlFor="document">CPF</Label>
              <Input placeholder="xxx.xxx.xxx-xx" {...register('document')} />
              <InputErrorMessage inputName={'document'} errors={errors} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Contato</Label>
              <Input
                placeholder="(xx) xxxxx-xxxx"
                {...register('phoneNumber')}
              />
              <InputErrorMessage inputName={'phoneNumber'} errors={errors} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthDate">Contato</Label>
              <Input placeholder="(xx) xxxxx-xxxx" {...register('birthDate')} />
              <InputErrorMessage inputName={'birthDate'} errors={errors} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="foundThrough">Como nos encontrou</Label>

              <Controller
                name="foundThrough"
                control={control}
                render={({ field: { name, onChange, value } }) => {
                  return (
                    <Select name={name} onValueChange={onChange} value={value}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectContent>
                          <SelectItem value={'Recomendação'}>
                            Recomendação
                          </SelectItem>

                          <SelectItem value={'Instagram'}>Instagram</SelectItem>

                          <SelectItem value={'WhatsApp'}>WhatsApp</SelectItem>
                        </SelectContent>
                      </SelectContent>
                    </Select>
                  );
                }}
              />
            </div>

            {foundThrough === 'Recomendação' && (
              <div className="space-y-2">
                <Label htmlFor="personWhoIndicated">Indicado por</Label>
                <Input
                  placeholder="Nome do indicador"
                  {...register('personWhoIndicated')}
                />
                <InputErrorMessage
                  inputName={'personWhoIndicated'}
                  errors={errors}
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="vehicle">Veículo</Label>
              <Input
                placeholder="Veículo do cliente"
                {...register('vehicle')}
              />
              <InputErrorMessage inputName={'vehicle'} errors={errors} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="registerAt">Cliente desde</Label>
              <Input disabled value={'5 Meses'} {...register('registerAt')} />
            </div>
          </div>

          <div className="mt-5 text-end">
            <Button variant={'sucess'}>Salvar</Button>
          </div>
        </form>
      </div>

      {/* <div className="my-5 rounded border p-4">
        <Typography.H3>Histórico de Manutenções</Typography.H3>
        <Separator orientation="horizontal" className="my-3" />
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[450px]">Serviço</TableHead>
                <TableHead>Tempo em garagem</TableHead>
                <TableHead>Tipo de Pagamento</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Embreagem</TableCell>
                <TableCell>2 Meses, 4 dias</TableCell>
                <TableCell>A vista</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Cabeçote</TableCell>
                <TableCell>6 Meses, 4 dias</TableCell>
                <TableCell>Parcelado 12x</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell className="text-right">2</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div> */}
    </div>
  );
}
