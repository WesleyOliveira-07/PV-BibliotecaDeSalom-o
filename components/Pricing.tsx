
import React from 'react';
import { CheckIcon } from './Icons';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 max-w-5xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1b2852]">ESCOLHA A MELHOR OPÇÃO PARA VOCÊ</h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 w-full max-w-md text-center">
          <h3 className="text-2xl font-bold text-[#1b2852]">PLANO BÁSICO</h3>
          <p className="text-gray-500 mt-2 mb-6">150 Apostilas de Teologia</p>
          <p className="text-5xl font-extrabold text-[#1b2852] mb-6">R$10</p>
          <a href="#" className="w-full inline-block bg-orange-500 text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-orange-600 transition-colors shadow-lg">
            SIM! QUERO ACESSAR AGORA
          </a>
        </div>

        <div className="relative bg-white border-2 border-orange-400 rounded-2xl p-8 w-full max-w-md text-center shadow-2xl">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-400 text-white text-sm font-bold px-4 py-1 rounded-full">
            ⭐ MAIS VENDIDO ⭐
          </div>
          <h3 className="text-2xl font-bold text-[#1b2852]">SUPER OFERTA + BÔNUS ⭐</h3>
          <ul className="text-left my-6 space-y-3 text-gray-700">
            <li className="flex items-start"><CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />150 Apostilas de Teologia</li>
            <li className="flex items-start"><CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />Bônus 1: Audiobook A Grande Jornada da Fé</li>
            <li className="flex items-start"><CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />Bônus 2: 24h de Louvor e Oração para você sentir</li>
          </ul>
          <p className="text-gray-500">De <span className="line-through">R$127</span> por apenas:</p>
          <p className="text-6xl font-extrabold text-[#1b2852] my-2">R$27</p>
          <p className="text-gray-600 mb-6">ou 3x de R$9,56</p>
          <a href="#" className="w-full inline-block bg-[#F97316] text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-orange-600 transition-colors shadow-lg animate-pulse">
            SIM! QUERO ACESSAR AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
