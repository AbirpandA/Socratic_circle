import { useContext, useState, useEffect, useRef } from "react";
import { ChatbotContext } from "./ChatbotProvider";

const ChatbotComponent = () => {
    const { messages, sendMessage } = useContext(ChatbotContext);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);  // Chatbot toggle state
    const chatContainerRef = useRef(null);

    // Auto-scroll when messages update
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = () => {
        if (input.trim() !== "") {
            sendMessage(input);
            setInput("");  // Clear input field after sending
        }
    };

    return (
        <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
            {/* Toggle Chatbot Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                style={{
                    background: "#4a5568", // Slate color
                    color: "#fff",
                    width: "50px",
                    height: "50px",
                    border: "none",
                    borderRadius: "50%",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px", // Adjust font size for the "S"
                }}>
                {isOpen ? "✖" : "S"} {/* "S" for the chatbot, "✖" to close */}
            </button>

            {/* Chatbot UI */}
            {isOpen && (
                <div style={{ 
                    width: "300px", 
                    height: "400px", 
                    display: "flex", 
                    flexDirection: "column",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    background: "#fff",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                    position: "absolute", 
                    bottom: "50px", // Adjust based on button size
                    right: "0"
                }}>
                    <h3 style={{ textAlign: "center", margin: "10px 0" }}>Chatbot</h3>
                    
                    {/* Messages Container */}
                    <div ref={chatContainerRef} style={{ 
                        flex: 1,  
                        padding: "10px",
                        overflowY: "auto",  
                        borderBottom: "1px solid #ddd",
                        background: "#f9f9f9"
                    }}>
                        {messages.map((msg, index) => (
                            <div key={index} style={{ 
                                textAlign: msg.sender === "bot" ? "left" : "right", 
                                marginBottom: "5px" 
                            }}>
                                <p style={{ 
                                    display: "inline-block",
                                    background: msg.sender === "bot" ? "#e0e0e0" : "#cce5ff", 
                                    padding: "8px", 
                                    borderRadius: "8px",
                                    maxWidth: "80%"
                                }}>
                                    {msg.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Input Box & Send Button */}
                    <div style={{ 
                        display: "flex", 
                        padding: "8px", 
                        borderTop: "1px solid #ddd",
                        background: "#fff"
                    }}>
                        <input 
                            type="text" 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)} 
                            placeholder="Ask me anything..." 
                            style={{ 
                                flex: 1,  
                                padding: "8px", 
                                border: "1px solid #ccc", 
                                borderRadius: "5px",
                                outline: "none"
                            }} 
                        />
                        <button 
                            onClick={handleSend} 
                            style={{ 
                                marginLeft: "8px", 
                                padding: "8px 12px", 
                                background: "#007bff", 
                                color: "#fff", 
                                border: "none", 
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}>
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatbotComponent;
