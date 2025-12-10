import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const FloatingBubbles = () => {
    // Generate random bubbles with stable values using useMemo
    const bubbles = useMemo(() => {
        return [...Array(15)].map((_, i) => ({
            id: i,
            size: Math.random() * 40 + 10, // 10px to 50px
            left: `${Math.random() * 100}%`,
            duration: Math.random() * 10 + 15, // 15s to 25s
            delay: Math.random() * 5,
        }));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {bubbles.map((bubble) => (
                <motion.div
                    key={bubble.id}
                    className="absolute rounded-full bg-gold-500/10 border border-gold-500/20 backdrop-blur-sm"
                    style={{
                        width: bubble.size,
                        height: bubble.size,
                        left: bubble.left, // Retained original `bubble.left` as `bubble.x` is not defined
                        bottom: -50,
                        backgroundColor: Math.random() > 0.5 ? '#D62828' : '#333', // Red or Dark Grey
                        boxShadow: Math.random() > 0.5 ? '0 0 15px rgba(214, 40, 40, 0.4)' : 'none',
                    }}
                    animate={{
                        y: -1000,
                        x: [0, Math.random() * 50 - 25, 0],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: bubble.duration,
                        repeat: Infinity,
                        delay: bubble.delay,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};
