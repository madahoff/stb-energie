import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  Users, Award, Shield, Clock, CheckCircle2, Building2,
  Heart, Target, ArrowRight, FileCheck
} from 'lucide-react';
import logoStb from '@/assets/logo-stb.jpeg';

const values = [
  {
    icon: Heart,
    title: "À l'écoute",
    description: "Nous prenons le temps de comprendre vos besoins spécifiques pour proposer des solutions adaptées.",
  },
  {
    icon: Award,
    title: "Qualité",
    description: "Un travail soigné qui dure dans le temps, réalisé dans les règles de l'art.",
  },
  {
    icon: Target,
    title: "Fiabilité",
    description: "Respect des délais et des engagements. Communication transparente tout au long du projet.",
  },
  {
    icon: Shield,
    title: "Sécurité",
    description: "Installations conformes aux normes en vigueur, garantissant votre sécurité.",
  },
];

const certifications = [
  "Qualification professionnelle électricien",
  "Assurance décennale",
  "Assurance responsabilité civile professionnelle",
  "Habilitations électriques à jour",
  "Formation continue aux nouvelles normes",
];

const teamQualities = [
  "Accessibles et à votre écoute",
  "Qualifiée et expérimentée",
  "Sérieuse et professionnelle",
  "Formée aux dernières technologies",
];

const Entreprise = () => {
  return (
    <>
      <Helmet>
        <title>Notre Entreprise | STB énergie - 30 ans d'expertise électrique</title>
        <meta
          name="description"
          content="Découvrez STB énergie, entreprise d'électricité à Marseille depuis 30 ans. Expertise technique, qualifications professionnelles et engagement qualité."
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
                Solution Technique <span className="text-accent">du Bâtiment</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Énergie, technique et sécurité depuis plus de 30 ans.
              </p>
            </div>
          </div>
        </section>

        {/* About section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider mb-4">
                  Qui sommes-nous
                </span>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">STB énergie</strong> répond à tous vos besoins dans le domaine de l'électricité, 
                    du conseil à l'étude et la réalisation de vos travaux domestiques 
                    et tertiaires, basée à Marseille.
                  </p>
                  <p>
                    Forte de plus de 30 années d'expérience, notre équipe qualifiée intervient
                    sur des projets variés : installations neuves, rénovations, mises aux normes,
                    domotique et systèmes de sécurité.
                  </p>
                  <p>
                    Nous travaillons aussi bien avec les particuliers qu'avec les professionnels
                    en apportant la même exigence de qualité et de sécurité sur chaque chantier.
                  </p>
                </div>
                <div className="mt-8">
                  <Button variant="accent" size="lg" asChild className="rounded-full">
                    <Link to="/contact" className="gap-2">
                      Nous contacter
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-xl p-0 relative overflow-hidden aspect-square">
                  <img src={logoStb} alt="STB Logo" className="h-full w-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values section */}
        <section className="section-padding bg-secondary/50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider mb-4">
                Nos valeurs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ce qui nous <span className="text-accent">différencie</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-card rounded-3xl p-8 text-center shadow-stb-sm hover:shadow-stb-md transition-shadow border border-border/50"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="section-padding bg-primary">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold uppercase tracking-wider mb-4">
                  Notre équipe
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
                  Une équipe <span className="text-accent">qualifiée</span>
                </h2>

                <div className="space-y-4">
                  {teamQualities.map((quality, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-l-none rounded-r-full bg-stb-navy-light/50"
                    >
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-primary-foreground font-medium">{quality}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold uppercase tracking-wider mb-4">
                  Certifications
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
                  Nos <span className="text-accent">qualifications</span>
                </h2>

                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-r-none rounded-l-full bg-stb-navy-light/50"
                    >
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <FileCheck className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-primary-foreground font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company info */}
        <section className="section-padding ">
          <div className="container-custom">
            {/* Conteneur principal avec un fond très léger et sans ombre lourde */}
            <div className=" p-10 md:p-14 ">

              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-card-foreground tracking-tight">
                    Informations légales
                  </h2>
                  <div className="h-1 w-12 bg-accent mt-2 rounded-full"></div>
                </div>
                  <p className="text-muted-foreground text-sm md:text-right whitespace-nowrap">
                    Données officielles relatives à l'entreprise STB énergie.
                  </p>
              </div>

              {/* Grid avec séparateurs subtils */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10">

                {/* Raison sociale */}
                <div className="relative px-2 md:border-r border-border/60 last:border-none">
                  <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3">
                    Raison sociale
                  </p>
                  <div className="space-y-1">
                    <p className="text-xl font-bold text-card-foreground">STB énergie</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Solution Technique du Bâtiment
                    </p>
                  </div>
                </div>

                {/* SIRET */}
                <div className="relative px-2 lg:px-8 md:border-r border-border/60 last:border-none">
                  <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3">
                    SIRET
                  </p>
                  <p className="text-xl font-semibold text-card-foreground tabular-nums">
                    103 967 006 00018
                  </p>
                </div>

                {/* RCS */}
                <div className="relative px-2 lg:px-8 md:border-r border-border/60 last:border-none">
                  <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3">
                    RCS
                  </p>
                  <p className="text-xl font-semibold text-card-foreground ">
                    Salon-de-Provence
                  </p>
                </div>

                {/* Code APE */}
                <div className="relative px-2 lg:px-8 md:border-r border-border/60 last:border-none">
                  <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3">
                    Code APE
                  </p>
                  <div className="space-y-1">
                    <p className="text-xl font-semibold text-card-foreground">4321A</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Travaux d'installation électrique
                    </p>
                  </div>
                </div>

                {/* Assurances */}
                <div className="relative px-2 lg:px-8">
                  <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3">
                    Assurances
                  </p>

                </div>

              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-accent">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-accent-foreground mb-4">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
              Contactez-nous pour discuter de vos besoins et obtenir un rendez-vous.
            </p>
            <Button variant="navy" size="lg" asChild className='rounded-full'>
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

export default Entreprise;
