import React, { useState } from 'react';
import './Chatbot.css';

export default function Chatbot() {
  const [query, setQuery] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!query.trim()) return;

    const newChat = { user: query, bot: '...' };
    setChatHistory([...chatHistory, newChat]);
    setQuery('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/groqQuery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query }),
      });

      const data = await res.json();

      const updatedChat = {
        user: query,
        bot: data?.response || 'No response.',
      };

      setChatHistory(prev => [...prev.slice(0, -1), updatedChat]);
    } catch (err) {
      setChatHistory(prev => [...prev.slice(0, -1), { user: query, bot: 'Server error.' }]);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="chat-container">
      <h2>Groq Chatbot</h2>
      <div className="chat-box">
        {chatHistory.map((chat, idx) => (
          <div key={idx} className="chat-message">
            <div className="user-msg"><strong>You:</strong> {chat.user}</div>
            <div className="bot-msg"><strong>Bot:</strong> {chat.bot}</div>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your question..."
        />
        <button onClick={handleSend} disabled={loading}>Send</button>
      </div>
    </div>
  );
}
