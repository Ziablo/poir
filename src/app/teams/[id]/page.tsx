'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { Tournament } from '@/types/tournament';
import { demoTournaments } from '@/data/demo';
import ParticleBackground from '@/components/ParticleBackground';
import { 
  UserGroupIcon, 
  MapPinIcon,
  TrophyIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

const TeamDetails = () => {
  const { id } = useParams();
  const [team, setTeam] = useState<any>(null);
  const [tournament, setTournament] = useState<Tournament | null>(null);

  useEffect(() => {
    // Trouver le tournoi The Akumas
    const akumasTournament = demoTournaments.find(t => t.id === '5');
    if (akumasTournament) {
      setTournament(akumasTournament);
      // Trouver l'équipe par son nom
      const foundTeam = akumasTournament.participants.find(p => p.name === id);
      setTeam(foundTeam || null);
    }
  }, [id]);

  if (!team || !tournament) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-accent mb-4">Équipe non trouvée</h1>
          <p className="text-gray-400">L'équipe que vous recherchez n'existe pas.</p>
        </div>
      </div>
    );
  }

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
            <h1 className="text-4xl font-bold mb-2">{team.name}</h1>
            <p className="text-gray-400">Équipe du tournoi {tournament.name}</p>
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
                  <UsersIcon className="w-6 h-6 text-accent" />
                  Membres de l'équipe
                </h2>
                <div className="space-y-3">
                  {team.players?.map((player: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="text-gray-300">{player}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="card p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <MapPinIcon className="w-6 h-6 text-accent" />
                  Nationalité
                </h2>
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                  <span className="text-accent font-semibold">{team.nationality}</span>
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
                  <TrophyIcon className="w-6 h-6 text-accent" />
                  Statistiques
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400">Points actuels</span>
                    <span className="text-accent font-semibold">{team.points || 0} pts</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400">Nombre de joueurs</span>
                    <span className="text-accent font-semibold">{team.players?.length || 0}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400">Format du tournoi</span>
                    <span className="text-accent font-semibold">{tournament.format}</span>
                  </div>
                </div>
              </section>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetails; 