"use client"

import { useState } from "react"
import "./MainChat.css"
import handleSearch from "../../api/callApi"

const MainChat = () => {
    const [messages, setMessages] = useState([{ sender: "ai", text: "Xin chào! Mình là Emo, cùng tâm sự nhé :3" }])
    const [input, setInput] = useState("")

    const handleSend = async () => {
        if (!input.trim()) return

        const newMessages = [...messages, { sender: "user", text: input }]
        setMessages(newMessages)
        setInput("")
        const response = await handleSearch(input);

        setMessages((prev) => [...prev, { sender: "ai", text: response[0].text }])
    }

    return (
        <div className="chat-container">
            <header className="chat-header">
                <div className="chat-header-content">
                    <img className="chat-emoji" src="ChatWithEmo.png" width={40} height={40} />
                    <h1>Chat cùng Emo</h1>
                </div>
            </header>
            <div className="chat-messages">
                {messages.map((m, i) => (
                    <div key={i} className={`chat-message ${m.sender}`}>
                        {m.sender === "ai" && <img className="message-avatar" src="Understanding.png" width={45} height={45} />}
                        <div className="message-bubble">{m.text}</div>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={input}
                    placeholder="Nhập tin nhắn của bạn..."
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button onClick={handleSend}>
                    <span>Gửi</span>
                    <span className="send-icon">💛</span>
                </button>
            </div>
        </div>
    )
}

export default MainChat
