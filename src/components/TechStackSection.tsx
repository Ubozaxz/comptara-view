import { useLanguage } from '@/contexts/LanguageContext';

const TechStackSection = () => {
  const { t } = useLanguage();

  const technologies = [
    { name: 'Next.js', color: 'from-gray-600 to-gray-800' },
    { name: 'Tailwind CSS', color: 'from-cyan-500 to-blue-500' },
    { name: 'Blockchain', color: 'from-purple-500 to-indigo-600' },
    { name: 'TypeScript', color: 'from-blue-500 to-blue-700' },
    { name: 'React', color: 'from-cyan-400 to-blue-500' },
  ];

  return (
    <section id="tech" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('tech.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('tech.subtitle')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative px-6 py-3 rounded-full bg-card border border-border hover:border-transparent transition-all duration-300 cursor-default"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              {/* Text */}
              <span className="relative text-sm font-medium text-foreground group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
