import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const CGV = () => {
  return (
    <>
      <Helmet>
        <title>Conditions Générales de Vente | STB énergie</title>
        <meta name="description" content="Conditions générales de vente (CGV) de STB énergie - Solution Technique du Bâtiment, électricien à Marseille." />
      </Helmet>
      <Layout>
        {/* Hero section */}
        <section className="bg-primary py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/2" />
          <div className="container-custom relative z-10">
            <h1 className="text-4xl font-bold text-primary-foreground text-center">
              Conditions Générales de <span className="text-accent">Vente</span>
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container-custom max-w-4xl">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-stb-sm border border-border space-y-8">

              <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  Article 1 – Champ d'application
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Les présentes Conditions Générales de Vente régissent les relations contractuelles
                    entre l'EURL STB énergie (ci-après « l'Entreprise ») et ses clients.
                  </p>
                  <p>
                    Elles s'appliquent aux prestations réalisées soit dans le cadre de marchés directs
                    auprès de clients particuliers ou d'entreprises du secteur public ou privé, soit dans
                    le cadre d'une sous-traitance pour le compte d'une société (ci-après « Entrepreneur Principal »).
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  Article 2 – Assurances et garanties
                </h2>
                <div className="text-muted-foreground space-y-2">
                  <p>
                    L'Entreprise est titulaire d'une assurance responsabilité civile professionnelle
                    couvrant les dommages liés à son activité d'électricité et de pose d'équipements
                    techniques, ainsi que d'une garantie décennale, lorsque celle-ci est applicable.
                  </p>
                  <p><strong className="text-card-foreground">Assureur :</strong> SMA BTP</p>
                  <p><strong className="text-card-foreground">Contrat n° :</strong> 8632000 / 003 209773/0</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  Article 3 – Formation du contrat et révision
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Le contrat est formé par l'acceptation du devis, matérialisée par sa signature
                    précédée de la mention « Bon pour accord ».
                  </p>
                  <p>Le devis est valable 2 mois à sa date d'émission.</p>
                  <p>
                    Conformément à l'article 1195 du Code civil, en cas de changement de circonstances
                    imprévisibles lors de la conclusion du contrat, notamment en cas de guerre,
                    catastrophe naturelle, pandémie ou hausse significative du coût des matières
                    premières, l'Entreprise se réserve le droit de renégocier les conditions tarifaires
                    ou de suspendre l'exécution du contrat sans pénalité.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  Article 4 – Exécution des travaux
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Les travaux sont exécutés conformément au planning directeur du chantier.
                    L'Entreprise ne peut être tenue responsable des retards imputables aux autres
                    corps d'état, aux modifications du planning par le client ou le donneur d'ordre,
                    ou à tout événement extérieur indépendant de sa volonté.
                  </p>
                  <p>
                    Le client s'engage à garantir l'accès au chantier et la conformité des supports,
                    notamment des murs, dalles et plafonds.
                  </p>
                  <p>
                    Pour la pose d'équipements spécifiques tels que les rails de transfert, les supports
                    doivent être conformes aux normes en vigueur, notamment la norme ISO 10535.
                    L'Entreprise décline toute responsabilité en cas de défaillance structurelle non
                    imputable à son intervention.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  Article 5 – Réception des travaux
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    La réception intervient à l'achèvement des travaux et donne lieu à la signature
                    d'un quitus ou d'un procès-verbal de réception.
                  </p>
                  <p>
                    La prise de possession des lieux vaut réception sans réserve, sauf mention contraire.
                  </p>
                  <p>
                    Dans le cadre de travaux complexes, l'Entreprise participe aux opérations préalables
                    à la réception (OPR). La levée des réserves marque la fin de l'intervention.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  Article 6 – Réserve de propriété
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    L'Entreprise conserve la propriété des matériels et équipements jusqu'au paiement
                    intégral du prix.
                  </p>
                  <p>Le transfert des risques intervient dès la livraison des travaux.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  Article 7 – Conditions de paiement
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Sauf conditions particulières prévues au devis, un acompte de 40% est exigible à
                    la signature du devis, 30% au démarrage des travaux et le solde de 30% à la
                    réception des travaux.
                  </p>
                  <p>
                    Le règlement est à effectuer à la réception de la facture, par virement bancaire
                    ou par chèque.
                  </p>
                  <p>
                    En cas de retard de paiement, des pénalités sont appliquées de plein droit. Son
                    taux d'intérêt sera calculé au prorata du taux d'intérêt annuel de la Banque
                    Centrale Européenne majoré de 10 points plus une indemnité forfaitaire de 40 €
                    pour frais de recouvrement
                    (<a
                      href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/key_ecb_interest_rates/html/index.fr.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      taux directeurs de la BCE
                    </a>).
                  </p>
                  <p className="italic">
                    Exemple : si le taux BCE est de 2,15 %, le taux appliqué sera de 12,15 %.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  Article 8 – Sous-traitance
                </h2>
                <div className="text-muted-foreground space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      8.1. Cadre de la mission
                    </h3>
                    <div className="space-y-2">
                      <p>
                        Conformément à la loi n°75-1334 du 31 décembre 1975, toute intervention de
                        l'Entreprise en qualité de sous-traitant doit être définie par un accord préalable.
                      </p>
                      <p>Cet accord précise :</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Les détails des prestations ;</li>
                        <li>Le délai d'exécution ou le calendrier de la mission ;</li>
                        <li>Le prix.</li>
                      </ul>
                      <p>
                        À défaut d'écrit, l'Entreprise se réserve le droit de différer son intervention.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      8.2. Organisation et agrément
                    </h3>
                    <div className="space-y-2">
                      <p>
                        Conformément à l'article 3 de la loi sus'citée, l'Entrepreneur Principal
                        s'engage à faire accepter l'Entreprise et à faire agréer ses conditions de
                        paiement auprès du Maître d'ouvrage.
                      </p>
                      <p>
                        Pour la gestion des chantiers au quotidien, toute instruction technique passe
                        exclusivement par l'Entrepreneur Principal, l'Entreprise n'ayant pas de lien
                        contractuel direct avec le Maître d'ouvrage.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      8.3. Paiement et garanties
                    </h3>
                    <div className="space-y-2">
                      <p>
                        L'Entrepreneur Principal reste personnellement et intégralement tenu du
                        paiement des factures dues à l'Entreprise.
                      </p>
                      <p>
                        Conformément à l'article 14 de la loi de 1975, ce paiement doit être garanti
                        par une caution bancaire ou une délégation de paiement. À défaut de ces
                        garanties obligatoires, l'Entreprise peut suspendre ses travaux.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      8.4. Recours en cas d'impayé
                    </h3>
                    <p>
                      En cas de défaut de paiement par l'Entrepreneur Principal, l'Entreprise se
                      réserve le droit d'exercer une action directe auprès du maitre d'ouvrage, conformément aux articles 12
                      et 14-1 de la loi n°75-1334 du 31 décembre 1975.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  Article 9 – Litiges et compétence territoriale
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>Les présentes CGV sont régies par le droit français.</p>
                  <p>
                    En cas de contestation, les parties s'engagent en premier lieu à rechercher une
                    solution amiable.
                  </p>
                  <p>
                    À défaut d'accord, tout litige relatif à la validité, l'interprétation,
                    l'exécution ou la cessation des présentes entre professionnels, sera de la
                    compétence du Tribunal de Commerce d'Aix-en-Provence, y compris en cas de référé,
                    pluralité de défendeurs ou appel en garantie.
                  </p>
                  <p>
                    Pour les clients non-professionnels, les règles légales de compétence
                    territoriale s'appliquent.
                  </p>
                </div>
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

export default CGV;
