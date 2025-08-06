
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre es requerido' }),
  email: z.string().email({ message: 'Email inválido' }),
  phone: z.string().min(8, { message: 'Teléfono inválido' }),
  interest: z.enum(['alquiler', 'compra', 'informacion'], {
    required_error: 'Por favor seleccione su interés',
  }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const RealEstateInterestForm: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      interest: 'informacion',
      message: '',
    },
  });

  function onSubmit(values: FormValues) {
    toast({
      title: 'Formulario enviado',
      description: 'Nos pondremos en contacto contigo en breve.',
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre completo</FormLabel>
                <FormControl>
                  <Input placeholder="Tu nombre" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="tu@email.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input placeholder="+54 11 1234 5678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="interest"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Estoy interesado en</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="alquiler" id="alquiler" />
                    <FormLabel htmlFor="alquiler" className="font-normal cursor-pointer">
                      Alquilar una propiedad
                    </FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compra" id="compra" />
                    <FormLabel htmlFor="compra" className="font-normal cursor-pointer">
                      Comprar una propiedad
                    </FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="informacion" id="informacion" />
                    <FormLabel htmlFor="informacion" className="font-normal cursor-pointer">
                      Recibir más información
                    </FormLabel>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje adicional (opcional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Añade cualquier detalle adicional sobre tu interés..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="bg-polkadot-gradient hover:opacity-90 w-full">
          Enviar Solicitud
        </Button>
      </form>
    </Form>
  );
};

export default RealEstateInterestForm;
