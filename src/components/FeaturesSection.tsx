import { 
  Blocks, 
  Search, 
  WifiOff, 
  FileText, 
  Cloud, 
  Shield 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Blocks,
      title: t('features.hedera.title'),
      description: t('features.hedera.desc'),
    },
    {
      icon: Search,
      title: t('features.audit.title'),
      description: t('features.audit.desc'),
    },
    {
      icon: WifiOff,
      title: t('features.offline.title'),
      description: t('features.offline.desc'),
    },
    {
      icon: FileText,
      title: t('features.exports.title'),
      description: t('features.exports.desc'),
    },
    {
      icon: Cloud,
      title: t('features.drive.title'),
      description: t('features.drive.desc'),
    },
    {
      icon: Shield,
      title: t('features.security.title'),
      description: t('features.security.desc'),
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
