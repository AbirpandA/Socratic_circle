import  { createContext, useState } from "react";

export const ChatbotContext = createContext();

export const ChatbotProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);

    const sendMessage = async (question) => {
        try {
            // Add user message to state
            setMessages((prev) => [...prev, { text: question, sender: "user" }]);

            const response = await fetch("http://localhost:3000/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ question }),
            });

            const data = await response.json();

            if (data.response) {
                // Add bot response to state
                setMessages((prev) => [...prev, { text: data.response, sender: "bot" }]);
            }
        } catch (error) {
            console.error("Chatbot error:", error);
            setMessages((prev) => [...prev, { text: "Error fetching response", sender: "bot" }]);
        }
    };

    return (
        <ChatbotContext.Provider value={{ messages, sendMessage }}>
            {children}
        </ChatbotContext.Provider>
    );
};
