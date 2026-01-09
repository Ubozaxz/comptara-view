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
  'nav.faq': { fr: 'FAQ', en: 'FAQ' },
  
  // Hero
  'hero.title': { 
    fr: 'La comptabilité on-chain, enfin simplifiée.', 
    en: 'On-chain accounting, simplified at last.' 
  },
  'hero.subtitle': { 
    fr: 'Bénéficiez d\'une transparence totale et d\'une traçabilité immuable de vos transactions comptables grâce à la blockchain.', 
    en: 'Benefit from total transparency and immutable traceability of your accounting transactions with blockchain technology.' 
  },
  'hero.cta': { fr: 'Lancer l\'App', en: 'Launch App' },
  'hero.github': { fr: 'Voir sur GitHub', en: 'View on GitHub' },
  'hero.badge': { fr: 'Comptabilité Blockchain', en: 'Blockchain Accounting' },
  
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
  'features.blockchain.title': { fr: 'Blockchain Sécurisée', en: 'Secure Blockchain' },
  'features.blockchain.desc': { 
    fr: 'Transactions immuables et vérifiables sur la blockchain.', 
    en: 'Immutable and verifiable transactions on the blockchain.' 
  },
  'features.audit.title': { fr: 'Audit Real-time', en: 'Real-time Audit' },
  'features.audit.desc': { 
    fr: 'Visualisation directe et traçabilité complète de vos transactions.', 
    en: 'Direct visualization and complete traceability of your transactions.' 
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
  
  // FAQ
  'faq.title': { fr: 'Questions fréquentes', en: 'Frequently Asked Questions' },
  'faq.subtitle': { 
    fr: 'Trouvez rapidement les réponses à vos questions', 
    en: 'Quickly find answers to your questions' 
  },
  'faq.q1': { 
    fr: 'Comment fonctionne la comptabilité blockchain ?', 
    en: 'How does blockchain accounting work?' 
  },
  'faq.a1': { 
    fr: 'Comptara enregistre chaque transaction sur la blockchain, garantissant une traçabilité totale et une immutabilité des données. Chaque écriture est horodatée et vérifiable.', 
    en: 'Comptara records each transaction on the blockchain, ensuring complete traceability and data immutability. Each entry is timestamped and verifiable.' 
  },
  'faq.q2': { 
    fr: 'Mes données sont-elles sécurisées ?', 
    en: 'Is my data secure?' 
  },
  'faq.a2': { 
    fr: 'Oui, toutes vos données sont chiffrées de bout en bout. La blockchain garantit l\'intégrité et l\'authenticité de chaque transaction.', 
    en: 'Yes, all your data is end-to-end encrypted. The blockchain ensures the integrity and authenticity of each transaction.' 
  },
  'faq.q3': { 
    fr: 'Puis-je utiliser Comptara hors ligne ?', 
    en: 'Can I use Comptara offline?' 
  },
  'faq.a3': { 
    fr: 'Absolument ! Comptara fonctionne en mode hors ligne avec synchronisation automatique dès que vous retrouvez une connexion internet.', 
    en: 'Absolutely! Comptara works offline with automatic synchronization as soon as you regain an internet connection.' 
  },
  'faq.q4': { 
    fr: 'Quels formats d\'export sont disponibles ?', 
    en: 'What export formats are available?' 
  },
  'faq.a4': { 
    fr: 'Vous pouvez exporter vos données en PDF et CSV en un clic. Les rapports sont formatés pour une utilisation professionnelle immédiate.', 
    en: 'You can export your data to PDF and CSV with one click. Reports are formatted for immediate professional use.' 
  },
  'faq.q5': { 
    fr: 'Comment contacter le support ?', 
    en: 'How can I contact support?' 
  },
  'faq.a5': { 
    fr: 'Vous pouvez nous contacter par email à ubozaxz@gmail.com ou via le formulaire de contact sur cette page.', 
    en: 'You can contact us by email at ubozaxz@gmail.com or via the contact form on this page.' 
  },
  
  // Comparison
  'comparison.title': { fr: 'Comptara vs Comptabilité Traditionnelle', en: 'Comptara vs Traditional Accounting' },
  'comparison.subtitle': { 
    fr: 'Découvrez pourquoi Comptara révolutionne la comptabilité', 
    en: 'Discover why Comptara revolutionizes accounting' 
  },
  'comparison.features': { fr: 'Fonctionnalités', en: 'Features' },
  'comparison.traditional': { fr: 'Traditionnel', en: 'Traditional' },
  'comparison.feature1': { fr: 'Traçabilité blockchain', en: 'Blockchain traceability' },
  'comparison.feature2': { fr: 'Données immuables', en: 'Immutable data' },
  'comparison.feature3': { fr: 'Export PDF/CSV', en: 'PDF/CSV export' },
  'comparison.feature4': { fr: 'Mode hors ligne', en: 'Offline mode' },
  'comparison.feature5': { fr: 'Sauvegarde cloud', en: 'Cloud backup' },
  'comparison.feature6': { fr: 'Audit en temps réel', en: 'Real-time audit' },
  'comparison.cta': { fr: 'Essayer Comptara gratuitement', en: 'Try Comptara for free' },
  
  // CTA Section
  'cta.badge': { fr: 'Prêt à commencer ?', en: 'Ready to start?' },
  'cta.title': { fr: 'Transformez votre comptabilité dès aujourd\'hui', en: 'Transform your accounting today' },
  'cta.subtitle': { 
    fr: 'Rejoignez les professionnels qui font confiance à Comptara pour une comptabilité transparente et sécurisée.', 
    en: 'Join the professionals who trust Comptara for transparent and secure accounting.' 
  },
  'cta.start': { fr: 'Commencer maintenant', en: 'Start now' },
  'cta.github': { fr: 'Voir le code source', en: 'View source code' },
  
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
  'contact.directEmail': { fr: 'Ou contactez-nous directement :', en: 'Or contact us directly:' },
  
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
