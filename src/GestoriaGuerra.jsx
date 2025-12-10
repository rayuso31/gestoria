import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

// Components
import HeroSection from './components/HeroSection';
import HumanSection from './components/HumanSection';
import ServicesGrid from './components/ServicesGrid';
import TestimonialsSection from './components/TestimonialsSection';
import WhatsAppWidget from './components/WhatsAppWidget';
import ChatWidget from './components/ChatWidget';

const GestoriaGuerra = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-guerra-black font-sans text-slate-200 selection:bg-guerra-red selection:text-white relative">
            {/* Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-guerra-black/90 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'}`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Branding */}
                        <div className="flex-shrink-0 flex items-center cursor-pointer">
                            <span className="font-serif text-2xl font-bold text-white tracking-tight">
                                Gestoría <span className="text-guerra-red">Guerra</span>
                            </span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {['INICIO', 'SERVICIOS', 'NOSOTROS', 'CONTACTO'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors duration-300 font-medium text-sm tracking-widest relative group">
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-guerra-red transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                            <button className="border border-guerra-red text-guerra-red hover:bg-guerra-red hover:text-white px-6 py-2 rounded-sm transition-all duration-300 font-medium text-sm tracking-widest uppercase">
                                Área Clientes
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-white hover:text-guerra-red transition-colors p-2"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-guerra-black border-t border-slate-800 absolute w-full shadow-2xl overflow-hidden"
                        >
                            <div className="px-4 pt-2 pb-6 space-y-1">
                                {['INICIO', 'SERVICIOS', 'NOSOTROS', 'CONTACTO'].map((item) => (
                                    <a key={item} href={`#${item.toLowerCase()}`} className="block px-3 py-4 text-slate-300 hover:text-white hover:bg-slate-900 border-b border-slate-800 font-medium tracking-wide">
                                        {item}
                                    </a>
                                ))}
                                <div className="pt-4 px-3">
                                    <button className="w-full bg-guerra-red text-white px-6 py-4 rounded-sm font-bold tracking-widest uppercase">
                                        Área Clientes
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* SECTIONS */}
            <HeroSection />
            <HumanSection />
            <ServicesGrid />
            <TestimonialsSection />

            {/* Widgets */}
            <WhatsAppWidget />
            <ChatWidget />

            {/* Contact / Footer */}
            <footer id="contacto" className="bg-black text-slate-400 py-16 border-t border-slate-900 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-guerra-red to-transparent opacity-50"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div>
                            <div className="font-serif text-2xl font-bold text-white mb-6">
                                Gestoría <span className="text-guerra-red">Guerra</span>
                            </div>
                            <p className="mb-6 text-sm leading-relaxed text-slate-500">
                                Especialistas en trámites de tráfico y transporte. <br />
                                Velocidad, precisión y confianza.
                            </p>
                            <div className="flex gap-4">
                                {/* Social placeholders */}
                                <div className="w-8 h-8 bg-slate-900 hover:bg-guerra-red transition-colors rounded-full flex items-center justify-center cursor-pointer text-white">IG</div>
                                <div className="w-8 h-8 bg-slate-900 hover:bg-guerra-red transition-colors rounded-full flex items-center justify-center cursor-pointer text-white">LI</div>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs border-l-2 border-guerra-red pl-3">Contacto Directo</h4>
                            <ul className="space-y-4 text-sm">
                                <li className="flex items-center gap-3 hover:text-white transition-colors">
                                    <Phone className="text-guerra-red flex-shrink-0" size={18} />
                                    <span>679 998 249</span>
                                </li>
                                <li className="flex items-center gap-3 hover:text-white transition-colors">
                                    <Mail className="text-guerra-red flex-shrink-0" size={18} />
                                    <span>gestoriaguerra@gestores.net</span>
                                </li>
                                <li className="flex items-start gap-3 hover:text-white transition-colors">
                                    <MapPin className="text-guerra-red flex-shrink-0 mt-1" size={18} />
                                    <span>Urbanización Montesano<br />San Antonio Benagéber (Valencia)</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs border-l-2 border-guerra-red pl-3">Horario</h4>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li className="flex justify-between border-b border-slate-900 pb-2">
                                    <span>Lunes - Viernes</span>
                                    <span className="text-slate-300">9:00 - 19:00</span>
                                    <span className="text-slate-300">9:00 - 14:00</span>
                                </li>
                                <li className="flex justify-between pt-2">
                                    <span>Fines de Semana</span>
                                    <span className="text-guerra-red">Cerrado</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
                        <p>&copy; {new Date().getFullYear()} Gestoría Guerra. Night Drive Edition.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
                            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default GestoriaGuerra;
