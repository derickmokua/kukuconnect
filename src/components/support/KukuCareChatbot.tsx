'use client';

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function KukuCareChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! I'm KukuCare. How can I help you with your poultry farming today?", sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState('');

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const newMessage = { id: Date.now(), text: inputText, sender: 'user' };
        setMessages([...messages, newMessage]);
        setInputText('');

        // Simulate bot response
        setTimeout(() => {
            const botResponse = {
                id: Date.now() + 1,
                text: "Thanks for your message! Our experts will get back to you shortly. In the meantime, check out our support library.",
                sender: 'bot'
            };
            setMessages(prev => [...prev, botResponse]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 mb-4 border border-gray-200 overflow-hidden flex flex-col h-96 transition-all duration-300 ease-in-out">
                    <div className="bg-kuku-green p-4 flex justify-between items-center text-white">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-kuku-green font-bold">
                                K
                            </div>
                            <span className="font-bold">KukuCare Support</span>
                        </div>
                        <button onClick={toggleChat} className="text-white hover:text-gray-200">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.sender === 'user'
                                        ? 'bg-kuku-yellow text-kuku-black rounded-br-none'
                                        : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200 flex gap-2">
                        <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-kuku-green"
                        />
                        <button
                            type="submit"
                            className="bg-kuku-green text-white p-2 rounded-full hover:bg-green-700 transition-colors"
                        >
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={toggleChat}
                className={`${isOpen ? 'hidden' : 'flex'} items-center justify-center w-14 h-14 bg-kuku-green text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-110`}
            >
                <MessageCircle size={28} />
            </button>
        </div>
    );
}
