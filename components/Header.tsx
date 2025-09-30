
import React from 'react';
import { BookIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-b from-blue-50 via-blue-50/50 to-[#f8fafc] py-20 text-center">
      <div className="container mx-auto px-4">
        <span className="inline-block bg-yellow-200 text-yellow-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
          Biblioteca de Salomão
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1b2852] max-w-4xl mx-auto leading-tight">
          150 Apostilas De Teologia, Do Básico Ao Avançado Para Aprender A Palavra Como Nunca Antes
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Um acervo prático com 150 apostilas de Teologia, organizadas em uma plataforma única. Uma verdadeira biblioteca básica e prática, para você entender a Bíblia e se tornar mestre no acesso à própria mente do livro mais sábio da Bíblia.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8">
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg shadow-sm p-3">
            <BookIcon className="h-6 w-6 text-yellow-500" />
            <span className="font-semibold text-gray-700">150 Apostilas</span>
          </div>
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg shadow-sm p-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-yellow-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            <span className="font-semibold text-gray-700">Acesso Imediato</span>
          </div>
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg shadow-sm p-3">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-yellow-500"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            <span className="font-semibold text-gray-700">Material Digital</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
