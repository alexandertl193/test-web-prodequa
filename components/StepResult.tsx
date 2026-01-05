
import React from 'react';
import { RESULTS } from '../constants';
import { ServiceCategory, LeadData } from '../types';

interface StepResultProps {
  primary: ServiceCategory;
  secondary?: ServiceCategory;
  leadData: LeadData;
}

export const StepResult: React.FC<StepResultProps> = ({ primary, secondary, leadData }) => {
  const profile = RESULTS[primary];
  const secondProfile = secondary ? RESULTS[secondary] : null;

  return (
    <div className="animate-in zoom-in-95 duration-700">
      <div className="text-center mb-8">
        <div className="inline-block bg-[#F2F7FF] px-4 py-1.5 rounded-full text-[#486BF5] text-[10px] font-extrabold uppercase tracking-[0.2em] mb-4 border border-[#486BF5]/10">
          Informe de Diagnóstico Finalizado
        </div>
        <h2 className="text-3xl font-extrabold text-[#212d40] mb-2 leading-tight">
          Estrategia para el Piloto <span className="text-[#486BF5]">{leadData.email.split('@')[0]}</span>
        </h2>
        <p className="text-[#212d40]/60 text-sm font-medium">
          Hemos identificado la solución técnica precisa para la escalabilidad de su eCommerce.
        </p>
      </div>

      <div className="bg-white border-2 border-[#486BF5]/10 rounded-[2.5rem] p-8 mb-6 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-6">
            <span className="text-5xl opacity-10">{profile.icon}</span>
        </div>
        
        <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#486BF5]/10 text-[#486BF5] rounded-2xl flex items-center justify-center text-2xl">
                {profile.icon}
            </div>
            <div>
                <h4 className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest leading-none mb-1">Servicio Clave</h4>
                <p className="text-xl font-bold text-[#212d40]">{profile.serviceName}</p>
            </div>
        </div>
        
        <div className="space-y-6">
          <section>
            <h4 className="text-[10px] font-extrabold text-[#486BF5] uppercase tracking-widest mb-2">Diagnóstico de la Misión</h4>
            <p className="text-[#212d40] leading-relaxed font-semibold text-lg italic">
              "{profile.narrative}"
            </p>
          </section>

          <section className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
            <h4 className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">Beneficio Principal</h4>
            <p className="text-[#212d40]/80 leading-relaxed font-bold">
              {profile.businessBenefit}
            </p>
          </section>
        </div>
      </div>

      {/* Tiered Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        <button
          onClick={() => window.open(profile.casesUrl, '_blank')}
          className="flex items-center justify-center gap-2 bg-white border-2 border-gray-100 hover:border-[#486BF5]/30 hover:bg-gray-50 text-[#212d40] px-4 py-4 rounded-2xl font-bold text-sm transition-all"
        >
          <span>📁</span> Ver Casos de Éxito
        </button>
        <button
          onClick={() => window.open(profile.serviceUrl, '_blank')}
          className="flex items-center justify-center gap-2 bg-white border-2 border-gray-100 hover:border-[#486BF5]/30 hover:bg-gray-50 text-[#212d40] px-4 py-4 rounded-2xl font-bold text-sm transition-all"
        >
          <span>🌐</span> Ver detalles del servicio
        </button>
      </div>

      <div className="flex flex-col items-center gap-6">
        <button
          onClick={() => window.open('https://prodequa.com/conversemos', '_blank')}
          className="w-full bg-[#486BF5] hover:bg-[#3758d4] text-white px-10 py-6 rounded-2xl font-extrabold text-xl transition-all shadow-lg hover:shadow-2xl transform hover:scale-[1.01] active:scale-100 flex items-center justify-center gap-3"
        >
          <span>🗓️</span> {profile.cta}
        </button>
        
        <button 
          onClick={() => window.location.reload()}
          className="text-[#212d40]/40 hover:text-[#212d40] text-xs font-bold uppercase tracking-[0.2em] transition-colors"
        >
          Reiniciar misión
        </button>
      </div>
    </div>
  );
};
