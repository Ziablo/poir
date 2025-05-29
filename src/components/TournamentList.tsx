import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tournament } from '@/types/tournament';
import TournamentCard from './TournamentCard';

interface TournamentListProps {
  tournaments: Tournament[];
}

const TournamentList = ({ tournaments }: TournamentListProps) => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'live' | 'completed'>('all');

  const filteredTournaments = tournaments.filter(tournament => 
    filter === 'all' ? true : tournament.status === filter
  );

  return (
    <div className="space-y-8">
      <div className="flex gap-4">
        {(['all', 'upcoming', 'live', 'completed'] as const).map((status) => (
          <motion.button
            key={status}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              filter === status
                ? 'bg-accent text-white'
                : 'bg-accent/10 text-accent hover:bg-accent/20'
            }`}
          >
            {status === 'all' ? 'Tous' : 
             status === 'upcoming' ? 'À venir' :
             status === 'live' ? 'En cours' : 'Terminés'}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {filteredTournaments.map((tournament, index) => (
            <TournamentCard
              key={tournament.id}
              tournament={tournament}
              delay={index * 0.1}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TournamentList; 