import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import CaseStudies from "@/components/CaseStudies";
import Estimator from "@/components/Estimator";
import Insights from "@/components/Insights";
import FAQ from "@/components/FAQ";
import OurOffices from "@/components/OurOffices";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <TrustMarquee />
        <Services />
        <Process />
        <TechStack />
        <CaseStudies />
        <Estimator />
        <Insights />
        <FAQ />
        <OurOffices />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
