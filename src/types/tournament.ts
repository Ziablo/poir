export type TournamentStatus = 'upcoming' | 'live' | 'completed';

export interface Participant {
  name: string;
  points?: number;
  players?: string[];
  nationality?: string;
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
  date: string;
  format: string;
  rules: string[];
  judges: string[];
  participants: { name: string; points?: number }[];
  startDate: string;
  endDate: string;
  maxParticipants: number;
  matches: any[];
  leaderboard: any[];
} 