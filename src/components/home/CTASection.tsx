import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Mail, ArrowRight, FileText } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-48 h-48 rounded-r-full bg-accent/5 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-48 h-48 rounded-l-full bg-primary/5 -translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="bg-primary rounded-3xl p-8 md:p-16 relative overflow-hidden">

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold uppercase tracking-wider mb-6">
              Contactez-nous
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Besoin d'un{' '}
              <span className="text-accent">électricien qualifié</span> ?
            </h2>

            <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
              Que ce soit pour un projet neuf, une rénovation ou une mise aux normes,
              notre équipe est à votre disposition pour étudier vos besoins.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button variant="hero" asChild className="rounded-full">
                <Link to="/contact" className="gap-2">
                  <FileText className="w-5 h-5" />
                  Demander un rendez-vous
                </Link>
              </Button>

            </div>

            {/* Contact info cards */}
            <div className="grid md:grid-cols-2  max-w-xl mx-auto">
              <a
                href="tel:0652556209"
                className="flex items-center gap-4 p-5  hover:bg-stb-navy-light transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-primary-foreground/60 text-xs uppercase tracking-wider">Téléphone</p>
                  <p className="text-primary-foreground font-semibold">06 52 55 62 09</p>
                </div>
              </a>
              <a
                href="mailto:contact@stb-energie.fr"
                className="flex items-center gap-4 p-2 hover:bg-stb-navy-light transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-primary-foreground/60 text-xs uppercase tracking-wider">Email</p>
                  <p className="text-primary-foreground font-semibold">contact@stb-energie.fr</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
