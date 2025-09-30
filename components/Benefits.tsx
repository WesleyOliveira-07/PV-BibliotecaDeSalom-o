
import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section className="py-20 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1b2852]">Ao Concluir Seus Estudos</h2>
        <p className="mt-4 text-lg text-gray-600">Você vai ter mais...</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-200">
            <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                </div>
            </div>
          <h3 className="font-bold text-xl mb-2 text-[#1b2852]">Autoridade Espiritual</h3>
          <p className="text-gray-600">Para ensinar, pregar e aconselhar com base na Palavra de Deus.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-200">
            <div className="flex justify-center mb-4">
                 <div className="bg-blue-100 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                </div>
            </div>
          <h3 className="font-bold text-xl mb-2 text-[#1b2852]">Clareza Teológica</h3>
          <p className="text-gray-600">Para entender qualquer texto bíblico e não se confundir mais.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-200">
            <div className="flex justify-center mb-4">
                 <div className="bg-blue-100 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"></path></svg>
                </div>
            </div>
          <h3 className="font-bold text-xl mb-2 text-[#1b2852]">Independência Total</h3>
          <p className="text-gray-600">Para não depender de pastores ou youtubers para estudar a Bíblia.</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
