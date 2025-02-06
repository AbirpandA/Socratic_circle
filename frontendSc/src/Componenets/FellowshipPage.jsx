import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { ScrollText, Search, Users, User, PenTool, Menu, Mail, BookOpen, Clock, Award } from 'lucide-react';

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

  return (
    <div className="flex min-h-screen bg-stone-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-serif text-stone-800 mb-4">Fellowship</h1>
            <p className="text-stone-600 font-serif italic">
              "The fellowship of minds is the true measure of learning" - Seneca
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-12">
            {[
              { label: "Total Fellows", value: "24", icon: Users },
              { label: "Active Mentors", value: "8", icon: Award },
              { label: "Learning Hours", value: "156", icon: Clock },
              { label: "Shared Studies", value: "12", icon: BookOpen }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-stone-200">
                <div className="flex items-center space-x-3 mb-2">
                  <stat.icon size={20} className="text-stone-600" />
                  <span className="text-2xl font-serif text-stone-800">{stat.value}</span>
                </div>
                <p className="text-stone-600 font-serif">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Search and Filter */}
          <div className="flex items-center justify-between mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search fellows..."
                className="pl-10 pr-4 py-2 border border-stone-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-stone-500"
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

          {/* Connections Grid */}
          <div className="grid grid-cols-2 gap-6">
            {connections.map(connection => (
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
                        <button className="p-2 text-stone-600 hover:text-stone-800 rounded-full hover:bg-stone-100">
                          <Mail size={18} />
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

          {/* Suggestions Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-serif text-stone-800 mb-6">Recommended Fellows</h2>
            <div className="bg-stone-100 p-6 rounded-lg">
              <p className="text-stone-600 font-serif text-center">
                "Expand your circle of wisdom. We'll suggest new fellows based on your interests and current connections."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FellowshipPage;