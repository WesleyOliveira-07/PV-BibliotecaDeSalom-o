
import React from 'react';
import { CheckIcon } from './Icons';

const Summary: React.FC = () => {
  return (
    <section className="py-20 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1b2852]">Resumindo</h2>
        <p className="mt-4 text-lg text-gray-600">Pode ser a última vez que você vê essa oferta. Então, antes que faça sua inscrição e tenha acesso completo à Biblioteca de Salomão, deixa eu resumir tudo o que você vai receber:</p>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
        <h3 className="font-bold text-xl text-center text-indigo-800 mb-6">Sua Proposta Simples e Clara:</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <span className="text-gray-700"><span className="font-bold">Você vai dominar a Bíblia</span> com 150 apostilas organizadas na plataforma da Biblioteca de Salomão.</span>
          </li>
          <li className="flex items-start">
            <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <span className="text-gray-700"><span className="font-bold">Você não precisa pagar mensalidades caras.</span> Hoje, seu único investimento é de apenas 12x de R$ 9,56 ou R$ 97,00 à vista.</span>
          </li>
          <li className="flex items-start">
            <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <span className="text-gray-700"><span className="font-bold">Você não precisa depender de professores ou tutores.</span> O material foi pensado para que você estude e aprenda sozinho, no seu tempo.</span>
          </li>
          <li className="flex items-start">
            <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <span className="text-gray-700"><span className="font-bold">Você não precisa fazer, ler ou comprar mais nada para ter acesso instantâneo a TUDO que eu prometi.</span></span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Summary;
