
import React, { useState } from 'react';
import { Question } from '../types';

interface StepQuestionProps {
  question: Question;
  onNext: (answer: string | string[]) => void;
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
}

export const StepQuestion: React.FC<StepQuestionProps> = ({ question, onNext, onBack, currentStep, totalSteps }) => {
  const [selected, setSelected] = useState<string | string[]>(question.type === 'multiple' ? [] : '');

  const handleSelect = (id: string) => {
    if (question.type === 'single') {
      setSelected(id);
      // Wait a bit for visual feedback then auto-next on single choice
      setTimeout(() => onNext(id), 400);
    } else {
      setSelected((prev) => {
        const arr = prev as string[];
        if (arr.includes(id)) return arr.filter(i => i !== id);
        return [...arr, id];
      });
    }
  };

  const isSelected = (id: string) => {
    if (Array.isArray(selected)) return selected.includes(id);
    return selected === id;
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold text-[#212d40] mb-2 leading-tight">
        {question.title}
      </h2>
      {question.subtitle && (
        <p className="text-[#212d40]/60 text-sm mb-6">{question.subtitle}</p>
      )}

      <div className="grid grid-cols-1 gap-3 mt-6">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            className={`
              flex items-start text-left p-5 rounded-2xl border-2 transition-all group
              ${isSelected(option.id) 
                ? 'border-[#486BF5] bg-[#F2F7FF] shadow-md ring-1 ring-[#486BF5]/20' 
                : 'border-gray-100 bg-white hover:border-[#486BF5]/30 hover:bg-gray-50'}
            `}
          >
            <span className="text-3xl mr-4 group-hover:scale-110 transition-transform">
              {option.icon}
            </span>
            <div>
              <div className={`font-bold text-base mb-0.5 ${isSelected(option.id) ? 'text-[#486BF5]' : 'text-[#212d40]'}`}>
                {option.label}
              </div>
              <div className="text-sm text-[#212d40]/60 line-clamp-2">
                {option.description}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-10 flex justify-between items-center">
        <button 
          onClick={onBack}
          className="text-[#212d40]/60 hover:text-[#212d40] text-sm font-semibold transition-colors"
        >
          ← Atrás
        </button>
        
        {question.type === 'multiple' && (
          <button
            disabled={(selected as string[]).length === 0}
            onClick={() => onNext(selected)}
            className="bg-[#486BF5] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#3758d4] text-white px-8 py-3 rounded-full font-semibold transition-all shadow-md"
          >
            Continuar misión
          </button>
        )}
      </div>
    </div>
  );
};
