'use client';

import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

export default function TermsPage() {
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
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
              <DocumentTextIcon className="w-6 h-6 text-accent" />
              Termes et Conditions & Politique de Confidentialité
            </h1>
            <p className="text-gray-400">Dernière mise à jour : Janvier 2025</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <section className="card p-8">
              <div className="space-y-6 text-gray-300">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-accent">1. Acceptation des termes</h2>
                  <p>
                    En accédant à OpenFront Tournaments et en participant à nos tournois, vous acceptez d'être lié par ces termes et conditions. 
                    Si vous n'acceptez pas ces termes, veuillez ne pas utiliser notre plateforme.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-accent">2. Participation aux tournois</h2>
                  <p className="mb-3">
                    <strong>Règles générales :</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>Tous les participants doivent respecter les règles spécifiques de chaque tournoi</li>
                    <li>Les équipes doivent respecter le format imposé (ex: 3v3 avec 3 remplaçants max)</li>
                    <li>Les participants s'engagent à être présents aux horaires annoncés</li>
                    <li>Les résultats des matchs sont définitifs une fois validés par les juges</li>
                  </ul>
                  
                  <p className="mb-3">
                    <strong>Interdictions strictes :</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Utilisation de logiciels de triche, bots ou scripts automatisés</li>
                    <li>Comportement toxique, harcèlement ou intimidation envers d'autres participants</li>
                    <li>Partage d'informations de compte ou usurpation d'identité</li>
                    <li>Perturbation volontaire du bon déroulement des tournois</li>
                    <li>Non-respect des décisions des juges et administrateurs</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-accent">3. Gestion des équipes</h2>
                  <p className="mb-3">
                    <strong>Composition des équipes :</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>Les équipes doivent respecter la limite de joueurs imposée par le format</li>
                    <li>Les remplaçants doivent être déclarés avant le début du tournoi</li>
                    <li>Les changements de composition en cours de tournoi sont interdits sauf accord des organisateurs</li>
                    <li>Chaque équipe doit désigner un capitaine responsable de la communication</li>
                  </ul>
                  
                  <p className="mb-3">
                    <strong>Responsabilités d'équipe :</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Les équipes sont responsables du comportement de tous leurs membres</li>
                    <li>En cas de problème avec un joueur, l'équipe entière peut être sanctionnée</li>
                    <li>Les équipes doivent s'assurer que tous leurs membres ont lu et accepté ces termes</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-accent">4. Protection et utilisation des données</h2>
                  <p className="mb-3">
                    <strong>Données collectées :</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>Nom d'utilisateur et pseudonyme</li>
                    <li>Adresse email</li>
                    <li>Historique des participations aux tournois</li>
                    <li>Résultats et classements</li>
                    <li>Données de connexion (adresse IP, navigateur)</li>
                  </ul>
                  
                  <p className="mb-3">
                    <strong>Utilisation des données :</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>Gérer votre participation aux tournois et publier les résultats</li>
                    <li>Communiquer les informations importantes concernant les tournois</li>
                    <li>Assurer la sécurité et l'intégrité de la plateforme</li>
                    <li>Améliorer nos services et l'expérience utilisateur</li>
                  </ul>
                  
                  <p className="mb-3">
                    <strong>Sécurité des données :</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>Chiffrement SSL/TLS pour toutes les communications</li>
                    <li>Accès restreint aux données personnelles</li>
                    <li>Surveillance continue de la sécurité</li>
                    <li>Sauvegardes régulières et sécurisées</li>
                  </ul>
                  
                  <p>
                    Vos données sont protégées conformément au RGPD. Vous pouvez exercer vos droits 
                    en nous contactant à <span className="text-accent">contact@openfront.com</span>
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-accent">5. Sanctions et exclusions</h2>
                  <p className="mb-3">
                    En cas de violation de ces termes, OpenFront se réserve le droit de :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>Avertir l'équipe ou le joueur concerné</li>
                    <li>Suspendre temporairement la participation aux tournois</li>
                    <li>Exclure définitivement du tournoi en cours</li>
                    <li>Bannir définitivement de la plateforme</li>
                    <li>Signaler aux autorités compétentes en cas d'infraction grave</li>
                  </ul>
                  
                  <p>
                    Les décisions des administrateurs et juges sont définitives et sans appel.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-accent">6. Responsabilités</h2>
                  <p className="mb-3">
                    <strong>Notre responsabilité :</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>Organiser des tournois équitables et bien structurés</li>
                    <li>Maintenir une plateforme stable et sécurisée</li>
                    <li>Assurer la neutralité et l'impartialité des juges</li>
                    <li>Communiquer clairement les règles et informations importantes</li>
                    <li>Protéger vos données personnelles conformément au RGPD</li>
                  </ul>
                  
                  <p className="mb-3">
                    <strong>Votre responsabilité :</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Respecter les règles et les autres participants</li>
                    <li>Être ponctuel et disponible aux horaires annoncés</li>
                    <li>Maintenir un comportement sportif et respectueux</li>
                    <li>Signaler tout problème ou comportement suspect</li>
                    <li>Protéger vos informations de connexion</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-accent">7. Conservation des données</h2>
                  <p className="mb-3">
                    Nous conservons vos données uniquement le temps nécessaire :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Données de compte : 3 ans après la dernière activité</li>
                    <li>Historique des tournois : 5 ans</li>
                    <li>Données de connexion : 1 an</li>
                    <li>Données de facturation : 10 ans (obligation légale)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-accent">8. Modifications</h2>
                  <p>
                    Nous nous réservons le droit de modifier ces termes à tout moment. 
                    Les modifications seront publiées sur cette page et prendront effet immédiatement. 
                    Il est de votre responsabilité de consulter régulièrement cette page.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-accent">9. Contact</h2>
                  <p>
                    Pour toute question concernant ces termes, la protection de vos données ou pour signaler un problème, 
                    contactez-nous à <span className="text-accent">contact@openfront.com</span>
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Nous nous engageons à répondre dans les plus brefs délais.
                  </p>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </>
  );
} 