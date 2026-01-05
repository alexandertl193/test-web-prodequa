
import React from 'react';
import { COLORS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentStep, totalSteps }) => {
  // We only show progress bar from step 1 to 4 (questions)
  const showProgress = currentStep >= 1 && currentStep <= 4;
  const progress = (currentStep / 4) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 relative">
      <div className="w-full max-w-2xl bg-white/85 backdrop-blur-md shadow-2xl rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden transition-all duration-500 ship-card">
        
        {showProgress && (
          <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-50">
            <div 
              className="h-full bg-[#486BF5] transition-all duration-700 ease-out shadow-[0_0_10px_rgba(72,107,245,0.5)]"
              style={{ width: `${progress}%` }}
            />
            <div className="absolute top-4 left-4 text-[10px] font-bold text-[#486BF5] uppercase tracking-widest opacity-80">
              Coordenadas de Misión: {currentStep} / 4
            </div>
          </div>
        )}

        <main className="relative z-10">
          {children}
        </main>
      </div>

      <div className="mt-8 text-center text-[#212d40]/40 text-sm font-medium tracking-wide">
        <span className="opacity-50">Sistemas de navegación por</span> 
        <span className="text-[#486BF5] opacity-80 font-bold ml-1">Prodequa</span>
      </div>
    </div>
  );
};
