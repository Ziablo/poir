export type TournamentStatus = 'upcoming' | 'live' | 'completed';

export interface Participant {
  name: string;
  points?: number;
}

export interface Match {
  id: string;
  player1: string;
  player2: string;
  score1: number;
  score2: number;
  status: 'pending' | 'completed';
}

export interface Player {
  name: string;
  points: number;
  rank: number;
}

export interface Tournament {
  id: string;
  name: string;
  description: string;
  status: TournamentStatus;
  prizePool: number | string;
  date: string;
  format: string;
  rules: string[];
  participants: Participant[];
  judges: string[];
  startDate: string;
  endDate: string;
  maxParticipants: number;
  matches: Match[];
  leaderboard: Player[];
} 