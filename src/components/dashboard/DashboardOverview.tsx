
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChartIcon, CoinsIcon, CreditCardIcon, Building, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TokenValueChart from './TokenValueChart';
import TransactionsList from './TransactionsList';
import NewsFeed from './NewsFeed';

const DashboardOverview: React.FC = () => {
  // Mock data
  const tokenAmount = 1250;
  const tokenValue = 120.75;
  const totalValue = tokenAmount * tokenValue;
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Mi Dashboard</h2>
        <Button className="bg-polkadot-gradient hover:opacity-90">Aportar Ahora</Button>
      </div>
      
      {/* Main token value card */}
      <Card className="border-border/50 glass-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-foreground/70">Mis Tokens de Jubilación</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-polkadot-gradient flex items-center justify-center mr-4">
                  <CoinsIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-4xl font-bold">{tokenAmount.toLocaleString()}</p>
                  <p className="text-foreground/70">Tokens AFJP</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-foreground/70">Valor Total Estimado</p>
                <p className="text-3xl font-bold">${totalValue.toLocaleString()}</p>
                <p className="text-foreground/70 text-sm">
                  ${tokenValue} <span className="text-green-500">+2.5%</span> por token
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <TokenValueChart />
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Quick access cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer glass-card">
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-polkadot-gradient flex items-center justify-center mr-4">
                <CreditCardIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Aportar</h3>
                <p className="text-foreground/70 text-sm">Sumar a tu jubilación</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer glass-card">
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-polkadot-gradient flex items-center justify-center mr-4">
                <LineChartIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Submercado</h3>
                <p className="text-foreground/70 text-sm">Compra/venta de tokens</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer glass-card">
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-polkadot-gradient flex items-center justify-center mr-4">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Beneficios</h3>
                <p className="text-foreground/70 text-sm">Descuentos y más</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Transactions and News */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border/50 glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-foreground/70">Transacciones Recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <TransactionsList />
          </CardContent>
        </Card>
        
        <Card className="border-border/50 glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-foreground/70">Noticias del Fondo</CardTitle>
          </CardHeader>
          <CardContent>
            <NewsFeed />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
