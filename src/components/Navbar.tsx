'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900/50 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-accent">
            OpenFront
          </Link>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors ${
                  pathname === '/' ? 'text-accent' : 'text-gray-400 hover:text-white'
                }`}
              >
                Accueil
              </Link>
              <Link
                href="/tournaments"
                className={`text-sm font-medium transition-colors ${
                  pathname.startsWith('/tournaments') ? 'text-accent' : 'text-gray-400 hover:text-white'
                }`}
              >
                Tournois
              </Link>
              <Link
                href="/stream"
                className={`text-sm font-medium transition-colors ${
                  pathname === '/stream' ? 'text-accent' : 'text-gray-400 hover:text-white'
                }`}
              >
                Stream
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 