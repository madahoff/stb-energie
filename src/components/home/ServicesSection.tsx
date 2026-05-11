import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Zap, Wifi, Shield, Thermometer, Home, ArrowRight, DoorOpen, Snowflake, Plug } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Électricité Générale',
    description: 'Installation, rénovation et mise aux normes de vos installations électriques domestiques et tertiaires.',
    category: 'Courant Fort',
  },
  {
    icon: Thermometer,
    title: 'VMC & Chauffage',
    description: 'Systèmes de ventilation et solutions de chauffage électrique performantes et économiques.',
    category: 'Courant Fort',
  },
  {
    icon: Snowflake,
    title: 'Climatisation',
    description: 'Climatisation réversible, pompes à chaleur, gainables ...',
    category: 'Courant Fort',
  },
  {
    icon: Plug,
    title: 'Bornes de recharge véhicules',
    description: 'Installation de bornes de recharge pour véhicules électriques à domicile ou en entreprise.',
    category: 'Courant Fort',
  },
  {
    icon: Home,
    title: 'Domotique',
    description: 'Automatisation et contrôle intelligent de votre habitat pour plus de confort et d\'économie.',
    category: 'Courant Fort',
  },
  {
    icon: DoorOpen,
    title: 'Contrôle d\'accès',
    description: 'Interphones, vidéophones et systèmes de contrôle d\'accès pour sécuriser votre habitat et vos locaux.',
    category: 'Courant Faible',
  },
  {
    icon: Shield,
    title: 'Alarme & Sécurité',
    description: 'Alarme intrusion, alarme incendie et systèmes de surveillance pour votre protection.',
    category: 'Courant Faible',
  },
  {
    icon: Wifi,
    title: 'Réseaux',
    description: 'Installation de réseaux téléphoniques et informatiques pour particuliers et entreprises.',
    category: 'Courant Faible',
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 rounded-br-full bg-accent/5" />
      <div className="absolute bottom-0 right-0 w-48 h-48 rounded-tl-full bg-primary/5" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider mb-4">
            Nos services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Secteurs d'intervention :{' '}
            <span className="text-accent">Domestique & Tertiaire</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Nous saurons proposer les solutions techniques et économiques pour vos installations
            neuves ou en rénovation.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-3xl p-8 shadow-stb-sm hover:shadow-stb-lg transition-all duration-300 border border-border/50 hover:border-accent/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category badge */}
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${service.category === 'Courant Fort'
                ? 'bg-primary/10 text-primary'
                : 'bg-accent/10 text-accent'
                }`}>
                {service.category}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="navy" size="lg" asChild className="rounded-full">
            <Link to="/services" className="gap-2">
              Voir tous nos services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
