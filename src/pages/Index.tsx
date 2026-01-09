import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import FeaturesSection from '@/components/FeaturesSection';
import ComparisonSection from '@/components/ComparisonSection';
import TechStackSection from '@/components/TechStackSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <HeroSection />
            <VideoSection />
            <FeaturesSection />
            <ComparisonSection />
            <TechStackSection />
            <TestimonialsSection />
            <FAQSection />
            <CTASection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
