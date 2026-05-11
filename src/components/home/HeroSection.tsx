import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Award, Clock } from 'lucide-react';
import logoStb from '@/assets/logo-stb.jpeg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] bg-primary overflow-hidden flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Large green circle top right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/20 animate-pulse-soft" />
        {/* Navy light circle bottom left */}
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full bg-stb-navy-light/50" />
        {/* Small accent circle */}
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-accent/30 animate-float" />
        {/* Quarter circle decoration */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-tl-full" />
        {/* Electric pattern overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L35 25H25L30 5ZM30 55L25 35H35L30 55Z' fill='%2300D68F' fill-opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              30 ans d'expertise sur le terrain
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Solutions Techniques{' '}
              <span className="text-accent">du Bâtiment</span>
            </h1>

            <p className="text-lg text-primary-foreground/80 max-w-lg leading-relaxed">
              Nous proposons des solutions techniques et économiques
              pour vos installations neuves ou en rénovation. <br />
              Nous intervenons dans les domaines du domestique et du tertiaire
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" asChild className="rounded-full">
                <Link to="/contact" className="gap-2">
                  Demander un rendez-vous
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" asChild className="rounded-full">
                <Link to="/services">Découvrir nos services</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 grid grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-primary-foreground font-semibold text-sm">Certifié</p>
                  <p className="text-primary-foreground/60 text-xs">Qualifications</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-primary-foreground font-semibold text-sm">Qualifié</p>
                  <p className="text-primary-foreground/60 text-xs">Expertise</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-primary-foreground font-semibold text-sm">Réactif</p>
                  <p className="text-primary-foreground/60 text-xs">24h/48h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual element */}
          <div className="bg-white rounded-xl p-0 relative overflow-hidden aspect-square">
            <img src={logoStb} alt="STB Logo" className="h-full w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
