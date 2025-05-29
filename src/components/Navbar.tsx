'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-gray-900/50 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-accent">
            OpenFront Tournaments
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-accent' : 'text-gray-400 hover:text-white'
              }`}
            >
              Accueil
            </Link>
            <Link
              href="/tournaments"
              className={`text-sm font-medium transition-colors ${
                isActive('/tournaments') ? 'text-accent' : 'text-gray-400 hover:text-white'
              }`}
            >
              Tournois
            </Link>
            <Link
              href="/stream"
              className={`text-sm font-medium transition-colors ${
                isActive('/stream') ? 'text-accent' : 'text-gray-400 hover:text-white'
              }`}
            >
              Streams
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 