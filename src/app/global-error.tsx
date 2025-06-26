'use client';

import { useEffect } from 'react';

export default function GlobalError({
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
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a]">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Erreur critique</h2>
            <p className="text-gray-400 mb-6">Une erreur critique s'est produite.</p>
            <button
              onClick={reset}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Réessayer
            </button>
          </div>
        </div>
      </body>
    </html>
  );
} 