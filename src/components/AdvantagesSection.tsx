
import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      title: "Parachain Dedicada para Jubilaciones",
      description: "Posibilidad de crear una cadena dedicada exclusivamente a los tokens de jubilación, con reglas y características específicas."
    },
    {
      title: "Integración con Activos Tokenizados",
      description: "Fácil comunicación con parachains para la tokenización de inmuebles, permitiendo diversificación de inversiones."
    },
    {
      title: "Seguridad Institucional",
      description: "Nivel de seguridad comparable a sistemas financieros tradicionales, generando confianza en los afiliados."
    },
    {
      title: "Evolución Continua",
      description: "Capacidad para implementar mejoras y actualizaciones sin interrumpir operaciones o comprometer fondos."
    },
    {
      title: "Ecosistema DeFi Robusto",
      description: "Acceso a un ecosistema completo de herramientas financieras descentralizadas para optimizar rendimientos."
    },
    {
      title: "Resistencia a Largo Plazo",
      description: "Infraestructura diseñada para sostenibilidad, ideal para instrumentos de ahorro de largo plazo."
    }
  ];
  
  return (
    <section id="ventajas" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ventajas <span className="text-gradient">Competitivas</span></h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            La infraestructura de Polkadot ofrece ventajas únicas para una AFJP Cripto moderna
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <Card key={index} className="glass-card p-6 border-border/50 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-polkadot-pink">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-sm">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
