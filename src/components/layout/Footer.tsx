import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logoStb from '@/assets/logo-stb.jpeg';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Decorative shapes */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-stb-navy-light/50 translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom relative z-10">
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company info */}
            <div className="space-y-6">
              <img
                src={logoStb}
                alt="STB énergie"
                className="h-16 w-auto object-contain bg-primary-foreground rounded-lg p-2"
              />
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Solution Technique du Bâtiment - Votre partenaire électricité depuis plus de 30 ans. Expertise, qualité et sécurité.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-accent font-semibold">SIRET:</span>
                <span className="text-primary-foreground/70">103 967 006 00018</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-accent font-semibold">RCS:</span>
                <span className="text-primary-foreground/70">Salon-de-Provence</span>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-primary-foreground">Navigation</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Accueil', href: '/' },
                  { name: 'Notre entreprise', href: '/entreprise' },
                  { name: 'Nos services', href: '/services' },
                  { name: 'Contact', href: '/contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-primary-foreground">Nos Services</h4>
              <ul className="space-y-3">
                {[
                  'Électricité générale',
                  'VMC & Chauffage',
                  'Climatisation',
                  'Domotique',
                  'Borne de recharge véhicule',
                  'Réseaux',
                  'Contrôle d\'accès',
                  'Alarme & Sécurité',
                ].map((service) => (
                  <li key={service}>
                    <span className="text-primary-foreground/70 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-primary-foreground">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:0652556209"
                    className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors group"
                  >
                    <Phone className="w-5 h-5 mt-0.5 text-accent" />
                    <span className="text-sm">06 52 55 62 09</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@stb-energie.fr"
                    className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    <Mail className="w-5 h-5 mt-0.5 text-accent" />
                    <span className="text-sm">contact@stb-energie.fr</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-primary-foreground/70">
                  <MapPin className="w-5 h-5 mt-0.5 text-accent" />
                  <span className="text-sm">765 boulevard des Ventadouiro <br />13300 Salon-de-Provence</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="py-6 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} STB énergie. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link to="/mentions-legales" className="text-primary-foreground/50 hover:text-accent text-sm transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="text-primary-foreground/50 hover:text-accent text-sm transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
