import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import FloatingPhoneButton from "./components/FloatingPhoneButton";
import CookieConsent from "./components/CookieConsent";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const DecorativeService = lazy(() => import("./pages/DecorativeService"));
const HangarsService = lazy(() => import("./pages/HangarsService"));
const LightingService = lazy(() => import("./pages/LightingService"));
const WarehouseService = lazy(() => import("./pages/WarehouseService"));
const ConstructionService = lazy(() => import("./pages/ConstructionService"));
const TechnologicalService = lazy(() => import("./pages/TechnologicalService"));
const WeldedService = lazy(() => import("./pages/WeldedService"));
const MillingService = lazy(() => import("./pages/MillingService"));
const TurningService = lazy(() => import("./pages/TurningService"));
const ContainersService = lazy(() => import("./pages/ContainersService"));
const EngineeringService = lazy(() => import("./pages/EngineeringService"));
const MetalProcessing = lazy(() => import("./pages/MetalProcessing"));
const Equipment = lazy(() => import("./pages/Equipment"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const DataConsent = lazy(() => import("./pages/DataConsent"));
const Contacts = lazy(() => import("./pages/Contacts"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Presentation = lazy(() => import("./pages/Presentation"));
const ReferenceList = lazy(() => import("./pages/ReferenceList"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-8 h-8 border-2 border-border border-t-secondary rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <FloatingPhoneButton />
        <CookieConsent />
        <Suspense fallback={<PageFallback />}>
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
            <Route path="/services/metalloobrabotka" element={<MetalProcessing />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/reference-list" element={<ReferenceList />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/data-consent" element={<DataConsent />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;