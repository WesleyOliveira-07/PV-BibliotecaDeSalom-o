
import React from 'react';

const FinalCta: React.FC = () => {
  return (
    <section className="bg-yellow-100 border-t-2 border-b-2 border-yellow-200 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-xl font-medium text-yellow-800">Por Apenas <span className="line-through">R$ 97,00</span></p>
        <h2 className="text-7xl md:text-8xl font-extrabold text-[#1b2852] my-4">Por Apenas R$ 27,00</h2>
        <a href="#" className="w-full max-w-md mx-auto inline-block bg-[#F97316] text-white font-bold py-5 px-8 rounded-lg text-xl hover:bg-orange-600 transition-colors shadow-lg animate-pulse">
          QUERO ACESSAR AGORA
        </a>
      </div>
    </section>
  );
};

export default FinalCta;
