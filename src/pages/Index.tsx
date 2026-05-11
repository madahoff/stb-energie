import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import ServicesProposesSection from '@/components/home/ServicesProposesSection';
import AboutSection from '@/components/home/AboutSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>STB énergie | Électricien à Marseille - Solution Technique du Bâtiment</title>
        <meta 
          name="description" 
          content="STB énergie, votre électricien à Marseille depuis 30 ans. Expertise en électricité générale, courant fort et faible, domotique, alarme. Devis gratuit." 
        />
        <meta name="keywords" content="électricien Marseille, électricité bâtiment, courant fort, courant faible, domotique, alarme, STB énergie" />
        <link rel="canonical" href="https://stb-energie.fr" />
      </Helmet>
      <Layout>
        <HeroSection />
        <ServicesSection />
        <ServicesProposesSection />
        <AboutSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
