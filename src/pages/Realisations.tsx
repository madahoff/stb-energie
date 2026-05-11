import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  Building2, Hospital, Home, Briefcase, ArrowRight,
  CheckCircle2, MapPin, Calendar
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Centre Hospitalier Régional',
    category: 'Établissement de santé',
    location: 'Marseille',
    year: '2024',
    description: 'Rénovation complète du système électrique de 3 services, incluant les installations de sécurité incendie et le courant faible.',
    services: ['Électricité générale', 'Alarme incendie', 'Courant faible'],
    icon: Hospital,
  },
  {
    id: 2,
    title: 'Immeuble de bureaux Le Prado',
    category: 'Tertiaire',
    location: 'Marseille 8ème',
    year: '2024',
    description: 'Installation électrique complète d\'un plateau de 800m², intégrant domotique et gestion technique du bâtiment.',
    services: ['Installation neuve', 'Domotique', 'Réseau informatique'],
    icon: Building2,
  },
  {
    id: 3,
    title: 'Résidence Les Oliviers',
    category: 'Résidentiel',
    location: 'Aix-en-Provence',
    year: '2023',
    description: 'Mise aux normes électrique et installation domotique complète pour une villa de 250m².',
    services: ['Mise aux normes', 'Domotique', 'VMC'],
    icon: Home,
  },
  {
    id: 4,
    title: 'Clinique Saint-Martin',
    category: 'Établissement de santé',
    location: 'Marseille',
    year: '2023',
    description: 'Extension du système de sécurité incendie et contrôle d\'accès pour une nouvelle aile de 40 chambres.',
    services: ['Alarme incendie', 'Contrôle d\'accès', 'Vidéosurveillance'],
    icon: Hospital,
  },
  {
    id: 5,
    title: 'Complexe commercial La Valentine',
    category: 'Commercial',
    location: 'Marseille 11ème',
    year: '2023',
    description: 'Installation électrique de 5 boutiques, éclairage architectural et systèmes de sécurité centralisés.',
    services: ['Électricité commerciale', 'Éclairage LED', 'Alarme intrusion'],
    icon: Briefcase,
  },
  {
    id: 6,
    title: 'EHPAD Les Mimosas',
    category: 'Établissement de santé',
    location: 'La Ciotat',
    year: '2022',
    description: 'Rénovation électrique et mise en conformité des systèmes de sécurité pour 80 résidents.',
    services: ['Rénovation', 'Alarme incendie', 'Appel malade'],
    icon: Hospital,
  },
];

const stats = [
  { value: '500+', label: 'Projets réalisés' },
  { value: '30', label: 'Années d\'expérience' },
  { value: '100%', label: 'Clients satisfaits' },
  { value: 'PACA', label: 'Zone d\'intervention' },
];

const Realisations = () => {
  return (
    <>
      <Helmet>
        <title>Nos Réalisations | STB énergie - Projets électriques à Marseille</title>
        <meta
          name="description"
          content="Découvrez nos réalisations : installations électriques pour hôpitaux, bureaux, commerces et particuliers à Marseille et région PACA."
        />
      </Helmet>
      <Layout>
        {/* Hero section */}
        <section className="bg-primary py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-stb-navy-light/50 translate-y-1/2 -translate-x-1/2" />
          <div className="container-custom relative z-10">
            <div className="text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold uppercase tracking-wider mb-4">
                Nos réalisations
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Nos <span className="text-accent">références</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Découvrez une sélection de nos projets réalisés pour des clients
                professionnels et particuliers.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-accent">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-accent-foreground/80 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-stb-sm hover:shadow-stb-lg transition-all duration-300 border border-border/50 group"
                >
                  {/* Project header */}
                  <div className="bg-primary p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                        <project.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
                      </div>
                      <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-primary-foreground">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Project content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs"
                        >
                          <CheckCircle2 className="w-3 h-3 text-accent" />
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust section */}
        <section className="section-padding bg-secondary/50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider mb-4">
                  Ils nous font confiance
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Une expertise reconnue par les <span className="text-accent">professionnels</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Depuis plus de 30 ans, nous accompagnons les établissements de santé,
                  les entreprises et les particuliers dans leurs projets électriques.
                  Notre expertise et notre sérieux nous ont permis de bâtir une relation
                  de confiance durable avec nos clients.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Établissements hospitaliers et cliniques',
                    'EHPAD et maisons de retraite',
                    'Bureaux et locaux commerciaux',
                    'Syndics de copropriété',
                    'Particuliers exigeants',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary rounded-3xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold text-accent mb-2">100%</div>
                  <div className="text-primary-foreground text-xl font-semibold">
                    Satisfaction client
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    'Qualité d\'exécution',
                    'Respect des délais',
                    'Communication transparente',
                    'Service après-vente réactif',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-3 rounded-xl bg-stb-navy-light/50"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-primary-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-accent">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-accent-foreground mb-4">
              Votre projet sera notre prochaine référence
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
              Contactez-nous pour discuter de votre projet et rejoindre nos clients satisfaits.
            </p>
            <Button variant="navy" size="lg" asChild className="rounded-full">
              <Link to="/contact" className="gap-2">
                Demander un rendez-vous
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Realisations;
