import { FileText, ClipboardList, HardHat, Wrench, CheckSquare, MessageSquare } from 'lucide-react';

const servicesProposed = [
  { icon: MessageSquare, label: 'Conseils', description: 'Accompagnement personnalisé' },
  { icon: FileText, label: 'Études', description: 'Analyse détaillée' },
  { icon: ClipboardList, label: 'Assistance Administrative', description: 'Gestion des démarches' },
  { icon: FileText, label: 'Devis', description: 'Chiffrage précis et transparent' },
  { icon: HardHat, label: 'Travaux', description: 'Réalisation et suivi' },
  { icon: CheckSquare, label: 'Suivi de Chantier', description: 'Contrôle qualité permanent' },
];

const ServicesProposesSection = () => {
  return (
    <section className="py-16 bg-secondary/50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
         
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Services <span className="text-accent">proposés</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center ">
        {servicesProposed.map((service, index) => {
          // Vérification de l'alternance
          const isAlternated = index % 2 == 0;

          return (
            <div
              key={service.label}
              className={`group flex flex-col items-center p-6  transition-all duration-300 ${
                isAlternated 
                  ? "bg-primary text-white" 
                  : "bg-transparent"
              }`}
            >
              <div 
                className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors ${
                  isAlternated 
                    ? "bg-white/20" // Fond d'icône plus clair sur fond bleu
                    : "bg-primary group-hover:bg-accent"
                }`}
              >
                <service.icon 
                  className={`w-7 h-7 ${
                    isAlternated ? "text-white" : "text-primary-foreground"
                  }`} 
                />
              </div>
              
              <h3 className={`font-semibold text-center text-sm ${
                isAlternated ? "text-white" : "text-card-foreground"
              }`}>
                {service.label}
              </h3>
              
              <p className={`text-xs text-center mt-2 ${
                isAlternated ? "text-white/90" : "text-muted-foreground"
              }`}>
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default ServicesProposesSection;
