import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hola. Soy el asistente virtual de Gestoría Guerra. ¿En qué puedo ayudarte hoy?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const WEBHOOK_URL = "https://primary-xdh7-production.up.railway.app/webhook/2f9a874e-ab7c-44c0-9206-052d174c632f";

    // Initialize Session ID
    const getSessionId = () => {
        let sessionId = localStorage.getItem('chatSessionId');
        if (!sessionId) {
            sessionId = 'session_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('chatSessionId', sessionId);
        }
        return sessionId;
    };

    // Use ref to keep sessionId stable
    const sessionIdRef = useRef(getSessionId());

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMsg = inputValue;
        setMessages(prev => [...prev, { type: 'user', text: userMsg }]);
        setInputValue('');
        setIsLoading(true);

        try {

            const payload = {
                chatInput: userMsg,
                sessionId: sessionIdRef.current
            };

            console.log('DEBUG: Sending to n8n:', payload);

            // Sending POST request to n8n webhook with SESSION ID
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();

            // Assuming the n8n workflow returns an object with a 'output' or 'text' property
            // Adjust based on actual n8n workflow response structure
            const botResponse = data.output || data.text || JSON.stringify(data);

            setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);

        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, { type: 'bot', text: 'Lo siento, he tenido un problema de conexión. Por favor, inténtalo de nuevo más tarde.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') sendMessage();
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`fixed bottom-6 right-24 z-50 p-4 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all duration-300 flex items-center justify-center cursor-pointer ${isOpen ? 'bg-slate-800 text-slate-400' : 'bg-guerra-red text-white'
                    }`}
            >
                {isOpen ? <X size={32} /> : <Bot size={32} />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-28 right-6 w-96 h-[500px] z-50 bg-slate-900 border border-slate-800 rounded-lg shadow-2xl overflow-hidden flex flex-col font-sans"
                    >
                        {/* Header */}
                        <div className="bg-guerra-black p-4 border-b border-guerra-red/30 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-guerra-red/20 flex items-center justify-center text-guerra-red border border-guerra-red/50">
                                <Bot size={20} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm">Asistente Virtual</h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    <span className="text-xs text-slate-400">En línea</span>
                                </div>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/50 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${msg.type === 'user'
                                            ? 'bg-guerra-red text-white rounded-br-none'
                                            : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-slate-800 p-3 rounded-lg rounded-bl-none border border-slate-700 flex gap-1">
                                        <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                        <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                        <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-guerra-black border-t border-slate-800">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Escribe tu consulta..."
                                    className="flex-1 bg-slate-900 text-white border border-slate-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-guerra-red focus:ring-1 focus:ring-guerra-red transition-all"
                                />
                                <button
                                    onClick={sendMessage}
                                    disabled={isLoading}
                                    className="bg-guerra-red hover:bg-red-700 text-white p-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatWidget;
