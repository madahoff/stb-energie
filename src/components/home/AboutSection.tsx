import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Users, CheckCircle2, ArrowRight } from 'lucide-react';

const strengths = [
  "L'écoute de vos besoins",
  "Des conseils et des solutions",
  "Des offres de prix compétitives",
  "Du travail de qualité",
  "Le respect du planning",
  "Communication continue jusqu'à la livraison",
  "Formation sur les équipements installés",
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative geometric shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-stb-navy-light/50 translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-accent/20" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Team info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Notre <span className="text-accent">Équipe</span>
              </h2>
            </div>

            <div className="space-y-4">
            {/* Premier élément */}
            <div className="flex items-center gap-4 p-4 rounded-r-full rounded-l-none bg-stb-navy-light/50">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">Accessible et à votre écoute</p>
              </div>
            </div>

            {/* Deuxième élément */}
            <div className="flex items-center gap-4 p-4 rounded-r-full rounded-l-none bg-stb-navy-light/50">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">Qualifiée</p>
              </div>
            </div>

            {/* Troisième élément */}
            <div className="flex items-center gap-4 p-4 rounded-r-full rounded-l-none bg-stb-navy-light/50">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">Sérieuse</p>
              </div>
            </div>
            </div>

            {/* Experience highlight */}
            <div className=" p-8 ">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-6xl font-bold text-accent">30</span>
                <span className="text-2xl font-bold text-primary-foreground">ans d'expérience sur le terrain</span>
              </div>
             
              <p className="text-primary-foreground/70 text-sm">
                Assistance technique en bureaux d'études
              </p>
            </div>
          </div>

          {/* Right column - Atouts */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Nos <span className="text-accent">Atouts</span>
              </h2>
            </div>

            <ul className="space-y-4">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-primary-foreground/90">{strength}</span>
                </li>
              ))}
            </ul>

            <Button variant="accent" size="lg" asChild className="rounded-full">
              <Link to="/entreprise" className="gap-2">
                En savoir plus sur nous
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
