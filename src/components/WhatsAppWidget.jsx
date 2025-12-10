import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppWidget = () => {
    // Using the number found in the footer: 679 998 249
    // Format for wa.me: Country code + number (assuming ES +34)
    const phoneNumber = "34679998249";
    const message = "Hola, me gustaría recibir información sobre vuestros servicios.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 drop-shadow-2xl hover:drop-shadow-[0_0_15px_rgba(37,211,102,0.5)] transition-all duration-300 cursor-pointer"
        >
            <img src="/whatsapp.svg" alt="Contactar por WhatsApp" className="w-16 h-16" />
        </motion.a>
    );
};

export default WhatsAppWidget;
