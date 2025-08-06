
import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-4 md:px-6 border-b backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-polkadot-gradient"></div>
          <span className="font-bold text-xl md:text-2xl">AFJP Cripto</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#por-que" className="text-foreground/80 hover:text-foreground transition-colors">¿Por Qué Polkadot?</a>
          <a href="#ventajas" className="text-foreground/80 hover:text-foreground transition-colors">Ventajas</a>
          <a href="#presentacion" className="text-foreground/80 hover:text-foreground transition-colors">Presentación</a>
        </nav>
        
        <Button className="bg-polkadot-gradient hover:opacity-90 transition-opacity">
          Saber más
        </Button>
      </div>
    </header>
  );
};

export default Header;
