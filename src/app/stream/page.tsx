'use client';

import TwitchStreams from '@/components/TwitchStreams';
import ScrollReveal from '@/components/ScrollReveal';

export default function StreamPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ScrollReveal>
        <h1 className="text-4xl font-bold mb-8">Streams</h1>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div className="grid grid-cols-1 gap-8">
          <TwitchStreams />
        </div>
      </ScrollReveal>
    </div>
  );
} 