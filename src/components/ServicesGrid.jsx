import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ title, desc, icon, featured = false, className = "" }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className={`group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-sm overflow-hidden hover:border-guerra-red/50 transition-all duration-300 ${className}`}
    >
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-guerra-red/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-lg bg-black/50 border border-slate-800 p-2 group-hover:scale-110 transition-transform duration-500">
                    <img src={icon} alt={title} className="w-full h-full object-contain" />
                </div>
                <ArrowUpRight className="text-slate-600 group-hover:text-guerra-red transition-colors" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-guerra-red transition-colors">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow font-light">{desc}</p>

            <div className="mt-auto">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">Explorar Servicio</span>
            </div>
        </div>
    </motion.div>
);

const ServicesGrid = () => {
    return (
        <section id="servicios" className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Servicios <span className="text-guerra-red">Premium</span></h2>
                    <p className="text-slate-400 max-w-xl mx-auto">Gestión integral para vehículos y conductores.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(0, 1fr)]">
                    {/* Transferencias - Large Card */}
                    <ServiceCard
                        title="Transferencias"
                        desc="Cambio de titularidad 100% telemático. Sin citas previas, sin desplazamientos. Obtenga su provisional al instante."
                        icon="/icon_transfer.png"
                        className="lg:col-span-2 lg:row-span-1 border-l-4 border-l-guerra-red"
                    />

                    {/* Matriculaciones */}
                    <ServiceCard
                        title="Matriculaciones"
                        desc="Gestión de matriculación para vehículos nuevos y rematriculaciones. Placas entregadas en mano."
                        icon="/icon_matricula.png"
                    />

                    {/* Importación */}
                    <ServiceCard
                        title="Importación"
                        desc="Expertos en vehículos importados. Fichas reducidas, ITV y liquidación de impuestos de aduana."
                        icon="/icon_import.png"
                    />

                    {/* Flotas / Other (Generic Placeholder or reused icon) */}
                    <ServiceCard
                        title="Gestión de Flotas"
                        desc="Soluciones corporativas para empresas de transporte y renting. Optimice su gestión administrativa."
                        icon="/icon_transfer.png"
                        className="lg:col-span-2"
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
