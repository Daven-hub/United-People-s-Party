// pages/About.tsx
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/AbutSection/HeroSection";
import HistoireSection from "@/components/AbutSection/HistoireSection";
import { Leadership } from "@/components/Leadership";
import ObjectifsSection from "@/components/AbutSection/ObjectifsSection";
// import Valeurs from "@/components/valeurs"; // Décommenter si utilisé

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <HistoireSection />
      <ObjectifsSection />
      <Leadership />
      {/* <Valeurs /> */}
      <Footer />
    </div>
  );
};

export default About;
