import { Check, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const ComparisonSection = () => {
  const { t } = useLanguage();

  const features = [
    { key: 'comparison.feature1', comptara: true, traditional: false },
    { key: 'comparison.feature2', comptara: true, traditional: false },
    { key: 'comparison.feature3', comptara: true, traditional: true },
    { key: 'comparison.feature4', comptara: true, traditional: false },
    { key: 'comparison.feature5', comptara: true, traditional: true },
    { key: 'comparison.feature6', comptara: true, traditional: false },
  ];

  return (
    <section id="comparison" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('comparison.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('comparison.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-sm font-medium text-muted-foreground">
              {t('comparison.features')}
            </div>
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-accent to-accent-secondary text-white font-semibold text-sm">
                Comptara
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted text-muted-foreground font-semibold text-sm">
                {t('comparison.traditional')}
              </div>
            </div>
          </div>

          {/* Table Rows */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 items-center p-4 rounded-xl bg-card border border-border hover:border-accent/30 transition-colors"
              >
                <div className="text-sm font-medium text-foreground">
                  {t(feature.key)}
                </div>
                <div className="flex justify-center">
                  {feature.comptara ? (
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  {feature.traditional ? (
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://ledger-on-chain-comptara.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('comparison.cta')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
