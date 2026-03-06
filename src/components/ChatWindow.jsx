// src/components/ChatWindow.jsx
import React, { useState } from "react";

export default function ChatWindow({ user }) {
  const [messages, setMessages] = useState([
    { id: 1, sender: "me", text: "Hello!" },
    { id: 2, sender: "user", text: "Hi, how are you?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: "me", text: input }]);
    setInput("");
  };

  if (!user) {
    return <div className="flex-1 flex items-center justify-center text-gray-400">Select a contact</div>;
  }

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <div className="p-4 font-bold border-b border-gray-200">{user.name}</div>

      <div className="flex-1 p-4 overflow-y-auto space-y-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-xs p-2 rounded ${
              msg.sender === "me" ? "bg-blue-500 text-white self-end" : "bg-white text-gray-900 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200 flex gap-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}