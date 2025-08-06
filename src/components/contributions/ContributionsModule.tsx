
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowRightIcon } from 'lucide-react';

const ContributionsModule: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [currency, setCurrency] = useState<string>('USD');
  
  // Token price in USD
  const tokenPrice = 120.75;
  
  // Calculate tokens that would be received
  const tokensToReceive = parseFloat(amount) / tokenPrice;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Simulación: Aporte de ${currency} ${amount} procesado. Recibirías ${tokensToReceive.toFixed(2)} tokens AFJP.`);
  };
  
  return (
    <div className="max-w-xl mx-auto">
      <Card className="border-border/50 glass-card">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Realizar un Aporte</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="currency-type">Moneda de Aporte</Label>
              <RadioGroup 
                id="currency-type" 
                value={currency} 
                onValueChange={setCurrency}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="USD" id="usd" />
                  <Label htmlFor="usd">USD</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ARS" id="ars" />
                  <Label htmlFor="ars">ARS</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="amount">Monto a Aportar</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-foreground/70">{currency === 'USD' ? '$' : '$'}</span>
                </div>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="pl-8"
                  min="1"
                />
              </div>
            </div>
            
            <Card className="bg-muted/30">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-foreground/70">Recibirás aproximadamente</p>
                    <p className="text-2xl font-bold">
                      {isNaN(tokensToReceive) ? '0.00' : tokensToReceive.toFixed(2)} 
                      <span className="text-foreground/70 text-lg ml-1">Tokens AFJP</span>
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-polkadot-gradient flex items-center justify-center">
                    <ArrowRightIcon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <p className="text-xs text-foreground/50 mt-2">
                  Tasa de conversión: 1 Token AFJP = ${tokenPrice} {currency}
                </p>
              </CardContent>
            </Card>
            
            <Button 
              type="submit" 
              className="w-full bg-polkadot-gradient hover:opacity-90"
              disabled={!amount || parseFloat(amount) <= 0}
            >
              Confirmar Aporte
            </Button>
            
            <p className="text-xs text-foreground/50 text-center">
              Los aportes son procesados dentro de las 24hs hábiles. Recibirás un email de confirmación.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContributionsModule;
