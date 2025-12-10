
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const ReviewCard = ({ name, date, text, initial }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-slate-900/50 backdrop-blur-md rounded-sm p-6 shadow-xl border border-slate-800 flex flex-col relative hover:border-guerra-red/30 transition-colors duration-300"
    >
        <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-guerra-red to-red-900 text-white flex items-center justify-center font-bold text-sm shadow-lg">
                {initial}
            </div>
            <div>
                <div className="font-bold text-white text-sm">{name}</div>
                <div className="text-xs text-slate-500">{date}</div>
            </div>
            {/* Google Icon Placeholder - Kept colored for authenticity */}
            <div className="ml-auto w-6 h-6 opacity-80 hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.35 11.1H12V15.3H17.5C17.25 16.6 16.5 17.7 15.3 18.5L18.85 21.2C20.9 19.3 22.1 16.5 22.1 13.05C22.1 12.35 22 11.75 21.85 11.1H21.35Z" fill="#4285F4" /><path d="M12 23C14.75 23 17.05 22.1 18.85 20.45L15.3 17.25C14.45 17.95 13.35 18.35 12 18.35C9.35 18.35 7.1 16.55 6.3 14.15L2.6 17C4.35 20.55 8.1 23 12 23Z" fill="#34A853" /><path d="M6.3 14.15C5.9 12.95 5.9 11.65 6.3 10.45L2.6 7.6C1.05 10.65 1.05 13.9 2.6 17L6.3 14.15Z" fill="#FBBC05" /><path d="M12 5.65C13.5 5.65 14.85 6.15 15.9 7.15L19.25 3.8C17.2 1.9 14.75 1 12 1C8.1 1 4.35 3.45 2.6 7L6.3 9.85C7.1 7.45 9.35 5.65 12 5.65Z" fill="#EA4335" /></svg>
            </div>
        </div>

        <div className="flex text-yellow-500 mb-3 text-xs gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" stroke="none" />)}
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-4 font-light">
            {text}
        </p>
    </motion.div>
);

const TestimonialsSection = () => {
    return (
        <section className="py-24 bg-guerra-black border-t border-slate-900 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-guerra-red/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="font-bold text-white text-2xl">Excelente</span>
                            <div className="flex text-yellow-500 gap-1">
                                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" stroke="none" />)}
                            </div>
                        </div>
                        <p className="text-slate-500 text-sm">Basado en <span className="font-bold text-slate-300 underline decoration-slate-600 underline-offset-4">48 reseñas de Google</span></p>
                    </div>

                    <button className="bg-transparent border border-slate-700 px-6 py-2 rounded-sm text-sm font-medium text-slate-300 hover:text-white hover:border-guerra-red hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all uppercase tracking-wider">
                        Ver todas las reseñas
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ReviewCard
                        initial="J"
                        name="Javier Martínez"
                        date="hace 2 semanas"
                        text="Increíble servicio. Gestionaron la transferencia de mi coche en cuestión de minutos y todo online. Muy recomendable para evitar colas en tráfico."
                    />
                    <ReviewCard
                        initial="L"
                        name="Laura Benet"
                        date="hace 1 mes"
                        text="Trato muy profesional por parte de todo el equipo. Me asesoraron con la importación de un vehículo de Alemania y se encargaron de todo. Gracias."
                    />
                    <ReviewCard
                        initial="M"
                        name="Motor Valencia SL"
                        date="hace 3 meses"
                        text="Colaboramos con ellos para la matriculación de nuestra flota y la eficiencia es total. Un partner de confianza para cualquier empresa."
                    />
                    <ReviewCard
                        initial="R"
                        name="Roberto Gil"
                        date="hace 4 meses"
                        text="Rapidez y eficacia. Tuve un problema con un embargo que no sabía cómo resolver y me lo solucionaron rapidísimo. Volveré."
                    />
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
