'use client';

import { TrophyIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import AnimatedCard from '@/components/AnimatedCard';
import TournamentList from '@/components/TournamentList';
import TwitchStreams from '@/components/TwitchStreams';
import ScrollReveal from '@/components/ScrollReveal';
import { demoTournaments } from '@/data/demo';

export default function Home() {
  // Calculer le nombre total de participants
  const totalParticipants = demoTournaments.reduce((total, tournament) => 
    total + tournament.participants.length, 0
  );

  // Calculer le nombre de tournois en cours
  const activeTournaments = demoTournaments.filter(t => t.status === 'live').length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
              Tournois OpenFront
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Rejoignez la compétition et montrez vos compétences dans les tournois les plus prestigieux d'OpenFront.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <AnimatedCard className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-accent mb-2">{activeTournaments}</h3>
                <p className="text-gray-300">Tournoi{activeTournaments > 1 ? 's' : ''} en cours</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-accent mb-2">{totalParticipants}</h3>
                <p className="text-gray-300">Joueur{totalParticipants > 1 ? 's' : ''} inscrit{totalParticipants > 1 ? 's' : ''}</p>
              </div>
        </div>
          </AnimatedCard>
        </ScrollReveal>

        <ScrollReveal delay={0.4} fromBottom>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">
              Tournois en cours
            </h2>
            <TournamentList tournaments={demoTournaments} />
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.6} fromBottom>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">
              Streams en direct
            </h2>
            <TwitchStreams />
          </section>
        </ScrollReveal>
    </div>
    </motion.div>
  );
}
