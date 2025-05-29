'use client';

import ScrollReveal from '@/components/ScrollReveal';
import { TrophyIcon, UserGroupIcon, ClockIcon, MapIcon } from '@heroicons/react/24/outline';

export default function BobbeurTournament() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">TOURNOI DE BOBBEUR</h1>
          <p className="text-xl text-gray-300">🎉 TOURNOI – INFOS & RÈGLES GÉNÉRALES 🎉</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">📋 Comment ça marche ?</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">📝</span>
              <span>Inscription obligatoire : poste ton pseudo suivi de FFA#1 dans le salon prévu.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">➡️</span>
              <span>Le numéro (#...) correspond à l'édition du tournoi, donc vérifie bien avant de t'inscrire !</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <span>Une fois inscrit, attends simplement la date et l'heure du live.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⏰</span>
              <span>Si tu n'es pas là à temps, un viewer prendra ta place.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🗂️</span>
              <span>Tu seras ajouté à un groupe (A, B, C ou D) selon le nombre de participants.</span>
            </li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">🎮 STRUCTURE DU TOURNOI</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">🌀 Tour 1 : Mêlées Générales</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Tous les joueurs participent à 8 games FFA.</li>
                <li>Chaque gagnant est versé dans le groupe A ou B.</li>
                <li>Le groupe détermine la difficulté du parcours vers la finale.</li>
                <li>Map grande, choisie par la roue des continents 🌍.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">⚡ Tour 2 : Speed Games</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Groupes A et B s'affrontent en format 1v1v1v1.</li>
                <li>Sur des petites maps donc game rapide.</li>
                <li>Les 2 premiers de chaque game accèdent à la phase finale pour gagner le cashprize 💰.</li>
                <li>Les autres joueront pour les dernières places du classement.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">🏆 Tour 3 : Matchs de Classement</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Les gagnants des poules s'affrontent pour les places 1 à 4.</li>
                <li>Les autres se battent pour les places 5 à 8.</li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.6}>
        <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">📊 Système de Classement</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { place: "1er", points: "10 pts" },
              { place: "2e", points: "8 pts" },
              { place: "3e", points: "7 pts" },
              { place: "4e", points: "5 pts" },
              { place: "5e", points: "4 pts" },
              { place: "6e", points: "3 pts" },
              { place: "7e", points: "2 pts" },
              { place: "8e", points: "0 pt" },
            ].map((item, index) => (
              <div key={index} className="bg-gray-700/50 rounded p-3">
                <div className="font-bold text-accent">{item.place}</div>
                <div className="text-gray-300">{item.points}</div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.8}>
        <div className="bg-gray-800/50 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">🕹️ Infos In-Game</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <MapIcon className="h-6 w-6 text-accent" />
              <span className="text-gray-300">Map tirée au sort par la roue des continents</span>
            </div>
            <div className="flex items-center space-x-2">
              <ClockIcon className="h-6 w-6 text-accent" />
              <span className="text-gray-300">Durée max par game : 30 minutes</span>
            </div>
          </div>
          <p className="mt-4 text-gray-400 italic">Pas de classement individuel pour le moment</p>
        </div>
      </ScrollReveal>
    </div>
  );
} 