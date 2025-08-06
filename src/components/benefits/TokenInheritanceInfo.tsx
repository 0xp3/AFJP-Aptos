
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { HandHeartIcon } from 'lucide-react';

const TokenInheritanceInfo: React.FC = () => {
  // Mock data for the beneficiary status
  const inheritanceStatus = {
    configured: true,
    completionPercentage: 75,
    primaryBeneficiary: "María Rodríguez",
    primaryRelation: "Cónyuge",
    primaryPercentage: 60,
    secondaryBeneficiary: "Juan Rodríguez",
    secondaryRelation: "Hijo",
    secondaryPercentage: 40,
    lastUpdate: "15/04/2023"
  };

  return (
    <Card className="border-border/50 glass-card">
      <CardHeader>
        <CardTitle>Estado de Herencia de Tus Tokens</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-polkadot-gradient flex items-center justify-center">
              <HandHeartIcon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">
                Configuración de Beneficiarios
              </h3>
              <p className="text-foreground/70">
                {inheritanceStatus.configured 
                  ? 'Has designado beneficiarios para tus tokens' 
                  : 'No has designado beneficiarios aún'}
              </p>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-foreground/70">Estado de configuración</span>
              <span className="font-medium">{inheritanceStatus.completionPercentage}% completado</span>
            </div>
            <Progress value={inheritanceStatus.completionPercentage} className="h-2" />
          </div>
          
          {inheritanceStatus.configured ? (
            <div className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-medium mb-3">Beneficiarios Designados</h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">{inheritanceStatus.primaryBeneficiary}</p>
                      <p className="text-sm text-foreground/70">{inheritanceStatus.primaryRelation}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{inheritanceStatus.primaryPercentage}%</p>
                      <p className="text-sm text-foreground/70">Beneficiario Principal</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">{inheritanceStatus.secondaryBeneficiary}</p>
                      <p className="text-sm text-foreground/70">{inheritanceStatus.secondaryRelation}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{inheritanceStatus.secondaryPercentage}%</p>
                      <p className="text-sm text-foreground/70">Beneficiario Secundario</p>
                    </div>
                  </div>
                </div>
                
                <p className="mt-4 text-xs text-foreground/60">
                  Última actualización: {inheritanceStatus.lastUpdate}
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">¿Cómo funciona la herencia de tokens?</h4>
                <p className="text-sm text-foreground/70 mb-3">
                  Tus tokens AFJP están programados mediante smart contracts para transferirse automáticamente a tus beneficiarios designados en caso de fallecimiento, siguiendo estos pasos:
                </p>
                <ol className="text-sm text-foreground/70 list-decimal pl-5 space-y-1">
                  <li>Se verifica el fallecimiento mediante certificado digital.</li>
                  <li>Se activa el smart contract de herencia.</li>
                  <li>Los tokens se distribuyen según los porcentajes asignados.</li>
                  <li>Los beneficiarios reciben notificación y acceso a los tokens.</li>
                </ol>
              </div>
              
              <div className="flex justify-center gap-4">
                <Button variant="outline">Modificar Beneficiarios</Button>
                <Button className="bg-polkadot-gradient hover:opacity-90">Añadir Documentación</Button>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <p className="text-foreground/70">
                No has configurado la herencia de tus tokens AFJP. Es importante designar beneficiarios para proteger tu inversión.
              </p>
              <Button className="bg-polkadot-gradient hover:opacity-90">
                Configurar Beneficiarios
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenInheritanceInfo;
