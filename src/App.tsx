import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Rejoindre from "./pages/Rejoindre";
import About from "./pages/About";
import Programme from "./pages/Programme";
import Actualites from "./pages/Actualites";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProgrammeDetail from "./pages/ProgrammeDetail";
import VisionPage from "./pages/VisionPolitique";
import ComingSoon from "./pages/ComingSoon";
import { ProjetPolitiquePage } from "./pages/ProjetPolitique";
import GalleryPage from "./pages/Galerie";
import PartisPolitique from "./pages/PartisPolitique";
import DetailPartiPolitique from "./pages/DetailPartiPolitique";
import BackToTop from "./components/ui/backTop";
import SlimLanguageSwitcher from "./components/locales/flotSwitcher";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SlimLanguageSwitcher/>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/qui-sommes-nous-?" element={<About />} />
          <Route path="/vision-politique" element={<VisionPage />} />
          <Route path="/projets-politique" element={<ProjetPolitiquePage />} />
          <Route path="/programme/">
            <Route index element={<Programme />} />
            <Route path=":id" element={<ProgrammeDetail />} />
          </Route>
          <Route path="/partis-politique/">
            <Route index element={<PartisPolitique />} />
            <Route path=":id" element={<DetailPartiPolitique />} />
          </Route>
          <Route path="/actualites" element={<Actualites />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/galerie" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rejoindre" element={<Rejoindre />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<ComingSoon />} />
        </Routes>
        <BackToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;













