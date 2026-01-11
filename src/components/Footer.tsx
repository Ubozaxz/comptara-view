import { useLanguage } from '@/contexts/LanguageContext';
import comptaraLogo from '@/assets/comptara-logo.jpg';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img 
                src={comptaraLogo} 
                alt="Comptara" 
                className="w-8 h-8 rounded-md object-cover"
              />
              <span className="font-semibold text-foreground">Comptara</span>
            </div>
            <span className="text-sm text-muted-foreground">
              © 2024-2026 {t('footer.rights')}
            </span>
          </div>

          {/* Designed by promé */}
          <div className="text-sm text-muted-foreground">
            {t('footer.designed')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
