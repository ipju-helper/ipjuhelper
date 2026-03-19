import { TopNav } from '@/components/layout/top-nav';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/landing/hero-section';
import { QuickNavSection } from '@/components/landing/quick-nav-section';
import { ServiceSection } from '@/components/landing/service-section';
import { ProblemSection } from '@/components/landing/problem-section';
import { ProcessSection } from '@/components/landing/process-section';
import { ExtraServiceSection } from '@/components/landing/extra-service-section';
import { CtaSection } from '@/components/landing/cta-banner';

export default function Home() {
  return (
    <>
      <header className="relative z-10">
        <TopNav />
      </header>
      <main>
        <HeroSection />
        <QuickNavSection />
        <ServiceSection />
        <ProblemSection />
        <ProcessSection />
        <ExtraServiceSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
