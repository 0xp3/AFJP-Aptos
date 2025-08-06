
import React from 'react';
import { Building, CoinsIcon, FileText } from 'lucide-react';

type NewsItem = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: 'investment' | 'token' | 'benefits' | 'general';
};

const NewsFeed: React.FC = () => {
  // Mock news data
  const news: NewsItem[] = [
    {
      id: 1,
      title: 'Nuevo proyecto inmobiliario en Puerto Madero',
      excerpt: 'La AFJP Cripto ha adquirido un edificio de apartamentos para sus inversores.',
      date: '20 May 2023',
      category: 'investment'
    },
    {
      id: 2,
      title: 'El valor del token AFJP alcanza nuevo máximo',
      excerpt: 'Nuestro token ha incrementado un 15% este mes con proyecciones positivas.',
      date: '18 May 2023',
      category: 'token'
    },
    {
      id: 3,
      title: 'Ampliamos beneficios en salud',
      excerpt: 'Nueva alianza con cadena de farmacias ofrece 30% de descuento en medicamentos.',
      date: '10 May 2023',
      category: 'benefits'
    },
  ];

  const getNewsIcon = (category: NewsItem['category']) => {
    switch (category) {
      case 'investment':
        return <Building className="h-4 w-4 text-polkadot-cyan" />;
      case 'token':
        return <CoinsIcon className="h-4 w-4 text-polkadot-pink" />;
      case 'benefits':
        return <FileText className="h-4 w-4 text-polkadot-purple" />;
      default:
        return <CoinsIcon className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-4">
      {news.length === 0 ? (
        <p className="text-center text-foreground/70 py-6">No hay noticias recientes</p>
      ) : (
        news.map((item) => (
          <div key={item.id} className="flex gap-3 py-2 border-b border-border/30 last:border-0">
            <div className="h-8 w-8 rounded-full bg-muted flex-shrink-0 flex items-center justify-center mt-1">
              {getNewsIcon(item.category)}
            </div>
            <div>
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-foreground/70">{item.excerpt}</p>
              <p className="text-xs text-foreground/70 mt-1">{item.date}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsFeed;
