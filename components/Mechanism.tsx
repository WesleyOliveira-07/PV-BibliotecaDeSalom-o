
import React from 'react';
import { CheckIcon } from './Icons';

const Mechanism: React.FC = () => {
  return (
    <section className="py-20 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1b2852]">O Mecanismo Único da <span className="text-yellow-500">Sabedoria Organizada</span></h2>
        <div className="mt-4 inline-block w-24 h-1 bg-yellow-400 rounded"></div>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Um método de estudo simples e eficaz que te ajuda a entender a Bíblia com profundidade, sem perder tempo ou se confundir.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start">
            <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <CheckIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#1b2852]">Estude no seu ritmo, sem pressão de prazos ou horários.</h3>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start">
            <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <CheckIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#1b2852]">Linguagem direta e didática, sem termos técnicos complicados.</h3>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start">
            <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <CheckIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#1b2852]">Aplicação prática imediata para seu ministério e vida pessoal.</h3>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start">
            <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <CheckIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#1b2852]">Organização progressiva: do básico ao avançado, passo a passo.</h3>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start">
            <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <CheckIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#1b2852]">Aulas em áudio para você ouvir quando e onde quiser.</h3>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start">
            <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <CheckIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#1b2852]">Bíblia com comentários para aprofundar seu conhecimento.</h3>
        </div>
      </div>
    </section>
  );
};

export default Mechanism;
