import React from 'react';
import { motion } from 'framer-motion';

const FloatingCard = ({ title, value, delay, x, y }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
            opacity: 1,
            scale: 1,
            y: [y, y - 10, y],
        }}
        transition={{
            duration: 1,
            opacity: { duration: 0.5 },
            y: {
                repeat: Infinity,
                duration: 3 + Math.random(),
                ease: "easeInOut",
                delay: delay
            }
        }}
        className="absolute bg-slate-800/80 backdrop-blur-md border border-slate-700 p-4 rounded-lg shadow-xl w-40 flex flex-col items-center justify-center z-20"
        style={{ left: x, top: y }}
    >
        <div className="text-slate-400 text-xs uppercase tracking-wider mb-1 text-center">{title}</div>
        <div className="text-white text-2xl font-bold">{value}</div>
    </motion.div>
);

const FloatingBubbles = () => {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-slate-900/20 rounded-sm border border-slate-800">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-guerra-black via-slate-900 to-guerra-black opacity-80"></div>

            {/* Central Glow */}
            <div className="absolute w-64 h-64 bg-guerra-red/10 rounded-full blur-[80px]"></div>

            {/* Central Circle */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-64 h-64 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 shadow-[0_0_40px_rgba(0,0,0,0.3)]"
            >
                <div className="absolute inset-0 rounded-full border border-guerra-red/20 animate-pulse"></div>
                <h3 className="text-5xl font-serif font-bold text-white mb-2">200+</h3>
                <p className="text-guerra-red text-sm uppercase tracking-widest font-bold">Clientes</p>
                <p className="text-slate-500 text-xs mt-1">Satisfechos</p>
            </motion.div>

            {/* Orbit Rings */}
            <div className="absolute w-[450px] h-[450px] rounded-full border border-slate-800/50 border-dashed animate-spin-slow"></div>

            {/* Floating Data Cards - Manually positioned relative to center */}
            {/* Top Right */}
            <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-24 right-10 lg:right-20 z-20"
            >
                <div className="bg-slate-800/90 border-l-2 border-guerra-red p-4 rounded-r-lg shadow-lg w-36">
                    <p className="text-xs text-slate-400 uppercase">Trámites</p>
                    <p className="text-xl font-bold text-white">24h</p>
                </div>
            </motion.div>

            {/* Bottom Left */}
            <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-32 left-4 lg:left-12 z-20"
            >
                <div className="bg-slate-800/90 border-l-2 border-guerra-red p-4 rounded-r-lg shadow-lg w-40">
                    <p className="text-xs text-slate-400 uppercase">Ahorro Tiempo</p>
                    <p className="text-xl font-bold text-white">+85%</p>
                </div>
            </motion.div>

            {/* Top Left */}
            <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-40 left-10 lg:left-20 z-10 opacity-60 blur-[1px]"
            >
                <div className="bg-slate-800/50 border border-slate-700 p-3 rounded-lg w-32">
                    <p className="text-xs text-slate-500 uppercase">Online</p>
                    <p className="text-lg font-bold text-slate-300">100%</p>
                </div>
            </motion.div>

        </div>
    );
};

export default FloatingBubbles;
