import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.features': { fr: 'Fonctionnalités', en: 'Features' },
  'nav.testimonials': { fr: 'Témoignages', en: 'Testimonials' },
  'nav.tech': { fr: 'Tech', en: 'Tech' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },
  
  // Hero
  'hero.title': { 
    fr: 'La comptabilité on-chain, enfin simplifiée.', 
    en: 'On-chain accounting, simplified at last.' 
  },
  'hero.subtitle': { 
    fr: 'Utilisez la puissance du réseau Hedera pour une transparence totale et une traçabilité immuable de vos transactions comptables.', 
    en: 'Leverage the power of Hedera network for total transparency and immutable traceability of your accounting transactions.' 
  },
  'hero.cta': { fr: 'Lancer l\'App', en: 'Launch App' },
  'hero.github': { fr: 'Voir sur GitHub', en: 'View on GitHub' },
  
  // Video Section
  'video.title': { fr: 'Découvrez Comptara en action', en: 'See Comptara in action' },
  'video.subtitle': { 
    fr: 'Une démonstration complète de notre solution de comptabilité blockchain', 
    en: 'A complete demonstration of our blockchain accounting solution' 
  },
  
  // Features
  'features.title': { fr: 'Fonctionnalités puissantes', en: 'Powerful Features' },
  'features.subtitle': { 
    fr: 'Tout ce dont vous avez besoin pour une comptabilité moderne et sécurisée', 
    en: 'Everything you need for modern and secure accounting' 
  },
  'features.hedera.title': { fr: 'Hedera Testnet', en: 'Hedera Testnet' },
  'features.hedera.desc': { 
    fr: 'Intégration Hashpack pour des transactions immuables sur la blockchain.', 
    en: 'Hashpack integration for immutable blockchain transactions.' 
  },
  'features.audit.title': { fr: 'Audit Real-time', en: 'Real-time Audit' },
  'features.audit.desc': { 
    fr: 'Visualisation directe de vos transactions sur HashScan.', 
    en: 'Direct visualization of your transactions on HashScan.' 
  },
  'features.offline.title': { fr: 'Offline Sync', en: 'Offline Sync' },
  'features.offline.desc': { 
    fr: 'Travaillez sans réseau avec synchronisation automatique.', 
    en: 'Work offline with automatic synchronization.' 
  },
  'features.exports.title': { fr: 'Exports Pro', en: 'Pro Exports' },
  'features.exports.desc': { 
    fr: 'Génération de rapports PDF/CSV en un clic.', 
    en: 'One-click PDF/CSV report generation.' 
  },
  'features.drive.title': { fr: 'Google Drive', en: 'Google Drive' },
  'features.drive.desc': { 
    fr: 'Sauvegarde sécurisée de vos données dans le cloud.', 
    en: 'Secure cloud backup of your data.' 
  },
  'features.security.title': { fr: 'Sécurité Maximale', en: 'Maximum Security' },
  'features.security.desc': { 
    fr: 'Chiffrement de bout en bout pour protéger vos données.', 
    en: 'End-to-end encryption to protect your data.' 
  },
  
  // Tech Stack
  'tech.title': { fr: 'Stack Technique', en: 'Tech Stack' },
  'tech.subtitle': { 
    fr: 'Construit avec les technologies les plus modernes', 
    en: 'Built with the most modern technologies' 
  },
  
  // Testimonials
  'testimonials.title': { fr: 'Ce qu\'ils en disent', en: 'What they say' },
  'testimonials.subtitle': { 
    fr: 'Des professionnels qui font confiance à Comptara', 
    en: 'Professionals who trust Comptara' 
  },
  
  // Contact
  'contact.title': { fr: 'Contactez-nous', en: 'Contact Us' },
  'contact.subtitle': { 
    fr: 'Une question ? Nous sommes là pour vous aider.', 
    en: 'Have a question? We\'re here to help.' 
  },
  'contact.name': { fr: 'Nom', en: 'Name' },
  'contact.email': { fr: 'Email', en: 'Email' },
  'contact.message': { fr: 'Message', en: 'Message' },
  'contact.send': { fr: 'Envoyer', en: 'Send' },
  'contact.github': { 
    fr: 'Rejoignez notre communauté open-source sur GitHub', 
    en: 'Join our open-source community on GitHub' 
  },
  
  // Footer
  'footer.rights': { fr: 'Tous droits réservés.', en: 'All rights reserved.' },
  'footer.designed': { fr: 'Designed by promé', en: 'Designed by promé' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
