import React, { useState } from 'react';
import { Search, Mail, Clock } from 'lucide-react';

// Message Modal Component
const MessageModal = ({ isOpen, onClose, recipient }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-w-[90vw]">
        <h2 className="text-xl font-serif mb-4">Send a message to {recipient?.name}</h2>
        <textarea
          className="w-full p-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 transition-shadow"
          placeholder="Type your message..."
          rows={4}
        ></textarea>
        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-100 text-stone-700 rounded-lg hover:bg-stone-200 transition-colors"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-900 transition-colors">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

// Schedule Modal Component
const ScheduleModal = ({ isOpen, onClose, recipient }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-w-[90vw]">
        <h2 className="text-xl font-serif mb-4">Schedule a meeting with {recipient?.name}</h2>
        <input
          type="datetime-local"
          className="w-full p-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 transition-shadow"
        />
        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-100 text-stone-700 rounded-lg hover:bg-stone-200 transition-colors"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-900 transition-colors">
            Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

const FellowshipPage = () => {
  const [connections, setConnections] = useState([
    {
      id: 1,
      name: "Marcus Aurelius",
      avatar: "/api/placeholder/64/64",
      title: "Philosophy Mentor",
      expertise: ["Stoicism", "Ethics", "Leadership"],
      status: "online",
      lastActive: "Now",
      mutualConnections: 12
    },
    {
      id: 2,
      name: "Leonardo da Vinci",
      avatar: "/api/placeholder/64/64",
      title: "Master Artist & Engineer",
      expertise: ["Painting", "Sculpture", "Engineering"],
      status: "offline",
      lastActive: "3 hours ago",
      mutualConnections: 8
    },
    {
      id: 3,
      name: "Hypatia",
      avatar: "/api/placeholder/64/64",
      title: "Mathematics Scholar",
      expertise: ["Mathematics", "Astronomy", "Philosophy"],
      status: "online",
      lastActive: "Now",
      mutualConnections: 5
    }
  ]);

  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [selectedRecipient, setSelectedRecipient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const openMessageModal = (connection) => {
    setSelectedRecipient(connection);
    setIsMessageModalOpen(true);
  };

  const closeMessageModal = () => {
    setIsMessageModalOpen(false);
    setSelectedRecipient(null);
  };

  const openScheduleModal = (connection) => {
    setSelectedRecipient(connection);
    setIsScheduleModalOpen(true);
  };

  const closeScheduleModal = () => {
    setIsScheduleModalOpen(false);
    setSelectedRecipient(null);
  };

  return (
    <div className="flex min-h-screen bg-stone-50">
      <div className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-serif text-stone-800 mb-4">Fellowship</h1>
            <p className="text-stone-600 font-serif italic">
              "The fellowship of minds is the true measure of learning" - Seneca
            </p>
          </div>

          {/* Sticky Search and Filter */}
          <div className="sticky top-0 bg-stone-50 py-4 z-10 border-b border-stone-200 mb-8">
            <div className="flex items-center justify-between">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search fellows..."
                  className="pl-10 pr-4 py-2 border border-stone-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-stone-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search size={18} className="absolute left-3 top-3 text-stone-400" />
              </div>
              <div className="flex space-x-4">
                {["All", "Mentors", "Peers", "Recent"].map(filter => (
                  <button key={filter} className="px-4 py-2 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-800 hover:text-stone-50 hover:border-stone-800 transition-all font-serif">
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Connections Grid */}
          <div className="grid grid-cols-2 gap-6">
            {connections.filter(connection => connection.name.toLowerCase().includes(searchTerm.toLowerCase())).map(connection => (
              <div key={connection.id} className="bg-white p-6 rounded-lg border border-stone-200 hover:shadow-md transition-all">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <img src={connection.avatar} alt={connection.name} className="w-16 h-16 rounded-full" />
                    <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${connection.status === 'online' ? 'bg-green-500' : 'bg-stone-400'}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-serif text-lg text-stone-800">{connection.name}</h3>
                        <p className="text-stone-600 text-sm mb-2">{connection.title}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button onClick={() => openMessageModal(connection)} className="p-2 text-stone-600 hover:text-stone-800 rounded-full hover:bg-stone-100">
                          <Mail size={18} />
                        </button>
                        <button onClick={() => openScheduleModal(connection)} className="p-2 text-stone-600 hover:text-stone-800 rounded-full hover:bg-stone-100">
                          <Clock size={18} />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {connection.expertise.map(skill => (
                        <span key={skill} className="px-2 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-serif">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-stone-500">
                      <span>{connection.mutualConnections} mutual connections</span>
                      <span>Active {connection.lastActive}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <MessageModal isOpen={isMessageModalOpen} onClose={closeMessageModal} recipient={selectedRecipient} />
      <ScheduleModal isOpen={isScheduleModalOpen} onClose={closeScheduleModal} recipient={selectedRecipient} />
    </div>
  );
};

export default FellowshipPage;
