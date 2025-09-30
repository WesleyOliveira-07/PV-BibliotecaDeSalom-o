
import React from 'react';
import { BookIcon } from './Icons';

const LearningGrid: React.FC = () => {
    const learningTopics = [
        { title: "Interpretação Bíblica", description: "O jeito certo para interpretar a Bíblia e nunca mais ter dúvidas sobre o que um texto significa." },
        { title: "Disciplinas Espirituais", description: "Oração, Jejum e Leitura Bíblica como você nunca viu para ter uma vida espiritual forte e ativa." },
        { title: "Crescimento Pessoal", description: "Um manual para você abandonar velhos hábitos e desenvolver uma mentalidade de crescimento e prosperidade." },
        { title: "Formação Prática", description: "A base da vida cristã para você resolver dilemas, vencer tentações e experimentar a verdadeira liberdade." },
        { title: "Os 4 Evangelhos", description: "A vida, morte e ressurreição de Jesus com base nos quatro evangelhos para você entender quem é o Cristo e o que Ele fez." },
        { title: "Fundamentos da Teologia", description: "O essencial da doutrina cristã para você entender e viver os fundamentos da sua fé com profundidade." },
        { title: "Temas Profundos", description: "Uma análise aprofundada para você dominar temas bíblicos complexos e responder perguntas difíceis com segurança." },
        { title: "Frutos do Espírito", description: "Amor, Alegria e Paz para você ter um relacionamento saudável com Deus, com os outros e consigo mesmo." },
        { title: "Visão Ministerial", description: "O passo a passo para você descobrir seu chamado, desenvolver seus dons e servir a Deus com propósito e excelência." },
        { title: "Liderança Aplicada", description: "Como liderar com sabedoria, inspirar pessoas e construir um ministério sólido e relevante que transforma vidas." },
        { title: "Excelência Total", description: "O caminho para uma vida plena e próspera em todas as áreas, aplicando os princípios bíblicos de forma prática e eficaz." },
    ];

  return (
    <section className="py-20 bg-blue-50 rounded-3xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b2852]">O Que Você Vai Aprender</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Você vai entender a Bíblia com a profundidade de um teólogo formado e a clareza de quem não precisou fazer um seminário de anos. São materiais práticos e diretos ao ponto para você sentar ler (ou ouvir) e já aplicar imediatamente. Você vai:
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningTopics.map((topic, index) => (
            <div key={index} className="bg-indigo-600 text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-3">
                <BookIcon className="h-5 w-5 mr-3" />
                <h3 className="font-bold text-lg">{topic.title}</h3>
              </div>
              <p className="text-indigo-200">{topic.description}</p>
            </div>
          ))}
        </div>
         <div className="mt-8 text-center bg-white p-6 rounded-lg shadow">
          <p className="text-lg text-gray-700">Tudo isso de Forma <span className="font-bold">Organizada e Progressiva</span>.</p>
          <p className="text-gray-500">Do começo ao fim, sem pular etapas e sem ficar perdido no meio do caminho.</p>
        </div>
      </div>
    </section>
  );
};

export default LearningGrid;
