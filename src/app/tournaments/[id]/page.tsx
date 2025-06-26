'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { Tournament } from '@/types/tournament';
import { demoTournaments } from '@/data/demo';
import ParticleBackground from '@/components/ParticleBackground';
import { 
  UserGroupIcon, 
  TrophyIcon, 
  ClockIcon, 
  MapIcon,
  ChartBarIcon,
  InformationCircleIcon,
  UserIcon,
  BellIcon,
  ClockIcon as ClockIconSolid
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const TournamentDetails = () => {
  const { id } = useParams();
  const [tournament, setTournament] = useState<Tournament | null>(null);

  useEffect(() => {
    const foundTournament = demoTournaments.find(t => t.id === id);
    setTournament(foundTournament || null);
  }, [id]);

  if (!tournament) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-accent mb-4">Tournoi non trouvé</h1>
          <p className="text-gray-400">Le tournoi que vous recherchez n'existe pas.</p>
        </div>
      </div>
    );
  }

  const isBobbeurTournament = tournament.id === '4';

  return (
    <>
      <ParticleBackground />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
            {tournament.name}
          </h1>
          <div className="flex items-center gap-4 text-gray-400">
            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent">
              {tournament.status === 'upcoming' ? 'À venir' :
               tournament.status === 'live' ? 'En cours' : 'Terminé'}
            </span>
            <span>{tournament.date}</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {isBobbeurTournament ? (
              <>
                <section className="card p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <UserGroupIcon className="w-6 h-6 text-accent" />
                    Comment ça marche ?
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <UserIcon className="w-5 h-5 text-accent mt-1" />
                      <p className="text-gray-300">
                        Inscription obligatoire : poste ton pseudo suivi de FFA#1 dans le salon prévu.
                        Le numéro (#...) correspond à l'édition du tournoi, donc vérifie bien avant de t'inscrire !
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <BellIcon className="w-5 h-5 text-accent mt-1" />
                      <p className="text-gray-300">
                        Une fois inscrit, attends simplement la date et l'heure du live.
                        Le live commence 30 minutes avant le tournoi.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <ClockIconSolid className="w-5 h-5 text-accent mt-1" />
                      <p className="text-gray-300">
                        Si tu n'es pas là à temps, un viewer prendra ta place.
                        Tu seras ajouté à un groupe (A, B, C ou D) selon le nombre de participants.
                        Pense à vérifier les annonces pour voir les groupes et places libres !
                      </p>
                    </div>
                  </div>
                </section>

                <section className="card p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <TrophyIcon className="w-6 h-6 text-accent" />
                    Classement Actuel
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-accent font-semibold">#1</span>
                        <span>UNNAMED</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-accent font-semibold">#2</span>
                        <span>Ziyad</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-accent font-semibold">#3</span>
                        <span>MODIX</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-accent font-semibold">#4</span>
                        <span>AMERICAN BOY</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-accent font-semibold">#5</span>
                        <span>ELRONDO</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-accent font-semibold">#6</span>
                        <span>[BOB]ALE</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-accent font-semibold">#7</span>
                        <span>TITOU</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-accent font-semibold">#8</span>
                        <span>[BOB]ALBAN</span>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="card p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <TrophyIcon className="w-6 h-6 text-accent" />
                    Structure du Tournoi
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Tour 1 : Mêlées Générales</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Tous les joueurs participent à 8 games FFA</li>
                        <li>Chaque gagnant est versé dans le groupe A ou B</li>
                        <li>Le groupe détermine la difficulté du parcours vers la finale</li>
                        <li>Map grande, choisie par la roue des continents 🌍</li>
                      </ul>
                      <p className="mt-4 text-gray-300">Qualification par maps : Les joueurs sont qualifiés en fonction de leurs performances sur chaque map.</p>
                    </div>
                    <section className="card p-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <UserGroupIcon className="w-6 h-6 text-accent" />
                        Composition des Groupes
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-accent">GROUPE A</h4>
                          <ul className="space-y-2 text-gray-300">
                            <li>Q1 : UNNAMED</li>
                            <li>Q3 : MODIX</li>
                            <li>Q5 : ELRONDO</li>
                            <li>Q7 : TITOU</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-accent">GROUPE B</h4>
                          <ul className="space-y-2 text-gray-300">
                            <li>Q2 : Ziyad</li>
                            <li>Q4 : AMERICAN BOY</li>
                            <li>Q6 : [BOB]ALE</li>
                            <li>Q8 : [BOB]ALBAN</li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Tour 2 : Speed Games</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Groupes A et B s'affrontent en format 1v1v1v1</li>
                        <li>Sur des petites maps donc game rapide</li>
                        <li>Les 2 premiers de chaque game accèdent à la phase finale</li>
                        <li>Les autres joueront pour les dernières places du classement</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Tour 3 : Matchs de Classement</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Les gagnants des poules s'affrontent pour les places 1 à 4</li>
                        <li>Les autres se battent pour les places 5 à 8</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="card p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <ChartBarIcon className="w-6 h-6 text-accent" />
                    Système de Classement
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-gray-800/50 rounded-lg text-center">
                      <div className="text-2xl font-bold text-accent">1er</div>
                      <div className="text-gray-400">10 points</div>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg text-center">
                      <div className="text-2xl font-bold text-accent">2ème</div>
                      <div className="text-gray-400">8 points</div>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg text-center">
                      <div className="text-2xl font-bold text-accent">3ème</div>
                      <div className="text-gray-400">7 points</div>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg text-center">
                      <div className="text-2xl font-bold text-accent">4ème</div>
                      <div className="text-gray-400">5 points</div>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg text-center">
                      <div className="text-2xl font-bold text-accent">5ème</div>
                      <div className="text-gray-400">4 points</div>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg text-center">
                      <div className="text-2xl font-bold text-accent">6ème</div>
                      <div className="text-gray-400">3 points</div>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg text-center">
                      <div className="text-2xl font-bold text-accent">7ème</div>
                      <div className="text-gray-400">2 points</div>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg text-center">
                      <div className="text-2xl font-bold text-accent">8ème</div>
                      <div className="text-gray-400">0 point</div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-300 text-center">
                    🏅 Un classement des victoires! Même si t'es hors course pour la finale, bats-toi jusqu'au bout pour décrocher une win ! 💪
                  </p>
                </section>
              </>
            ) : (
              <>
                <section className="card p-6">
                  <h2 className="text-2xl font-bold mb-4">Description</h2>
                  <p className="text-gray-300">{tournament.description}</p>
                </section>

                <section className="card p-6">
                  <h2 className="text-2xl font-bold mb-4">Participants</h2>
                  <div className="space-y-4">
                    {tournament.participants.map((participant, index) => (
                      tournament.id === '5' ? (
                        <Link 
                          key={index}
                          href={`/teams/${participant.name}`}
                          className="block"
                        >
                          <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-green-500/20 hover:border-green-500/50 border border-transparent transition-all duration-300 cursor-pointer group">
                            <div className="flex items-center gap-3">
                              <span className="text-accent font-semibold group-hover:text-green-400 transition-colors">#{index + 1}</span>
                              <span className="group-hover:text-green-300 transition-colors font-medium">{participant.name}</span>
                            </div>
                            <span className="text-gray-400 group-hover:text-green-400 transition-colors">{participant.points || 0} pts</span>
                          </div>
                        </Link>
                      ) : (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <span className="text-accent font-semibold">#{index + 1}</span>
                            <span>{participant.name}</span>
                          </div>
                          <span className="text-gray-400">{participant.points || 0} pts</span>
                        </div>
                      )
                    ))}
                  </div>
                </section>
              </>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            {isBobbeurTournament ? (
              <>
                <section className="card p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <MapIcon className="w-6 h-6 text-accent" />
                    Maps
                  </h2>
                  <div className="space-y-4">
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      <li>Océanie</li>
                      <li>Islande</li>
                      <li>Pangée</li>
                      <li>Grande-Bretagne</li>
                      <li>Mer Noire</li>
                      <li>Asie</li>
                      <li>Europe (Classique)</li>
                      <li>Amérique du Sud</li>
                    </ul>
                  </div>
                </section>

                <section className="card p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <InformationCircleIcon className="w-6 h-6 text-accent" />
                    Infos In-Game
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-gray-400 mb-1">Mode de jeu</h3>
                      <p>FFA</p>
                    </div>
                    <div>
                      <h3 className="text-gray-400 mb-1">Vitesse de jeu</h3>
                      <p>Rapide</p>
                    </div>
                    <div>
                      <h3 className="text-gray-400 mb-1">Durée max par game</h3>
                      <p>30 minutes</p>
                    </div>
                    <div>
                      <h3 className="text-gray-400 mb-1">Classement individuel</h3>
                      <p>Non disponible pour le moment</p>
                    </div>
                  </div>
                </section>
              </>
            ) : (
              <>
                <section className="card p-6">
                  <h2 className="text-2xl font-bold mb-4">Informations</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-gray-400 mb-1">Format</h3>
                      <p>{tournament.format}</p>
                    </div>
                    <div>
                      <h3 className="text-gray-400 mb-1">Règles</h3>
                      <ul className="list-disc list-inside space-y-1">
                        {tournament.rules.map((rule, index) => (
                          <li key={index}>{rule}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="card p-6">
                  <h2 className="text-2xl font-bold mb-4">Juges</h2>
                  <div className="space-y-3">
                    {tournament.judges.map((judge, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                        <span>{judge}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TournamentDetails; 