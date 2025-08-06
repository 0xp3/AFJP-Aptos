
import React from 'react';
import { LayoutGrid, Link, Shield, GitBranch, TrendingUp } from 'lucide-react';
import FeatureCard from './FeatureCard';

const WhyPolkadot: React.FC = () => {
  const features = [
    {
      title: "Interoperabilidad",
      description: "La 'Blockchain de Blockchains' permite comunicación entre diferentes cadenas, integrando servicios y activos en un solo ecosistema.",
      icon: <Link size={32} />
    },
    {
      title: "Escalabilidad Superior",
      description: "Procesa múltiples transacciones en paralelo, vital para un sistema con millones de afiliados y transacciones diarias.",
      icon: <TrendingUp size={32} />
    },
    {
      title: "Seguridad Compartida",
      description: "Todas las Parachains se benefician de la Relay Chain central, otorgando seguridad de nivel institucional.",
      icon: <Shield size={32} />
    },
    {
      title: "Gobernanza en Cadena",
      description: "Permite actualizaciones sin forks, asegurando desarrollo continuo y adaptación rápida a nuevas regulaciones.",
      icon: <GitBranch size={32} />
    }
  ];
  
  return (
    <section id="por-que" className="py-20 relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-polkadot-cyan/5 rounded-full filter blur-3xl"></div>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por Qué <span className="text-gradient">Polkadot</span>?</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Una elección estratégica que garantiza la infraestructura ideal para el futuro de los fondos de jubilación
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className={index % 2 === 0 ? "md:mt-8" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPolkadot;
