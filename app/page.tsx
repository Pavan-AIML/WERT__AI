import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { HowItWorks } from "@/components/HowItWorks";
import { Integrations } from "@/components/Integrations";
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
        <ProblemSolution />
        <HowItWorks />
        <Integrations />
        <Partners />
        <Trust />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
