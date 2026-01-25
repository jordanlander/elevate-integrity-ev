import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

// Service Pages
import ResidentialEvCharging from "./pages/services/ResidentialEvCharging";
import CommercialEvCharging from "./pages/services/CommercialEvCharging";
import TeslaPowerwall from "./pages/services/TeslaPowerwall";
import ElectricalPanelUpgrades from "./pages/services/ElectricalPanelUpgrades";
import GeneralElectrical from "./pages/services/GeneralElectrical";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/sitemap" element={<Sitemap />} />
          
          {/* Service Pages */}
          <Route path="/services/residential-ev-charging" element={<ResidentialEvCharging />} />
          <Route path="/services/commercial-ev-charging" element={<CommercialEvCharging />} />
          <Route path="/services/tesla-powerwall" element={<TeslaPowerwall />} />
          <Route path="/services/electrical-panel-upgrades" element={<ElectricalPanelUpgrades />} />
          <Route path="/services/general-electrical" element={<GeneralElectrical />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
