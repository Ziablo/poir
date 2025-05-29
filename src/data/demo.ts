import { Tournament } from '@/types/tournament';

export const demoPlayers = [
  { id: '1', name: 'ProGamer123', avatar: '👾', rank: 1, points: 2500 },
  { id: '2', name: 'NinjaWarrior', avatar: '⚔️', rank: 2, points: 2300 },
  { id: '3', name: 'DragonSlayer', avatar: '🐉', rank: 3, points: 2100 },
  { id: '4', name: 'PixelMaster', avatar: '🎮', rank: 4, points: 1900 },
  { id: '5', name: 'CyberKnight', avatar: '🤖', rank: 5, points: 1700 },
  { id: '6', name: 'EpicGamer', avatar: '🎯', rank: 6, points: 1500 },
  { id: '7', name: 'ShadowBlade', avatar: '⚡', rank: 7, points: 1300 },
  { id: '8', name: 'MysticMage', avatar: '✨', rank: 8, points: 1100 },
];

export const demoTournaments: Tournament[] = [
  {
    id: '4',
    name: 'Tournoi de Bobbeur FFA#1',
    description: 'Tournoi FFA avec des mêlées générales, des speed games et des matchs de classement.',
    status: 'live',
    prizePool: 5000,
    date: '25 Février 2024',
    format: 'FFA',
    rules: [
      '8 games FFA en mêlées générales',
      'Speed games en 1v1v1v1',
      'Matchs de classement pour les places 1-8',
      'Map tirée au sort par la roue des continents'
    ],
    participants: [],
    judges: ['Bobbeur'],
    startDate: '2024-02-25',
    endDate: '2024-02-25',
    maxParticipants: 32,
    matches: [],
    leaderboard: []
  },
  {
    id: '1',
    name: 'Championnat d\'Hiver 2024',
    description: 'Le plus grand tournoi d\'hiver d\'OpenFront avec des récompenses exceptionnelles.',
    status: 'upcoming',
    prizePool: 10000,
    date: '15 Février 2024',
    format: 'Double élimination',
    rules: [
      'Format 1v1',
      'Meilleur des 3',
      'Maps aléatoires',
      'Pas de restrictions de héros'
    ],
    participants: [
      { name: 'ProGamer123', points: 0 },
      { name: 'OpenFrontMaster', points: 0 },
      { name: 'TournamentKing', points: 0 }
    ],
    judges: ['Admin1', 'Admin2', 'Admin3'],
    startDate: '2024-02-15',
    endDate: '2024-02-20',
    maxParticipants: 32,
    matches: [],
    leaderboard: []
  },
  {
    id: '2',
    name: 'Tournoi Amateur #5',
    description: 'Tournoi ouvert à tous les joueurs, parfait pour débuter la compétition.',
    status: 'live',
    prizePool: 1000,
    date: 'En cours',
    format: 'Simple élimination',
    rules: [
      'Format 1v1',
      'Meilleur des 1',
      'Maps prédéfinies',
      'Héros limités'
    ],
    participants: [
      { name: 'NewPlayer1', points: 3 },
      { name: 'Rookie123', points: 2 },
      { name: 'BeginnerPro', points: 1 }
    ],
    judges: ['Mod1', 'Mod2'],
    startDate: '2024-01-20',
    endDate: '2024-01-25',
    maxParticipants: 16,
    matches: [],
    leaderboard: []
  },
  {
    id: '3',
    name: 'Championnat d\'Été 2023',
    description: 'Le tournoi le plus prestigieux de l\'année avec les meilleurs joueurs.',
    status: 'completed',
    prizePool: 25000,
    date: 'Terminé',
    format: 'Double élimination',
    rules: [
      'Format 1v1',
      'Meilleur des 5',
      'Maps aléatoires',
      'Tous les héros autorisés'
    ],
    participants: [
      { name: 'Champion2023', points: 15 },
      { name: 'RunnerUp', points: 12 },
      { name: 'ThirdPlace', points: 10 }
    ],
    judges: ['HeadAdmin', 'SeniorMod', 'ProPlayer'],
    startDate: '2023-07-01',
    endDate: '2023-07-10',
    maxParticipants: 64,
    matches: [],
    leaderboard: []
  }
]; 