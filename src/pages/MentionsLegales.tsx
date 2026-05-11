import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const MentionsLegales = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales | STB énergie</title>
        <meta name="description" content="Mentions légales du site STB énergie - Solution Technique du Bâtiment, électricien à Marseille." />
      </Helmet>
      <Layout>
        {/* Hero section */}
        <section className="bg-primary py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/2" />
          <div className="container-custom relative z-10">
            <h1 className="text-4xl font-bold text-primary-foreground text-center">
              Mentions <span className="text-accent">Légales</span>
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-stb-sm border border-border space-y-8">

                <div>
                  <h2 className="text-2xl font-bold text-card-foreground mb-4">
                    1. Informations légales
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p><strong className="text-card-foreground">Raison sociale :</strong> STB énergie - Solution Technique du Bâtiment</p>
                    <p><strong className="text-card-foreground">Forme juridique :</strong> [À compléter]</p>
                    <p><strong className="text-card-foreground">SIRET :</strong> 494 668 809 00028</p>
                    <p><strong className="text-card-foreground">RCS :</strong> Marseille</p>
                    <p><strong className="text-card-foreground">Code APE :</strong> 4321A - Travaux d'installation électrique</p>
                    <p><strong className="text-card-foreground">Siège social :</strong> Marseille, France</p>
                    <p><strong className="text-card-foreground">Téléphone :</strong> 06 52 55 62 09</p>
                    <p><strong className="text-card-foreground">Email :</strong> contact@stb-energie.fr</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-card-foreground mb-4">
                    2. Directeur de la publication
                  </h2>
                  <p className="text-muted-foreground">
                    Le directeur de la publication du site stb-energie.fr est le représentant légal de la société STB énergie.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-card-foreground mb-4">
                    3. Hébergement
                  </h2>
                  <p className="text-muted-foreground">
                    Ce site est hébergé par Lovable (Lovable Technologies).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-card-foreground mb-4">
                    4. Propriété intellectuelle
                  </h2>
                  <p className="text-muted-foreground">
                    L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est protégé par le droit d'auteur. 
                    Toute reproduction, même partielle, est strictement interdite sans autorisation préalable écrite de STB énergie.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-card-foreground mb-4">
                    5. Responsabilité
                  </h2>
                  <p className="text-muted-foreground">
                    STB énergie s'efforce d'assurer l'exactitude des informations diffusées sur ce site. 
                    Toutefois, elle ne saurait être tenue responsable des omissions, inexactitudes ou carences 
                    dans la mise à jour de ces informations. L'utilisateur reconnaît utiliser ces informations 
                    sous sa responsabilité exclusive.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-card-foreground mb-4">
                    6. Assurances professionnelles
                  </h2>
                  <p className="text-muted-foreground">
                    STB énergie dispose des assurances professionnelles obligatoires pour l'exercice de son activité, 
                    notamment l'assurance décennale et l'assurance responsabilité civile professionnelle.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-card-foreground mb-4">
                    7. Liens hypertextes
                  </h2>
                  <p className="text-muted-foreground">
                    Les liens hypertextes présents sur ce site et orientant vers d'autres sites internet 
                    ne sauraient engager la responsabilité de STB énergie quant au contenu de ces sites.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-card-foreground mb-4">
                    8. Droit applicable
                  </h2>
                  <p className="text-muted-foreground">
                    Les présentes mentions légales sont régies par le droit français.
                    En cas de litige, les tribunaux français seront seuls compétents.
                  </p>
                </div>

                <div className="pt-8 border-t border-border">
                  <p className="text-muted-foreground text-sm">
                    Dernière mise à jour : Janvier 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default MentionsLegales;
