import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { language, t } = useLanguage();

  const testimonials = [
    {
      quote: {
        fr: "Comptara a révolutionné notre façon de gérer les audits. La traçabilité blockchain est un game-changer.",
        en: "Comptara has revolutionized how we handle audits. Blockchain traceability is a game-changer."
      },
      author: "Marie Laurent",
      role: { fr: "Directrice Financière, TechCorp", en: "CFO, TechCorp" },
      avatar: "ML"
    },
    {
      quote: {
        fr: "L'intégration Hedera nous donne une confiance totale dans l'intégrité de nos données comptables.",
        en: "Hedera integration gives us complete confidence in the integrity of our accounting data."
      },
      author: "Thomas Dubois",
      role: { fr: "Expert-Comptable, Cabinet Dubois", en: "Certified Accountant, Dubois Firm" },
      avatar: "TD"
    },
    {
      quote: {
        fr: "Le mode hors-ligne avec sync automatique est parfait pour nos équipes terrain. Brillant !",
        en: "Offline mode with auto-sync is perfect for our field teams. Brilliant!"
      },
      author: "Sophie Martin",
      role: { fr: "Responsable IT, GlobalFinance", en: "IT Manager, GlobalFinance" },
      avatar: "SM"
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-accent/30 mb-4" />

              {/* Quote Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote[language]}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-medium">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-medium text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role[language]}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
