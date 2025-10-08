import React, { useState } from "react";
import "./MainChat.css";
import handleSearch from "../../api/callApi";

const MainChat = () => {
    const [messages, setMessages] = useState([
        { sender: "ai", text: "Xin chào! Mình là AI, bạn muốn trò chuyện gì nào?" },
    ]);
    const [input, setInput] = useState("");

    const handleSend = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { sender: "user", text: input }];
        setMessages(newMessages);
        setInput("");

        const response = await handleSearch(newMessages);
        console.log(response);

        // fake AI trả lời
        // setTimeout(() => {
        //     setMessages((prev) => [
        //         ...prev,
        //         { sender: "ai", text: "Mình vừa nhận: " + input },
        //     ]);
        // }, 1000);
    };

    return (
        <div className="chat-container">
            <header className="chat-header">AI Chat</header>
            <div className="chat-messages">
                {messages.map((m, i) => (
                    <div key={i} className={`chat-message ${m.sender}`}>
                        {m.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={input}
                    placeholder="Nhập tin nhắn..."
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button onClick={handleSend}>Gửi</button>
            </div>
        </div>
    );
};

export default MainChat;
