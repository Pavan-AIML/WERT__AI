import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ImpactMetrics } from "@/components/ImpactMetrics";
import { ProblemSolution } from "@/components/ProblemSolution";
import { KnowledgeGraphSection } from "@/components/KnowledgeGraphSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Integrations } from "@/components/Integrations";
import { TargetCompaniesMarquee } from "@/components/TargetCompaniesMarquee";
import { Partners } from "@/components/Partners";
import { Trust } from "@/components/Trust";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ImpactMetrics />
        <ProblemSolution />
        <KnowledgeGraphSection />
        <HowItWorks />
        <Integrations />
        <TargetCompaniesMarquee />
        <Partners />
        <Trust />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
