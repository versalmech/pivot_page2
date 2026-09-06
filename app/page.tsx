import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CoreEdge from '@/components/CoreEdge';
import Comparison from '@/components/Comparison';
import PerformanceAudit from '@/components/PerformanceAudit';
import SecurityProtocol from '@/components/SecurityProtocol';
import AccessTiers from '@/components/AccessTiers';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import OperationalProtocol from '@/components/OperationalProtocol';
export default function Home() {
  return (
    <main className="min-h-screen bg-canvas text-textMain selection:bg-emeraldAccent selection:text-canvas pt-11 sm:pt-14">
      <Navbar />
      <Hero />
      <CoreEdge />
      <Comparison />
      <PerformanceAudit />
      <SecurityProtocol />
      <OperationalProtocol />
      <AccessTiers />
      <FAQ />
      <Footer />
    </main>
  );
}
