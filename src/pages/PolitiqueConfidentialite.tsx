import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const PolitiqueConfidentialite = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité | STB énergie</title>
        <meta name="description" content="Politique de confidentialité et protection des données personnelles - STB énergie, électricien à Marseille." />
      </Helmet>
      <Layout>
        {/* Hero section */}
        <section className="bg-primary py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/2" />
          <div className="container-custom relative z-10">
            <h1 className="text-4xl font-bold text-primary-foreground text-center">
              Politique de <span className="text-accent">Confidentialité</span>
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container-custom max-w-4xl">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-stb-sm border border-border space-y-8">

              <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  1. Introduction
                </h2>
                <p className="text-muted-foreground">
                  STB énergie s'engage à protéger la vie privée des utilisateurs de son site internet. 
                  Cette politique de confidentialité explique comment nous collectons, utilisons et 
                  protégeons vos données personnelles, conformément au Règlement Général sur la 
                  Protection des Données (RGPD).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  2. Responsable du traitement
                </h2>
                <div className="text-muted-foreground space-y-2">
                  <p><strong className="text-card-foreground">STB énergie</strong></p>
                  <p>Solution Technique du Bâtiment</p>
                  <p>Marseille, France</p>
                  <p>Email : contact@stb-energie.fr</p>
                  <p>Téléphone : 06 52 55 62 09</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  3. Données collectées
                </h2>
                <p className="text-muted-foreground mb-4">
                  Nous collectons les données personnelles suivantes lorsque vous utilisez notre formulaire de contact :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Contenu de votre message</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  4. Finalités du traitement
                </h2>
                <p className="text-muted-foreground mb-4">
                  Vos données personnelles sont collectées pour les finalités suivantes :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Répondre à vos demandes de contact et de devis</li>
                  <li>Assurer le suivi de votre projet</li>
                  <li>Vous contacter par téléphone ou email concernant votre demande</li>
                  <li>Améliorer nos services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  5. Base légale du traitement
                </h2>
                <p className="text-muted-foreground">
                  Le traitement de vos données personnelles est fondé sur votre consentement,
                  donné lors de la soumission du formulaire de contact, ainsi que sur l'exécution
                  de mesures précontractuelles prises à votre demande (établissement de devis).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  6. Durée de conservation
                </h2>
                <p className="text-muted-foreground">
                  Vos données personnelles sont conservées pendant une durée de 3 ans à compter
                  de votre dernière interaction avec notre entreprise, sauf obligation légale
                  de conservation plus longue.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  7. Destinataires des données
                </h2>
                <p className="text-muted-foreground">
                  Vos données personnelles sont destinées uniquement aux membres de l'équipe 
                  STB énergie habilités à traiter les demandes de contact et de devis. 
                  Elles ne sont jamais vendues ni transmises à des tiers à des fins commerciales.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  8. Vos droits
                </h2>
                <p className="text-muted-foreground mb-4">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong className="text-card-foreground">Droit d'accès :</strong> obtenir confirmation du traitement de vos données et y accéder</li>
                  <li><strong className="text-card-foreground">Droit de rectification :</strong> demander la correction de données inexactes</li>
                  <li><strong className="text-card-foreground">Droit à l'effacement :</strong> demander la suppression de vos données</li>
                  <li><strong className="text-card-foreground">Droit à la limitation :</strong> demander la limitation du traitement</li>
                  <li><strong className="text-card-foreground">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                  <li><strong className="text-card-foreground">Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Pour exercer ces droits, contactez-nous à : contact@stb-energie.fr
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  9. Cookies
                </h2>
                <p className="text-muted-foreground">
                  Ce site utilise uniquement des cookies techniques essentiels au fonctionnement
                  du site. Aucun cookie de tracking ou publicitaire n'est utilisé. Ces cookies
                  ne collectent aucune donnée personnelle.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  10. Sécurité
                </h2>
                <p className="text-muted-foreground">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
                  pour protéger vos données personnelles contre tout accès non autorisé,
                  modification, divulgation ou destruction. Notre site utilise le protocole
                  HTTPS pour sécuriser les échanges de données.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  11. Réclamation
                </h2>
                <p className="text-muted-foreground">
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire
                  une réclamation auprès de la Commission Nationale de l'Informatique et des
                  Libertés (CNIL) : www.cnil.fr
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  12. Modification de la politique
                </h2>
                <p className="text-muted-foreground">
                  STB énergie se réserve le droit de modifier cette politique de confidentialité 
                  à tout moment. Les modifications seront publiées sur cette page avec la date 
                  de mise à jour.
                </p>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-muted-foreground text-sm">
                  Dernière mise à jour : Janvier 2026
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default PolitiqueConfidentialite;
