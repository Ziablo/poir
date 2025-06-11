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
    name: 'Tournoi de Bobbeur',
    description: 'Le tournoi officiel de Bobbeur avec des règles spéciales.',
    status: 'live',
    date: 'En cours',
    format: 'FFA',
    rules: [
      'Pas de triche',
      'Respect des autres joueurs',
      'Pas de comportement toxique'
    ],
    judges: ['Bobbeur', 'Modix'],
    participants: [
      { name: 'UNNAMED', points: 10 },
      { name: 'Ziyad', points: 8 },
      { name: 'MODIX', points: 7 },
      { name: 'AMERICAN BOY', points: 5 },
      { name: 'ELRONDO', points: 4 },
      { name: '[BOB]ALE', points: 3 },
      { name: 'TITOU', points: 2 },
      { name: '[BOB]ALBAN', points: 0 }
    ],
    startDate: '2024-02-28',
    endDate: '2024-02-28',
    maxParticipants: 32,
    matches: [],
    leaderboard: []
  },
  {
    id: '5',
    name: 'The Akumas',
    description: 'Les Esprits des Akumas vous appellent. Ressentez la puissance de la bataille, les flammes du défi, et laissez l\'esprit des démons vous guider. Qui deviendra le Premier Akuma d\'OpenFront ? Affrontez les meilleurs dans un tournoi où chaque victoire vous rapproche de la gloire. Tournoi à élimination directe, une seule équipe vainqueur. Le titre Akuma d\'OpenFront ne sera réservé qu\'à ceux qui auront survécu aux épreuves et marqué l\'histoire.',
    status: 'upcoming',
    date: 'À venir',
    format: 'Élimination directe',
    rules: [
      'Format élimination directe',
      'Une seule équipe vainqueur',
      'Respect des adversaires',
      'Pas de triche'
    ],
    judges: ['Admin1', 'Admin2', 'Admin3'],
    participants: [
      { name: 'Team1', points: 0 },
      { name: 'Team2', points: 0 },
      { name: 'Team3', points: 0 },
      { name: 'Team4', points: 0 },
      { name: 'Team5', points: 0 },
      { name: 'Team6', points: 0 },
      { name: 'Team7', points: 0 },
      { name: 'Team8', points: 0 }
    ],
    startDate: '2024-04-01',
    endDate: '2024-04-01',
    maxParticipants: 16,
    matches: [],
    leaderboard: []
  }
]; 