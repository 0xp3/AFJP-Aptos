
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Quote } from 'lucide-react';

const PitchSection: React.FC = () => {
  const pitches = [
    {
      text: "Para construir la columna vertebral tecnológica de nuestra AFJP Cripto, hemos elegido Polkadot. Esta no es una decisión aleatoria; es una elección estratégica que garantiza escalabilidad para millones de afiliados, seguridad de nivel institucional y la interoperabilidad necesaria para integrar todos nuestros servicios, desde los tokens de jubilación hasta la tokenización de propiedades y los beneficios de salud."
    },
    {
      text: "Polkadot nos permite crecer sin límites y adaptarnos al futuro, ofreciendo una plataforma robusta y confiable para los ahorros de toda una vida."
    },
    {
      text: "Mientras otros sistemas se preocupan por la congestión y los costos, Polkadot nos da la tranquilidad para construir una solución de jubilación verdaderamente futurista y sostenible."
    }
  ];

  return (
    <section id="presentacion" className="py-20 relative">
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-polkadot-pink/5 rounded-full filter blur-3xl"></div>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo Presentarlo en el <span className="text-gradient">Hackathon</span></h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Puntos clave para comunicar el valor de Polkadot en tu presentación
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {pitches.map((pitch, index) => (
            <div key={index} className="mb-8">
              <Card className="glass-card p-6 border-border/50 hover:border-primary/50 transition-all">
                <div className="text-polkadot-pink mb-4">
                  <Quote size={24} />
                </div>
                <p className="italic text-lg">{pitch.text}</p>
              </Card>
              {index < pitches.length - 1 && (
                <div className="flex justify-center my-8">
                  <Separator className="w-24" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PitchSection;
