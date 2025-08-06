
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-polkadot-dark text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center">
            <div className="h-8 w-8 rounded-full bg-polkadot-gradient mr-3"></div>
            <span className="font-bold text-xl">AFJP Cripto</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div>
              <h4 className="font-bold mb-2 text-polkadot-pink">Enlaces</h4>
              <ul className="space-y-1">
                <li><a href="#por-que" className="opacity-70 hover:opacity-100 transition-opacity">¿Por Qué Polkadot?</a></li>
                <li><a href="#ventajas" className="opacity-70 hover:opacity-100 transition-opacity">Ventajas</a></li>
                <li><a href="#presentacion" className="opacity-70 hover:opacity-100 transition-opacity">Presentación</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-2 text-polkadot-purple">Recursos</h4>
              <ul className="space-y-1">
                <li><a href="https://polkadot.network/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">Polkadot Oficial</a></li>
                <li><a href="https://wiki.polkadot.network/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">Documentación</a></li>
                <li><a href="https://polkadot.subscan.io/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">Explorer</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center md:text-left text-sm opacity-70">
          <p>© 2025 AFJP Cripto en Polkadot. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
