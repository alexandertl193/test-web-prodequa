
import React from 'react';

interface StepIntroProps {
  onStart: () => void;
}

export const StepIntro: React.FC<StepIntroProps> = ({ onStart }) => {
  return (
    <div className="text-center">
      <div className="mb-6 flex justify-center">
        <span className="text-7xl floating">🚀</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-[#212d40] mb-4 leading-tight">
        Diagnóstico rápido de tu nave eCommerce
      </h1>
      <p className="text-[#212d40]/80 text-lg mb-8 max-w-lg mx-auto">
        Imagina que tu ecommerce es una nave rumbo al crecimiento. Responde 4 preguntas y te diremos qué “módulo” necesitas para llegar más lejos (sin apagar incendios en el camino).
      </p>
      
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={onStart}
          className="bg-[#486BF5] hover:bg-[#3758d4] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Iniciar misión
        </button>
        <span className="text-[#212d40]/50 text-xs font-medium uppercase tracking-widest">
          Tiempo estimado: 1 minuto
        </span>
      </div>
    </div>
  );
};
