
import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from './Icons';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center text-left py-4 px-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg text-gray-800">{title}</span>
        {isOpen ? <MinusIcon className="h-6 w-6 text-indigo-600" /> : <PlusIcon className="h-6 w-6 text-gray-500" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
};

const Faq: React.FC = () => {
  const faqItems = [
    {
      question: "Preciso ter formação em Teologia?",
      answer: "Não, a Biblioteca de Salomão foi criada para todos, desde o iniciante até o avançado. O conteúdo é organizado de forma progressiva para que você aprenda passo a passo, mesmo sem conhecimento prévio."
    },
    {
      question: "Posso estudar no meu ritmo?",
      answer: "Sim! O acesso é vitalício e você pode estudar quando e onde quiser, sem pressão de prazos. Todo o material estará disponível para você acessar sempre que precisar."
    },
    {
      question: "As apostilas são confiáveis?",
      answer: "Com certeza. Todo o material é cuidadosamente elaborado com base em uma sólida exegese bíblica e em fundamentos cristãos da sã doutrina."
    },
    {
      question: "Como vou receber o material?",
      answer: "O acesso é 100% digital e imediato. Após a confirmação do pagamento, você receberá um e-mail com todas as instruções para acessar a plataforma e começar a estudar."
    },
    {
      question: "É muito conteúdo pra mim, não vou dar conta.",
      answer: "Não se preocupe. O método da Sabedoria Organizada é feito para você aprender um pouco a cada dia, de forma consistente. A organização do conteúdo facilita o aprendizado e evita a sobrecarga."
    }
  ];

  return (
    <section className="py-20 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1b2852]">Perguntas Frequentes</h2>
      </div>
      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} title={item.question}>
            <p>{item.answer}</p>
          </AccordionItem>
        ))}
      </div>
    </section>
  );
};

export default Faq;
