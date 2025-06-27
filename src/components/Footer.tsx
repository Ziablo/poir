'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-lg border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © 2025 OpenFront. Tous droits réservés.
          </div>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-gray-400 hover:text-accent transition-colors">
              Termes et Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 