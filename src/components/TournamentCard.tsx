import { motion } from 'framer-motion';
import { Tournament } from '@/types/tournament';
import Link from 'next/link';
import { useState } from 'react';
import { UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline';

interface TournamentCardProps {
  tournament: Tournament;
  delay?: number;
}

const TournamentCard = ({ tournament, delay = 0 }: TournamentCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const top3 = tournament.participants
    .sort((a, b) => (b.points || 0) - (a.points || 0))
    .slice(0, 3);

  const isBobbeurTournament = tournament.id === '4';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay }}
      className="relative h-[300px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Face avant */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="card h-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  tournament.status === 'upcoming' ? 'bg-yellow-500/20 text-yellow-500' :
                  tournament.status === 'live' ? 'bg-green-500/20 text-green-500' :
                  'bg-gray-500/20 text-gray-500'
                }`}>
                  {tournament.status === 'upcoming' ? 'À venir' :
                   tournament.status === 'live' ? 'En cours' : 'Terminé'}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                {tournament.name}
              </h3>

              <p className="text-gray-400 mb-4 line-clamp-2">
                {tournament.description}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span>{tournament.participants.length} participants</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">{tournament.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Face arrière */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="card h-full bg-gray-900/80 backdrop-blur-sm">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-6 text-center text-accent">Top 3</h3>
              {isBobbeurTournament ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-yellow-500">#1</span>
                      <span>UNNAMED</span>
                    </div>
                    <span className="text-accent font-semibold">10 pts</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-gray-400">#2</span>
                      <span>Ziyad</span>
                    </div>
                    <span className="text-accent font-semibold">8 pts</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-amber-700">#3</span>
                      <span>MODIX</span>
                    </div>
                    <span className="text-accent font-semibold">7 pts</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {top3.map((participant, index) => (
                    tournament.id === '5' ? (
                      <Link 
                        key={index}
                        href={`/teams/${participant.name}`}
                        className="block"
                      >
                        <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-green-500/20 hover:border-green-500/50 border border-transparent transition-all duration-300 cursor-pointer group">
                          <div className="flex items-center gap-3">
                            <span className={`text-lg font-bold ${
                              index === 0 ? 'text-yellow-500' :
                              index === 1 ? 'text-gray-400' :
                              'text-amber-700'
                            } group-hover:text-green-400 transition-colors`}>
                              #{index + 1}
                            </span>
                            <span className="group-hover:text-green-300 transition-colors font-medium">{participant.name}</span>
                          </div>
                          <span className="text-accent font-semibold group-hover:text-green-400 transition-colors">{participant.points || 0} pts</span>
                        </div>
                      </Link>
                    ) : (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <span className={`text-lg font-bold ${
                            index === 0 ? 'text-yellow-500' :
                            index === 1 ? 'text-gray-400' :
                            'text-amber-700'
                          }`}>
                            #{index + 1}
                          </span>
                          <span>{participant.name}</span>
                        </div>
                        <span className="text-accent font-semibold">{participant.points || 0} pts</span>
                      </div>
                    )
                  ))}
                </div>
              )}
              <div className="mt-6 text-center">
                <Link 
                  href={`/tournaments/${tournament.id}`}
                  className="inline-block px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors"
                >
                  Voir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TournamentCard; 