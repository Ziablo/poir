'use client';

import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import { ShieldCheckIcon, EyeIcon, LockClosedIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function PrivacyPage() {
  return (
    <>
      <ParticleBackground />
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold mb-2">Politique de Confidentialité</h1>
            <p className="text-gray-400">Dernière mise à jour : Janvier 2025</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <section className="card p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <ShieldCheckIcon className="w-6 h-6 text-accent" />
                  Protection de vos données
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Chez OpenFront, nous accordons une importance capitale à la protection de vos données personnelles. 
                    Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
                  </p>
                  <p>
                    Nous nous conformons au Règlement Général sur la Protection des Données (RGPD) et aux lois 
                    applicables en matière de protection des données.
                  </p>
                </div>
              </section>

              <section className="card p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <EyeIcon className="w-6 h-6 text-accent" />
                  Données collectées
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>Nous collectons les informations suivantes :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nom d'utilisateur et pseudonyme</li>
                    <li>Adresse email</li>
                    <li>Historique des participations aux tournois</li>
                    <li>Résultats et classements</li>
                    <li>Données de connexion (adresse IP, navigateur)</li>
                  </ul>
                </div>
              </section>

              <section className="card p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <DocumentTextIcon className="w-6 h-6 text-accent" />
                  Utilisation des données
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>Vos données sont utilisées pour :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Gérer votre compte et vos participations</li>
                    <li>Publier les résultats des tournois</li>
                    <li>Améliorer nos services</li>
                    <li>Assurer la sécurité de la plateforme</li>
                    <li>Communiquer les mises à jour importantes</li>
                  </ul>
                </div>
              </section>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              <section className="card p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <LockClosedIcon className="w-6 h-6 text-accent" />
                  Sécurité des données
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Nous mettons en place des mesures de sécurité appropriées pour protéger vos données :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Chiffrement SSL/TLS pour toutes les communications</li>
                    <li>Accès restreint aux données personnelles</li>
                    <li>Surveillance continue de la sécurité</li>
                    <li>Sauvegardes régulières et sécurisées</li>
                    <li>Formation du personnel à la protection des données</li>
                  </ul>
                </div>
              </section>

              <section className="card p-6">
                <h2 className="text-2xl font-bold mb-4">Vos droits</h2>
                <div className="space-y-4 text-gray-300">
                  <p>Conformément au RGPD, vous avez le droit de :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Accéder à vos données personnelles</li>
                    <li>Rectifier vos informations</li>
                    <li>Demander la suppression de vos données</li>
                    <li>Limiter le traitement de vos données</li>
                    <li>Vous opposer au traitement</li>
                    <li>Demander la portabilité de vos données</li>
                  </ul>
                </div>
              </section>

              <section className="card p-6">
                <h2 className="text-2xl font-bold mb-4">Conservation des données</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Nous conservons vos données personnelles uniquement le temps nécessaire 
                    aux finalités pour lesquelles elles ont été collectées :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Données de compte : 3 ans après la dernière activité</li>
                    <li>Historique des tournois : 5 ans</li>
                    <li>Données de connexion : 1 an</li>
                    <li>Données de facturation : 10 ans (obligation légale)</li>
                  </ul>
                </div>
              </section>

              <section className="card p-6">
                <h2 className="text-2xl font-bold mb-4">Contact DPO</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Pour toute question concernant la protection de vos données, 
                    contactez notre délégué à la protection des données :
                  </p>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <p className="text-accent font-semibold">Email : dpo@openfront.com</p>
                    <p className="text-sm text-gray-400 mt-1">Réponse sous 30 jours maximum</p>
                  </div>
                </div>
              </section>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
} 