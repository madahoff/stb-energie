import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoStb from '@/assets/logo-stb.jpeg';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Entreprise', href: '/entreprise' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-lg border-b border-primary-foreground/10`}>
      {/* Top bar */}
      <div className={`hidden md:block transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'bg-primary border-b border-primary-foreground/10'}`}>
        <div className="container-custom">
          <div className="flex justify-end items-center py-2 gap-6 text-sm text-primary-foreground/90">
            <a href="tel:0652556209" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>06 52 55 62 09</span>
            </a>
            <a href="mailto:contact@stb-energie.fr" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span>contact@stb-energie.fr</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom ">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-20' : 'h-28'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoStb}
              alt="STB énergie - Solution Technique du Bâtiment"
              className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-14' : 'h-24'}`}
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${location.pathname === item.href
                  ? 'text-accent'
                  : 'text-gray-500 hover:text-accent'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block ">
            <Button variant="accent" size="lg" asChild className="rounded-full">
              <Link to="/contact">Demander un rendez-vous</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`lg:hidden p-2 transition-colors text-primary`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-foreground/10 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-3 text-sm font-medium uppercase tracking-wider rounded-lg transition-colors ${location.pathname === item.href
                    ? 'bg-accent/20 text-accent'
                    : 'text-primary-foreground/80 hover:bg-primary-foreground/10'
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4 flex flex-col gap-3">
                <a href="tel:0652556209" className="flex items-center gap-2 text-primary-foreground/80">
                  <Phone className="w-4 h-4" />
                  <span>06 52 55 62 09</span>
                </a>
                <Button variant="accent" size="lg" asChild className="rounded-full w-full">
                  <Link to="/contact">Demander un rendez-vous</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
