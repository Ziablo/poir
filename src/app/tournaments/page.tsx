'use client';

import { demoTournaments } from '@/data/demo';
import TournamentList from '@/components/TournamentList';
import ScrollReveal from '@/components/ScrollReveal';

export default function TournamentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ScrollReveal>
        <h1 className="text-4xl font-bold mb-8">Tournois</h1>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div className="grid grid-cols-1 gap-6">
          <TournamentList tournaments={demoTournaments} />
        </div>
      </ScrollReveal>
    </div>
  );
} 