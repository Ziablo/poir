'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-accent mb-4">Une erreur s'est produite</h2>
        <p className="text-gray-400 mb-6">Désolé, quelque chose s'est mal passé.</p>
        <button
          onClick={reset}
          className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
} 