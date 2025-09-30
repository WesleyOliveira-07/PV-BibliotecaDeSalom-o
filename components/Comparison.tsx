
import React from 'react';
import { CheckIcon, CrossIcon } from './Icons';

const Comparison: React.FC = () => {
  return (
    <section className="py-20 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1b2852]">Compare as Diferenças</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-red-50 border border-red-200 rounded-xl p-8">
          <h3 className="font-bold text-xl mb-4 text-red-800">Sem a Biblioteca de Salomão</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CrossIcon className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Horas perdidas tentando entender textos difíceis</span>
            </li>
            <li className="flex items-start">
              <CrossIcon className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Formação teológica complicada que afasta em vez de aproximar</span>
            </li>
            <li className="flex items-start">
              <CrossIcon className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Dependência de outras pessoas para tirar dúvidas</span>
            </li>
            <li className="flex items-start">
              <CrossIcon className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Insegurança ao ensinar ou pregar por falta de base sólida</span>
            </li>
          </ul>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-8">
          <h3 className="font-bold text-xl mb-4 text-green-800">Com a Biblioteca de Salomão</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">150 apostilas organizadas, prontas para estudar</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Áudios para ouvir onde e quando quiser, de forma flexível</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Independência para interpretar e aplicar a Bíblia</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Autoridade real com fundamentos bíblicos aplicados</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
