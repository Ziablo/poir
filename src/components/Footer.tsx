import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-lg border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">OpenFront Tournaments</h3>
            <p className="text-gray-400">
              La plateforme officielle des tournois OpenFront
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-accent transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/tournaments" className="text-gray-400 hover:text-accent transition-colors">
                  Tournois
                </Link>
              </li>
              <li>
                <Link href="/stream" className="text-gray-400 hover:text-accent transition-colors">
                  Streams
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Ressources</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                  Twitch
                </a>
              </li>
              <li>
                <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                  Discord
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Légal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/mentions-legales" className="text-gray-400 hover:text-accent transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-gray-400 hover:text-accent transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} OpenFront Tournaments. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 