import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  Zap, Thermometer, Home, Wifi, Shield, Phone as PhoneIcon,
  ArrowRight, CheckCircle2, Building2, Hospital, Lightbulb,
  Cable, Bell, Lock, Snowflake, Plug
} from 'lucide-react';

const courantFort = [
  {
    icon: Zap,
    title: 'Électricité Générale',
    description: 'Installation, rénovation, dépannage et mise aux normes de vos installations électriques. ',
    features: ['Tableaux éléctriques', 'Cheminement ', 'Appareillage', 'Câblage'],
  },
  {
    icon: Thermometer,
    title: 'VMC & Chauffage',
    description: 'Systèmes de ventilation mécanique contrôlée et solutions de chauffage électrique performantes et économiques.',
    features: ['VMC simple flux', 'VMC double flux', 'Radiateurs électriques', 'Plancher chauffant'],
  },
  {
    icon: Lightbulb,
    title: 'Éclairage',
    description: 'Conception et installation de systèmes d\'éclairage en solutions économiques.',
    features: ['Éclairage intérieur', 'Éclairage extérieur', 'Automatisation', 'Mise en valeur'],
  },
  {
    icon: Home,
    title: 'Domotique',
    description: 'Automatisation et contrôle intelligent de votre habitat pour plus de confort, de sécurité et d\'économies d\'énergie.',
    features: ['Gestion éclairage', 'Volets roulants', 'Thermostat connecté'],
  },
  {
    icon: Snowflake,
    title: 'Climatisation',
    description: 'Climatisation réversible, pompes à chaleur et systèmes gainables pour un confort thermique optimal en toute saison.',
    features: ['Clim réversible', 'Pompe à chaleur', 'Gainable', 'Entretien'],
  },
  {
    icon: Plug,
    title: 'Bornes de recharge véhicules',
    description: 'Installation de bornes de recharge pour véhicules électriques et hybrides, à domicile ou en entreprise.',
    features: ['Borne domicile', 'Borne entreprise', 'Mise aux normes', 'Conseil'],
  },
];

const courantFaible = [
  {
    icon: Lock,
    title: 'Contrôle d\'accès',
    description: 'Systèmes d\'interphonie, vidéophonie et contrôle d\'accès pour sécuriser vos locaux professionnels et résidentiels.',
    features: ['Interphone', 'Vidéophone', 'Badges', 'Digicodes'],
  },
  {
    icon: Wifi,
    title: 'Réseaux',
    description: 'Installation de réseaux téléphoniques et informatiques structurés pour particuliers et entreprises.',
    features: ['Câblage RJ45', 'Baies de brassage'],
  },
  {
    icon: Bell,
    title: 'Alarme Intrusion',
    description: 'Systèmes d\'alarme anti-intrusion pour protéger vos biens et votre famille, avec télésurveillance possible.',
    features: ['Détecteurs', 'Centrale d\'alarme', 'Télésurveillance', 'Application mobile'],
  },
  {
    icon: Shield,
    title: 'Alarme Incendie',
    description: 'Systèmes de sécurité incendie conformes aux normes, essentiels pour les ERP et établissements de santé.',
    features: ['Détecteurs fumée', 'Centrale incendie', 'Sirène', 'Conformité ERP'],
  },
];

const sectors = [
  {
    icon: Home,
    title: 'Particuliers',
    description: 'Maisons individuelles et appartements',
  },
  {
    icon: Building2,
    title: 'Tertiaire',
    description: 'Bureaux, commerces et locaux professionnels',
  },
  {
    icon: Hospital,
    title: 'Établissements de santé',
    description: 'Hôpitaux, cliniques et maisons de retraite',
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Nos Services | STB énergie - Électricité, Domotique, Sécurité</title>
        <meta
          name="description"
          content="Découvrez tous nos services électriques : courant fort, courant faible, domotique, alarme, VMC. Interventions à Marseille et région PACA."
        />
      </Helmet>
      <Layout>
        {/* Hero section */}
        <section className="bg-primary py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-stb-navy-light/50 translate-y-1/2 -translate-x-1/2" />
          <div className="container-custom relative z-10">
            <div className="text-center">

              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Nos <span className="text-accent">services</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Secteurs d'intervention : domestique et tertiaire.
                <br />
                Nous proposons des solutions techniques et économiques pour vos installations.
              </p>
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="py-20 bg-background border-b border-border/40">
          <div className="container-custom">
            {/* En-tête de section optionnel pour plus de contexte */}
            <div className="mb-12">
              <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-2">Nos domaines d'intervention</p>
              <h2 className="text-2xl font-bold text-card-foreground">Secteurs d'activité</h2>
            </div>

            <div className="grid md:grid-cols-3">
              {sectors.map((sector, index) => (
                <div
                  key={sector.title}
                  className={`group relative flex flex-col items-start p-8 transition-all duration-300  
                    ${index !== sectors.length - 1 ? "md:border-r border-border/60" : ""} 
                    ${index === 0 ? "pl-0" : "md:px-10"} 
                    ${index === sectors.length - 1 ? "pr-0" : ""}`}
                >
                  {/* Icône avec un style plus "Blueprint/Ingénierie" */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-accent/5 flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
                      <sector.icon className="w-8 h-8 text-accent" />
                    </div>
                    {/* Petit élément décoratif discret */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-background border-2 border-accent/20 rounded-full"></div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-card-foreground mb-3 tracking-tight group-hover:text-accent transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px]">
                      {sector.description}
                    </p>
                  </div>

                  {/* Ligne d'accentuation invisible qui s'anime au hover */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-500 group-hover:w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courant Fort */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                Courant Fort
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Installations <span className="text-accent">électriques</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {courantFort.map((service) => (
                <div
                  key={service.title}
                  className="bg-card rounded-2xl p-8 shadow-stb-sm hover:shadow-stb-md transition-shadow border border-border/50 group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-card-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courant Faible */}
        <section className="section-padding bg-secondary/50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider mb-4">
                Courant Faible
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Sécurité & <span className="text-accent">Communication</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {courantFaible.map((service) => (
                <div
                  key={service.title}
                  className="bg-card rounded-2xl p-8 shadow-stb-sm hover:shadow-stb-md transition-shadow border border-border/50 group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <service.icon className="w-8 h-8 text-accent-foreground group-hover:text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-card-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className={`grid gap-2 ${service.features.length > 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-primary">
          <div className="container-custom">
            <div className="text-center mb-16">

              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                Notre <span className="text-accent">méthode</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { step: '01', label: 'Conseils', desc: 'Écoute de vos besoins' },
                { step: '02', label: 'Études', desc: 'Analyse technique' },
                { step: '03', label: 'Devis', desc: 'Offre détaillée' },
                { step: '04', label: 'Assistance', desc: 'Démarches admin' },
                { step: '05', label: 'Travaux', desc: 'Réalisation pro' },
                { step: '06', label: 'Suivi', desc: 'Contrôle qualité' },
              ].map((item, index) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 relative">
                    <span className="text-accent font-bold text-lg">{item.step}</span>
                    {index < 5 && (
                      <div className="hidden lg:block absolute left-full top-1/2 w-full h-0.5 bg-accent/30 -translate-y-1/2" />
                    )}
                  </div>
                  <h3 className="font-bold text-primary-foreground mb-1">{item.label}</h3>
                  <p className="text-primary-foreground/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="bg-card rounded-3xl p-8 md:p-16 text-center shadow-stb-lg border border-border">
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">
                Besoin d'un devis ?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Décrivez votre projet et recevez une estimation gratuite et sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="accent" size="lg" asChild className="rounded-full">
                  <Link to="/contact" className="gap-2">
                    Demander un rendez-vous
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
