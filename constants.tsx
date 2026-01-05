
import { Question, ServiceCategory, ResultProfile } from './types';

export const COLORS = {
  bg: '#F2F7FF',
  title: '#212d40',
  accent: '#486BF5',
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: '¿Cómo describirías tu nave ecommerce hoy?',
    type: 'single',
    options: [
      { id: 'A', icon: '🧱', label: 'Transbordador en construcción', description: 'Aún no tenemos ecommerce robusto / estamos por despegar.' },
      { id: 'B', icon: '🚀', label: 'Cohete funcional con mejoras pendientes', description: 'Vendemos online, pero sentimos límites para escalar.' },
      { id: 'C', icon: '🧯', label: 'Nave averiada en órbita', description: 'Incidencias, caídas, lentitud o mucho "apagar fuegos".' },
      { id: 'D', icon: '🛰️', label: 'Estación avanzada pero aislada', description: 'La tienda va bien, pero los sistemas no conversan entre sí.' },
    ]
  },
  {
    id: 2,
    title: '¿Qué "anomalía" te frena más en la misión?',
    type: 'single',
    options: [
      { id: 'A', icon: '☄️', label: 'Meteoritos de datos', description: 'Stock/precios/pedidos no están sincronizados; hay reprocesos.' },
      { id: 'B', icon: '⛽', label: 'Combustible bajo', description: 'Tráfico hay, pero la conversión / ticket / recompra no despega.' },
      { id: 'C', icon: '🧑‍🚒', label: 'Tripulación sobrecargada', description: 'El equipo vive resolviendo incidencias y tareas repetitivas.' },
      { id: 'D', icon: '🧩', label: 'Faltan módulos clave', description: 'Necesitamos features puntuales para acelerar ventas o UX.' },
    ]
  },
  {
    id: 3,
    title: '¿Qué sistemas ya están dentro de tu nave?',
    subtitle: 'Elige todos los que apliquen',
    type: 'multiple',
    options: [
      { id: 'erp', icon: '⚙️', label: 'ERP', description: 'SAP / Odoo / Oracle / Softland / otro' },
      { id: 'crm', icon: '👤', label: 'CRM', description: 'HubSpot / Salesforce / Zoho / otro' },
      { id: 'platform', icon: '📦', label: 'Plataforma ecommerce', description: 'VTEX / Shopify / Magento / WooCommerce' },
      { id: 'mkt', icon: '🏪', label: 'Marketplaces', description: 'Mercado Libre / Falabella / Linio' },
      { id: 'vtex', icon: 'V', label: 'Usamos VTEX', description: 'Plataforma nativa en la nube' },
      { id: 'nothing', icon: '🌑', label: 'Nada / muy básico', description: 'Sin sistemas integrados aún' },
    ]
  },
  {
    id: 4,
    title: '¿Cuándo necesitas que la nave mejore?',
    type: 'single',
    options: [
      { id: 'A', icon: '⚡', label: 'Inmediato', description: '0–4 semanas' },
      { id: 'B', icon: '🗓️', label: 'Pronto', description: '1–3 meses' },
      { id: 'C', icon: '🧭', label: 'Planificado', description: '3–6 meses' },
      { id: 'D', icon: '🌌', label: 'Largo plazo', description: '6+ meses' },
    ]
  }
];

export const RESULTS: Record<ServiceCategory, ResultProfile> = {
  [ServiceCategory.Integracion]: {
    id: ServiceCategory.Integracion,
    serviceName: 'Core Integration Bridge',
    captainName: 'Arquitecto de Enlace',
    title: 'Diagnóstico: Fragmentación de Datos',
    icon: '🔗',
    narrative: 'Su nave sufre de "datos aislados". La falta de conexión automática entre su tienda y su ERP (SAP/Odoo) genera errores críticos de stock y costos operativos ocultos por procesos manuales.',
    businessBenefit: 'Automatización absoluta de inventarios y pedidos. Eliminamos el error humano para que su equipo se enfoque en la estrategia, no en la digitación.',
    cta: 'Agendar Auditoría de Integración',
    serviceUrl: 'https://prodequa.com/integraciones-ecommerce',
    casesUrl: 'https://prodequa.com/casos-de-exito',
  },
  [ServiceCategory.Desarrollo]: {
    id: ServiceCategory.Desarrollo,
    serviceName: 'Enterprise eCommerce Evolution',
    captainName: 'Ingeniero de Propulsión',
    title: 'Diagnóstico: Limitación de Estructura',
    icon: '🏗️',
    narrative: 'El motor actual de su eCommerce ha llegado a su límite técnico. Necesita una arquitectura escalable (VTEX/Headless) que soporte el alto tráfico sin caídas y permita una expansión global ágil.',
    businessBenefit: 'Migración a una plataforma de alto rendimiento diseñada para escalar ventas masivas con una experiencia de usuario ultra-rápida.',
    cta: 'Consultar Plan de Desarrollo',
    serviceUrl: 'https://prodequa.com/desarrollo-ecommerce',
    casesUrl: 'https://prodequa.com/casos-de-exito',
  },
  [ServiceCategory.Soporte]: {
    id: ServiceCategory.Soporte,
    serviceName: 'Mission Critical Support',
    captainName: 'Jefe de Estabilidad',
    title: 'Diagnóstico: Riesgo Operativo',
    icon: '🛡️',
    narrative: 'Su operación consume demasiada energía "apagando incendios". La falta de un equipo experto para mantenimiento y resolución proactiva frena su crecimiento y pone en riesgo la facturación.',
    businessBenefit: 'Continuidad operativa garantizada 24/7. Transformamos su soporte en un brazo evolutivo que mejora su tienda cada mes de forma constante.',
    cta: 'Activar Soporte Estratégico',
    serviceUrl: 'https://prodequa.com/soporte-y-mantenimiento-vtex',
    casesUrl: 'https://prodequa.com/casos-de-exito',
  },
  [ServiceCategory.Soluciones]: {
    id: ServiceCategory.Soluciones,
    serviceName: 'Growth Boosters & Custom Solutions',
    captainName: 'Estratega de Aceleración',
    title: 'Diagnóstico: Potencial de Conversión',
    icon: '🚀',
    narrative: 'Su nave es sólida, pero carece de los "boosters" necesarios para maximizar la conversión. Necesita funcionalidades personalizadas que eleven el ticket promedio y la fidelidad del cliente.',
    businessBenefit: 'Implementación de componentes avanzados y lógica personalizada que impactan directamente en su tasa de conversión y ROI.',
    cta: 'Ver Catálogo de Soluciones',
    serviceUrl: 'https://prodequa.com/soluciones-ecommerce',
    casesUrl: 'https://prodequa.com/casos-de-exito',
  }
};
