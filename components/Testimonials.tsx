
import React from 'react';
import { StarIcon } from './Icons';

const Testimonials: React.FC = () => {
    const testimonials = [
        { name: "Pastor João Silva", quote: "Material excelente e de fácil compreensão! Recomendo a todos que desejam aprofundar-se nas Escrituras." },
        { name: "Maria Santos", quote: "Estou amando a organização e a clareza das apostilas. Transformou minha forma de estudar a Bíblia." },
        { name: "Carlos Oliveira", quote: "Uma ferramenta indispensável para líderes e membros que buscam crescimento espiritual com base sólida." }
    ];

  return (
    <section className="py-20 bg-blue-50/70">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b2852]">Veja o Que Dizem Quem Já Usa</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                 <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                    <div className="flex text-yellow-400 mb-4">
                        <StarIcon className="h-5 w-5" />
                        <StarIcon className="h-5 w-5" />
                        <StarIcon className="h-5 w-5" />
                        <StarIcon className="h-5 w-5" />
                        <StarIcon className="h-5 w-5" />
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                        <img src={`https://picsum.photos/seed/${testimonial.name}/40/40`} alt={testimonial.name} className="w-10 h-10 rounded-full mr-4" />
                        <span className="font-semibold text-gray-800">{testimonial.name}</span>
                    </div>
                 </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Testimonials;
