import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-guerra-black">
            {/* Background */}
            <div className="absolute inset-0 z-0 select-none">
                <img
                    src="/hero_background.png"
                    alt="Night Drive Background"
                    className="w-full h-full object-cover object-center opacity-40 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-guerra-black via-guerra-black/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-guerra-black via-guerra-black/40 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold leading-tight tracking-tight text-white mb-8">
                            TU TIEMPO <br />
                            ES <span className="text-transparent bg-clip-text bg-gradient-to-r from-guerra-red to-red-500 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">ORO.</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl md:text-3xl text-slate-300 font-light mb-12 max-w-2xl border-l-4 border-guerra-red pl-6"
                    >
                        NOSOTROS GANAMOS LA GUERRA <br />
                        <span className="font-semibold text-white">AL PAPELEO.</span>
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(220, 38, 38, 0.6)" }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ delay: 0.8 }}
                        className="group relative bg-guerra-red text-white px-10 py-5 rounded-sm font-bold tracking-widest uppercase text-sm md:text-base shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all overflow-hidden"
                    >
                        <div className="relative z-10 flex items-center gap-3">
                            Iniciar Trámite Express
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </div>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </motion.button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
            >
                <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-guerra-red to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
