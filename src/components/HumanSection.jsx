import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

import FloatingBubbles from './FloatingBubbles';

const HumanSection = () => {
    return (
        <section className="relative py-24 bg-guerra-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Visual - Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <FloatingBubbles />
                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-guerra-red/30"></div>
                        <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-guerra-red/30"></div>
                    </motion.div>

                    {/* Content - Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-sm font-bold text-guerra-red tracking-[0.3em] uppercase mb-6">Excelencia Profesional</h2>
                        <h3 className="text-4xl md:text-5xl font-sans font-bold text-white leading-tight mb-8">
                            Tecnología y <span className="text-guerra-red">Experiencia</span>. <br />
                            <span className="italic font-serif text-slate-300">Garantía Absoluta</span>.
                        </h3>

                        <p className="text-slate-400 text-lg leading-relaxed mb-10 font-light border-l border-slate-800 pl-6">
                            Combinamos la última tecnología de gestión telemática con un equipo de expertos dedicados.
                            Cada trámite es supervisado para garantizar cero errores y la máxima velocidad.
                            Porque su empresa no puede detenerse.
                        </p>

                        <div className="space-y-4 mb-12">
                            {['Gestión Integral de Flotas', 'Atención Directa y Personal', 'Resolución Express de Incidencias'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle2 className="text-guerra-red" size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HumanSection;
