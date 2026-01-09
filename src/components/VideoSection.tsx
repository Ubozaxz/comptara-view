import { Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const VideoSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('video.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('video.subtitle')}
          </p>
        </div>

        {/* Video Container with Glow Effect */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 via-accent-secondary/30 to-accent/30 rounded-2xl blur-xl opacity-60 animate-pulse-slow" />
          
          {/* Video Frame */}
          <div className="relative bg-card rounded-xl overflow-hidden border border-border shadow-2xl">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/G4O2NT-iz4A"
                title="Comptara Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-secondary/10 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
