
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { CoinsIcon, TrendingUpIcon } from 'lucide-react';
import { MarketplaceStats } from './MarketplaceStats';

const TokenMarketplace: React.FC = () => {
  // Mock token data
  const tokenPrice = 120.75;
  const userBalance = 1250;
  
  const [buyAmount, setBuyAmount] = useState<string>('');
  const [sellAmount, setSellAmount] = useState<string>('');
  const [buyMode, setBuyMode] = useState<'tokens' | 'currency'>('tokens');
  const [sellMode, setSellMode] = useState<'tokens' | 'currency'>('tokens');
  
  // Calculate values based on inputs
  const tokensToReceive = buyMode === 'tokens' 
    ? parseFloat(buyAmount) 
    : parseFloat(buyAmount) / tokenPrice;
  
  const valueToReceive = sellMode === 'currency' 
    ? parseFloat(sellAmount) 
    : parseFloat(sellAmount) * tokenPrice;
  
  const handleBuy = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Simulación: Compra de ${tokensToReceive.toFixed(2)} tokens AFJP por $${(tokensToReceive * tokenPrice).toFixed(2)} USD`);
  };
  
  const handleSell = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Simulación: Venta de ${sellMode === 'tokens' ? sellAmount : (parseFloat(sellAmount) / tokenPrice).toFixed(2)} tokens AFJP por $${valueToReceive.toFixed(2)} USD`);
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Submercado de Tokens</h2>
        <p className="text-foreground/70">
          Compra y vende tokens AFJP en nuestro mercado interno con total seguridad.
        </p>
      </div>
      
      <MarketplaceStats tokenPrice={tokenPrice} userBalance={userBalance} />
      
      <Tabs defaultValue="buy" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="buy">Comprar Tokens</TabsTrigger>
          <TabsTrigger value="sell">Vender Tokens</TabsTrigger>
        </TabsList>
        
        {/* Buy Tab */}
        <TabsContent value="buy">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CoinsIcon className="mr-2 h-5 w-5 text-polkadot-pink" /> 
                Comprar Tokens AFJP
              </CardTitle>
              <CardDescription>
                Adquiere tokens para aumentar tu jubilación
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBuy} className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="buy-mode">Quiero comprar por</Label>
                    <div className="flex gap-2 text-sm">
                      <button 
                        type="button" 
                        onClick={() => setBuyMode('tokens')}
                        className={`px-2 py-1 rounded ${buyMode === 'tokens' ? 'bg-primary text-white' : 'bg-muted'}`}
                      >
                        Tokens
                      </button>
                      <button 
                        type="button" 
                        onClick={() => setBuyMode('currency')}
                        className={`px-2 py-1 rounded ${buyMode === 'currency' ? 'bg-primary text-white' : 'bg-muted'}`}
                      >
                        USD
                      </button>
                    </div>
                  </div>
                  <Input
                    id="buy-amount"
                    type="number"
                    value={buyAmount}
                    onChange={(e) => setBuyAmount(e.target.value)}
                    placeholder={buyMode === 'tokens' ? "Cantidad de tokens" : "Monto en USD"}
                    min="0"
                  />
                </div>
                
                <Card className="bg-muted/30">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-foreground/70">
                          {buyMode === 'tokens' ? 'Costo total' : 'Recibirás'}
                        </p>
                        <p className="text-xl font-bold">
                          {buyMode === 'tokens' 
                            ? `$${(parseFloat(buyAmount || '0') * tokenPrice).toFixed(2)} USD`
                            : `${(parseFloat(buyAmount || '0') / tokenPrice).toFixed(2)} Tokens`
                          }
                        </p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-polkadot-gradient flex items-center justify-center">
                        <TrendingUpIcon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <p className="text-xs text-foreground/50 mt-2">
                      Precio actual: 1 Token AFJP = ${tokenPrice} USD
                    </p>
                  </CardContent>
                </Card>
                
                <Button 
                  type="submit" 
                  className="w-full bg-polkadot-gradient hover:opacity-90"
                  disabled={!buyAmount || parseFloat(buyAmount) <= 0}
                >
                  Confirmar Compra
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Sell Tab */}
        <TabsContent value="sell">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CoinsIcon className="mr-2 h-5 w-5 text-polkadot-pink" /> 
                Vender Tokens AFJP
              </CardTitle>
              <CardDescription>
                Tu balance actual: {userBalance.toLocaleString()} Tokens
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSell} className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="sell-mode">Quiero vender por</Label>
                    <div className="flex gap-2 text-sm">
                      <button 
                        type="button" 
                        onClick={() => setSellMode('tokens')}
                        className={`px-2 py-1 rounded ${sellMode === 'tokens' ? 'bg-primary text-white' : 'bg-muted'}`}
                      >
                        Tokens
                      </button>
                      <button 
                        type="button" 
                        onClick={() => setSellMode('currency')}
                        className={`px-2 py-1 rounded ${sellMode === 'currency' ? 'bg-primary text-white' : 'bg-muted'}`}
                      >
                        USD
                      </button>
                    </div>
                  </div>
                  <Input
                    id="sell-amount"
                    type="number"
                    value={sellAmount}
                    onChange={(e) => setSellAmount(e.target.value)}
                    placeholder={sellMode === 'tokens' ? "Cantidad de tokens" : "Monto en USD"}
                    max={sellMode === 'tokens' ? userBalance : userBalance * tokenPrice}
                    min="0"
                  />
                </div>
                
                <Card className="bg-muted/30">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-foreground/70">
                          {sellMode === 'tokens' ? 'Recibirás' : 'Tokens a vender'}
                        </p>
                        <p className="text-xl font-bold">
                          {sellMode === 'tokens' 
                            ? `$${(parseFloat(sellAmount || '0') * tokenPrice).toFixed(2)} USD`
                            : `${(parseFloat(sellAmount || '0') / tokenPrice).toFixed(2)} Tokens`
                          }
                        </p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-polkadot-gradient flex items-center justify-center">
                        <TrendingUpIcon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <p className="text-xs text-foreground/50 mt-2">
                      Precio actual: 1 Token AFJP = ${tokenPrice} USD
                    </p>
                  </CardContent>
                </Card>
                
                <Button 
                  type="submit" 
                  className="w-full bg-polkadot-gradient hover:opacity-90"
                  disabled={!sellAmount || parseFloat(sellAmount) <= 0 || (sellMode === 'tokens' && parseFloat(sellAmount) > userBalance)}
                >
                  Confirmar Venta
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TokenMarketplace;
