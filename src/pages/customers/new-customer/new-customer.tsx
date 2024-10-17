import { Typography } from '@/components/typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Separator } from '@/components/ui/separator';
import { useHookFormMask } from 'use-mask-input';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { useNewCustomers } from './use-new-customers';

import { LoaderCircle } from 'lucide-react';

import { Masks } from '@/resources/masks';
import { SelectObject } from '@/resources/selectObject';

export function NewCustomer() {
  const { form, onSubmit, isPending, customerData } = useNewCustomers();

  const registerWithMask = useHookFormMask(form.register);

  const foundThrough = form.watch('foundThrough');

  return (
    <div>
      <div className="mb-4 flex w-full justify-between">
        <Typography.H2>
          Cliente - {customerData?.name ?? 'Novo cliente'}
        </Typography.H2>
      </div>
      <div className="rounded border p-4">
        <Typography.H3>Dados</Typography.H3>
        <Separator orientation="horizontal" className="my-3" />
        <Form {...form}>
          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
              <FormField
                control={form.control}
                name="name"
                render={() => (
                  <FormItem>
                    <FormLabel>Nome do cliente</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="Nome"
                        data-cy="name-input"
                        {...form.register('name')}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="foundThrough"
                render={({ field: { onChange, value } }) => (
                  <FormItem>
                    <FormLabel>Como nos encontrou</FormLabel>

                    <FormControl>
                      <Select onValueChange={onChange} value={value}>
                        <SelectTrigger
                          className="w-full"
                          data-cy={`foundThrough-input-trigger`}
                        >
                          <SelectValue placeholder={'Selecione...'} />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.values(SelectObject.foundThroughEnum).map(
                            (selectOptions) => (
                              <SelectItem
                                data-cy={`foundThrough-input-${selectOptions.description}`}
                                value={selectOptions.value.toString()}
                                key={selectOptions.value}
                              >
                                {selectOptions.description}
                              </SelectItem>
                            ),
                          )}
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="document"
                render={() => (
                  <FormItem>
                    <FormLabel>Documento</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="xxx.xxx.xxx-xx"
                        data-cy="document-input"
                        {...registerWithMask('document', null, {
                          showMaskOnHover: false,
                          mask: Masks.document,
                        })}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={() => (
                  <FormItem>
                    <FormLabel>Contato</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="(xx) xxxxx-xxxx"
                        data-cy="phoneNumber-input"
                        {...registerWithMask('phoneNumber', null, {
                          showMaskOnHover: false,
                          mask: Masks.phoneNumber,
                        })}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="birthDate"
                render={() => (
                  <FormItem>
                    <FormLabel>Nascimento</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="xx/xx/xxxx"
                        data-cy="birthDate-input"
                        {...registerWithMask('birthDate', null, {
                          showMaskOnHover: false,
                          mask: Masks.birthDate,
                        })}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="vehicle"
                render={() => (
                  <FormItem>
                    <FormLabel>Veículo</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="Veículo do cliente"
                        data-cy="vehicle-input"
                        {...form.register('vehicle')}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {foundThrough ===
                SelectObject.foundThroughEnum.Recomendacao.value.toString() && (
                <FormField
                  control={form.control}
                  name="personWhoIndicated"
                  render={() => (
                    <FormItem>
                      <FormLabel>Indicador</FormLabel>

                      <FormControl>
                        <Input
                          placeholder="Nome do indicador"
                          {...form.register('personWhoIndicated')}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>
            <div className="mt-5 text-end">
              <Button variant={'default'} data-cy="submit-button">
                {isPending ? (
                  <LoaderCircle className="animate-spin" />
                ) : (
                  'Salvar'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
