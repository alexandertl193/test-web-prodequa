
import React, { useState } from 'react';
import { LeadData } from '../types';

interface StepFormProps {
  onSubmit: (data: LeadData) => void;
  onBack: () => void;
}

export const StepForm: React.FC<StepFormProps> = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState<LeadData>({
    email: '',
    whatsapp: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-8 text-center">
        <span className="text-5xl block mb-4">👨‍🚀</span>
        <h2 className="text-3xl font-bold text-[#212d40] mb-2 leading-tight">
          Identificación del Piloto
        </h2>
        <p className="text-[#212d40]/60 text-sm">
          Ingresa tus credenciales de tripulante para registrar el diagnóstico de tu nave.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-sm mx-auto">
        <div className="space-y-4">
          <div>
            <label className="block text-[10px] font-extrabold text-[#486BF5] uppercase mb-1.5 tracking-[0.2em]">
              Email Corporativo (Requerido)
            </label>
            <input
              required
              type="email"
              className="w-full border-gray-100 border-2 rounded-2xl p-4 focus:border-[#486BF5] focus:ring-4 focus:ring-[#486BF5]/5 outline-none transition-all bg-gray-50/50"
              placeholder="tu@empresa.com"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-[10px] font-extrabold text-[#486BF5] uppercase mb-1.5 tracking-[0.2em]">
              Canal de Telemetría / WhatsApp (Opcional)
            </label>
            <input
              type="tel"
              className="w-full border-gray-100 border-2 rounded-2xl p-4 focus:border-[#486BF5] focus:ring-4 focus:ring-[#486BF5]/5 outline-none transition-all bg-gray-50/50"
              placeholder="+51 999 999 999"
              value={formData.whatsapp}
              onChange={e => setFormData({...formData, whatsapp: e.target.value})}
            />
          </div>
        </div>

        <div className="pt-6 flex flex-col items-center gap-4">
          <button
            type="submit"
            className="w-full bg-[#486BF5] hover:bg-[#3758d4] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.01]"
          >
            Iniciar motores
          </button>
          <button 
            type="button"
            onClick={onBack}
            className="text-[#212d40]/40 hover:text-[#212d40] text-xs font-semibold uppercase tracking-widest transition-colors"
          >
            Atrás
          </button>
        </div>
      </form>
    </div>
  );
};
