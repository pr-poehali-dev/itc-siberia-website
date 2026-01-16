
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import FloatingPhoneButton from "./components/FloatingPhoneButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import DecorativeService from "./pages/DecorativeService";
import HangarsService from "./pages/HangarsService";
import LightingService from "./pages/LightingService";
import WarehouseService from "./pages/WarehouseService";
import ConstructionService from "./pages/ConstructionService";
import TechnologicalService from "./pages/TechnologicalService";
import WeldedService from "./pages/WeldedService";
import MillingService from "./pages/MillingService";
import TurningService from "./pages/TurningService";
import ContainersService from "./pages/ContainersService";
import EngineeringService from "./pages/EngineeringService";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <FloatingPhoneButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/zakladnye-zbi" element={<ServiceDetail />} />
          <Route path="/services/dekorativnye" element={<DecorativeService />} />
          <Route path="/services/angary" element={<HangarsService />} />
          <Route path="/services/osveshchenie" element={<LightingService />} />
          <Route path="/services/sklady" element={<WarehouseService />} />
          <Route path="/services/stroitelnye" element={<ConstructionService />} />
          <Route path="/services/tehnologicheskie" element={<TechnologicalService />} />
          <Route path="/services/svarnye" element={<WeldedService />} />
          <Route path="/services/emkosti" element={<ContainersService />} />
          <Route path="/services/frezernye" element={<MillingService />} />
          <Route path="/services/tokarnye" element={<TurningService />} />
          <Route path="/services/inzhiniring" element={<EngineeringService />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;