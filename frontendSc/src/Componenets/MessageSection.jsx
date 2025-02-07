import React, { useState } from 'react';
import { Send, BookOpen, Clock, Archive, MessageCircle, Search } from 'lucide-react';

const initialPeers = [
  {
    id: 1,
    name: 'Sophia Lancaster',
    expertise: 'Modern Literature',
    online: true,
    avatar: '/api/placeholder/40/40',
    messages: [
      {
        id: 1,
        sender: 'peer',
        content: 'What are your thoughts on the role of technology in modern literature?',
        timestamp: '2 hours ago'
      }
    ]
  },
  {
    id: 2,
    name: 'Marcus Aurelius Chen',
    expertise: 'Philosophy of Technology',
    online: false,
    avatar: '/api/placeholder/40/40',
    messages: []
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    expertise: 'Digital Storytelling',
    online: true,
    avatar: '/api/placeholder/40/40',
    messages: []
  }
];

export default function ScholarlyChatComponent() {
  const [peers, setPeers] = useState(initialPeers);
  const [selectedPeer, setSelectedPeer] = useState(null);
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPeers = peers.filter(peer => 
    peer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    peer.expertise.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim() || !selectedPeer) return;

    const newMessage = {
      id: Date.now(),
      sender: 'self',
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setPeers(prevPeers => 
      prevPeers.map(peer => 
        peer.id === selectedPeer.id 
          ? {...peer, messages: [...peer.messages, newMessage]} 
          : peer
      )
    );

    setSelectedPeer(prev => (prev ? {
      ...prev,
      messages: [...prev.messages, newMessage]
    } : prev));

    setMessage('');
  };

  return (
    <div className="flex h-screen w-full bg-stone-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-stone-200 p-4 flex flex-col">
        <div className="mb-4">
          <h2 className="font-serif text-lg text-stone-800 flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-stone-600" />
            Scholars' Circle
          </h2>
        </div>

        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Find a scholar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-8 border border-stone-200 rounded-lg 
                       font-serif text-stone-800 placeholder-stone-400
                       focus:ring-2 focus:ring-stone-200 focus:border-stone-300 focus:outline-none"
          />
          <Search className="absolute left-2 top-3 w-4 h-4 text-stone-400" />
        </div>

        <div className="space-y-3 flex-1 overflow-y-auto">
          {filteredPeers.map((peer) => (
            <button
              key={peer.id}
              onClick={() => setSelectedPeer(peer)}
              className={`w-full flex items-center space-x-3 p-2 rounded-lg text-left 
                ${selectedPeer?.id === peer.id 
                  ? 'bg-stone-100' 
                  : 'hover:bg-stone-50'}`}
            >
              <div className="relative">
                <img 
                  src={peer.avatar} 
                  alt={peer.name} 
                  className="w-10 h-10 rounded-full"
                />
                {peer.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                )}
              </div>
              <div className="flex-1 overflow-hidden">
                <h3 className="font-serif text-stone-800 truncate">{peer.name}</h3>
                <p className="text-xs text-stone-500 truncate">{peer.expertise}</p>
              </div>
              {peer.online && (
                <MessageCircle className="w-4 h-4 text-stone-400" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedPeer ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-stone-200 flex items-center justify-between bg-white">
              <div className="flex items-center space-x-3">
                <div>
                  <h2 className="font-serif text-lg text-stone-800">{selectedPeer.name}</h2>
                  <p className="text-stone-500 text-sm">{selectedPeer.expertise}</p>
                </div>
              </div>
              <button className="text-stone-600 hover:text-stone-800">
                <Archive className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {selectedPeer.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'self' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] ${
                      msg.sender === 'self'
                        ? 'bg-stone-800 text-white'
                        : 'bg-white text-stone-800'
                    } rounded-lg p-3 shadow-sm`}
                  >
                    <p className="font-serif leading-relaxed">{msg.content}</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <Clock className="w-3 h-3 text-stone-400" />
                      <span className={`text-xs ${
                        msg.sender === 'self' ? 'text-stone-300' : 'text-stone-400'
                      }`}>
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-stone-200 bg-white">
              <form onSubmit={handleSubmit} className="flex space-x-3">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your thoughts with eloquence..."
                  className="flex-1 min-h-[60px] p-3 bg-stone-50 border border-stone-200 rounded-lg 
                             font-serif text-stone-800 placeholder-stone-400 resize-none
                             focus:ring-2 focus:ring-stone-200 focus:border-stone-300 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-stone-800 text-white rounded-lg font-serif
                             hover:bg-stone-700 transition-colors flex items-center gap-2
                             disabled:opacity-50 disabled:cursor-not-allowed self-end"
                  disabled={!message.trim()}
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-stone-500 font-serif">
            Select a scholar to begin your conversation
          </div>
        )}
      </div>
    </div>
  );
}