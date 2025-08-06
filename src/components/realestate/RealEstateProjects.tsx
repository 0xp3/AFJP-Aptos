
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import RealEstateCard from './RealEstateCard';
import RealEstateInterestForm from './RealEstateInterestForm';

const RealEstateProjects: React.FC = () => {
  // Mock projects data
  const projects = [
    {
      id: 1,
      title: 'Torres del Puerto',
      location: 'Puerto Madero, Buenos Aires',
      type: 'Apartamentos',
      status: 'En Construcción',
      completion: 'Dic 2023',
      available: true,
      discount: 25,
      rentalYield: 8.5,
      images: [
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'
      ]
    },
    {
      id: 2,
      title: 'Residencial Bosque Alto',
      location: 'Tigre, Buenos Aires',
      type: 'Casas',
      status: 'Completado',
      completion: 'Finalizado',
      available: true,
      discount: 25,
      rentalYield: 7.2,
      images: [
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
        'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg'
      ]
    },
    {
      id: 3,
      title: 'Edificio Libertador',
      location: 'Palermo, Buenos Aires',
      type: 'Oficinas',
      status: 'En Pre-venta',
      completion: 'Jun 2024',
      available: false,
      discount: 25,
      rentalYield: 9.0,
      images: [
        'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg',
        'https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg'
      ]
    },
  ];
  
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Proyectos Inmobiliarios</h2>
        <p className="text-foreground/70">
          Descubre las propiedades en las que invierte el fondo y obtén beneficios exclusivos como afiliado.
        </p>
      </div>
      
      <Card className="border-border/50 glass-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Beneficios Inmobiliarios para Afiliados</CardTitle>
              <CardDescription>Como afiliado de AFJP Cripto accedes a estas ventajas</CardDescription>
            </div>
            <Badge className="bg-polkadot-gradient text-white">Exclusivo</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <h3 className="font-bold text-lg mb-2">25% de Descuento</h3>
              <p className="text-foreground/70 text-sm">
                En alquiler de propiedades pertenecientes al fondo.
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Prioridad de Compra</h3>
              <p className="text-foreground/70 text-sm">
                Acceso prioritario a nuevas propiedades antes que el público.
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Financiación Especial</h3>
              <p className="text-foreground/70 text-sm">
                Planes de pago exclusivos con tasas preferenciales.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <RealEstateCard key={project.id} project={project} />
        ))}
      </div>
      
      <Card className="border-border/50 glass-card mt-8">
        <CardHeader>
          <CardTitle>Expresar Interés</CardTitle>
          <CardDescription>
            Completa este formulario para recibir más información sobre nuestros proyectos inmobiliarios.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RealEstateInterestForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default RealEstateProjects;
