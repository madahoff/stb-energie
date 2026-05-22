import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const contactSchema = z.object({
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères').max(100),
  email: z.string().email('Adresse email invalide').max(255),
  telephone: z.string().min(10, 'Numéro de téléphone invalide').max(20),
  sujet: z.string().min(5, 'Le sujet doit contenir au moins 5 caractères').max(200),
  message: z.string().min(20, 'Le message doit contenir au moins 20 caractères').max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const templateParams = {
        from_name: data.nom,
        from_email: data.email,
        phone: data.telephone,
        subject: data.sujet,
        message: data.message,
        reply_to: data.email,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_NOTIFICATION,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_AUTOREPLY,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setIsSubmitted(true);
      reset();
      toast.success('Votre message a été envoyé avec succès !');
    } catch {
      toast.error("Une erreur est survenue. Veuillez réessayer ou nous appeler directement.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | STB énergie - Électricien à Marseille</title>
        <meta
          name="description"
          content="Contactez STB énergie pour vos projets électriques à Marseille. Devis, intervention rapide. Tél: 06 52 55 62 09"
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
                Parlons de votre <span className="text-accent">projet</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Notre équipe est à votre disposition pour répondre à toutes vos questions
                et vous accompagner dans vos projets électriques.
              </p>
            </div>
          </div>
        </section>

        {/* Contact content */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact form */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Contactez-nous
                </h2>

                {isSubmitted ? (
                  <div className="bg-accent/10 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Message envoyé !
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                    <Button variant="accent" onClick={() => setIsSubmitted(false)} className='rounded-full'>
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nom">Nom complet *</Label>
                        <Input
                          id="nom"
                          placeholder="Votre nom"
                          {...register('nom')}
                          className={errors.nom ? 'border-destructive' : ''}
                        />
                        {errors.nom && (
                          <p className="text-destructive text-sm">{errors.nom.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="votre@email.fr"
                          {...register('email')}
                          className={errors.email ? 'border-destructive' : ''}
                        />
                        {errors.email && (
                          <p className="text-destructive text-sm">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="telephone">Téléphone *</Label>
                        <Input
                          id="telephone"
                          placeholder="06 XX XX XX XX"
                          {...register('telephone')}
                          className={errors.telephone ? 'border-destructive' : ''}
                        />
                        {errors.telephone && (
                          <p className="text-destructive text-sm">{errors.telephone.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sujet">Sujet *</Label>
                        <Input
                          id="sujet"
                          placeholder="Objet de votre demande"
                          {...register('sujet')}
                          className={errors.sujet ? 'border-destructive' : ''}
                        />
                        {errors.sujet && (
                          <p className="text-destructive text-sm">{errors.sujet.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Décrivez votre projet ..."
                        rows={6}
                        {...register('message')}
                        className={errors.message ? 'border-destructive' : ''}
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Envoi en cours...'
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Envoyer ma demande
                        </>
                      )}
                    </Button>

                    <p className="text-muted-foreground text-sm text-center">
                      En soumettant ce formulaire, vous acceptez notre{' '}
                      <a href="/politique-confidentialite" className="text-accent hover:underline">
                        politique de confidentialité
                      </a>
                      .
                    </p>
                  </form>
                )}
              </div>

              {/* Contact info */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Nos coordonnées
                </h2>

                <div className="space-y-6">
                 
                  <a
                    href="mailto:contact@stb-energie.fr"
                    className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                      <Mail className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
                        Email
                      </p>
                      <p className="text-xl font-bold text-foreground">contact@stb-energie.fr</p>
                      <p className="text-muted-foreground text-sm mt-1">
                        Réponse sous 24h
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
                        Adresse
                      </p>
                      <p className="text-xl font-bold text-foreground">765 boulevard des Ventadouiro <br/>13300 Salon-de-Provence</p>
                      <p className="text-muted-foreground text-sm mt-1">
                        Intervention sur toute la région PACA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
                        Horaires
                      </p>
                      <p className="text-xl font-bold text-foreground">Lun - Ven : 9h - 17h</p>
                      <p className="text-muted-foreground text-sm mt-1">
                        Urgences : nous contacter
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
