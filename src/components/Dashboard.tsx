
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardOverview from './dashboard/DashboardOverview';
import ContributionsModule from './contributions/ContributionsModule';
import TokenMarketplace from './marketplace/TokenMarketplace';
import RealEstateProjects from './realestate/RealEstateProjects';
import BenefitsSection from './benefits/BenefitsSection';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  
  return (
    <div className="container py-8 px-4 md:py-12">
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full max-w-3xl mx-auto mb-8 grid grid-cols-5">
          <TabsTrigger value="overview">Inicio</TabsTrigger>
          <TabsTrigger value="contribute">Aportar</TabsTrigger>
          <TabsTrigger value="marketplace">Submercado</TabsTrigger>
          <TabsTrigger value="realestate">Inmuebles</TabsTrigger>
          <TabsTrigger value="benefits">Beneficios</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-6">
          <DashboardOverview />
        </TabsContent>
        
        <TabsContent value="contribute" className="mt-6">
          <ContributionsModule />
        </TabsContent>
        
        <TabsContent value="marketplace" className="mt-6">
          <TokenMarketplace />
        </TabsContent>
        
        <TabsContent value="realestate" className="mt-6">
          <RealEstateProjects />
        </TabsContent>
        
        <TabsContent value="benefits" className="mt-6">
          <BenefitsSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
