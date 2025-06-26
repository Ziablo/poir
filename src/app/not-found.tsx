import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-accent mb-4">404</h2>
        <h3 className="text-2xl font-bold mb-4">Page non trouvée</h3>
        <p className="text-gray-400 mb-6">La page que vous recherchez n'existe pas.</p>
        <Link 
          href="/"
          className="inline-block px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
} 