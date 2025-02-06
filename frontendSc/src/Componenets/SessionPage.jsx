import React, { useState } from 'react';
import { Calendar, Clock, VideoIcon, MessageSquare, BookOpen, CheckCircle, XCircle, AlertCircle, ArrowRight, User } from 'lucide-react';

const SessionPage = () => {
  const [sessions, setSessions] = useState([
    {
      id: 1,
      mentor: {
        name: "Leonardo da Vinci",
        avatar: "/api/placeholder/48/48",
        expertise: "Art & Engineering"
      },
      status: "upcoming",
      date: "2025-02-06",
      time: "14:00",
      duration: "60",
      topic: "Perspective Drawing Techniques",
      notes: "Focus on architectural perspective and vanishing points",
      materials: ["Sketchbook", "Pencils", "Ruler"],
      type: "video"
    },
    {
      id: 2,
      mentor: {
        name: "Aristotle",
        avatar: "/api/placeholder/48/48",
        expertise: "Philosophy"
      },
      status: "completed",
      date: "2025-02-04",
      time: "10:00",
      duration: "90",
      topic: "Logic and Reasoning",
      notes: "Covered syllogisms and basic logic structures",
      materials: ["Notebook", "Required readings"],
      type: "in-person"
    },
    {
      id: 3,
      mentor: {
        name: "Hypatia",
        avatar: "/api/placeholder/48/48",
        expertise: "Mathematics"
      },
      status: "cancelled",
      date: "2025-02-03",
      time: "16:00",
      duration: "45",
      topic: "Advanced Geometry",
      notes: "Session cancelled due to scheduling conflict",
      type: "video"
    }
  ]);

  const getStatusStyles = (status) => {
    switch(status) {
      case 'upcoming':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'completed':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'cancelled':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-stone-50 text-stone-700 border-stone-200';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'upcoming':
        return <AlertCircle size={16} />;
      case 'completed':
        return <CheckCircle size={16} />;
      case 'cancelled':
        return <XCircle size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-stone-50">
      {/* Sidebar (keeping consistent with previous design) */}
      <div className="fixed w-72 h-screen bg-stone-100 border-r border-stone-200 p-8 flex flex-col space-y-8">
        {/* ... Same sidebar content as before ... */}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-serif text-stone-800 mb-4">Your Sessions</h1>
            <p className="text-stone-600 font-serif italic">
              "Time is the wisest counselor of all" - Pericles
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-12">
            {[
              { label: "Upcoming Sessions", value: "2", icon: Calendar },
              { label: "Hours Learned", value: "24", icon: Clock },
              { label: "Completed Sessions", value: "8", icon: CheckCircle },
              { label: "Active Mentors", value: "3", icon: User }
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

          {/* Filter Tabs */}
          <div className="flex space-x-4 mb-8 border-b border-stone-200">
            {["All Sessions", "Upcoming", "Completed", "Cancelled"].map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 font-serif text-stone-600 border-b-2 ${
                  index === 0 ? 'border-stone-800 text-stone-800' : 'border-transparent'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Sessions List */}
          <div className="space-y-6">
            {sessions.map(session => (
              <div key={session.id} className="bg-white p-6 rounded-lg border border-stone-200 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <img src={session.mentor.avatar} alt={session.mentor.name} className="w-12 h-12 rounded-full" />
                    <div>
                      <h3 className="font-serif text-lg text-stone-800">{session.mentor.name}</h3>
                      <p className="text-stone-600">{session.mentor.expertise}</p>
                    </div>
                  </div>
                  
                  <div className={`px-3 py-1 rounded-full border flex items-center space-x-2 text-sm ${getStatusStyles(session.status)}`}>
                    {getStatusIcon(session.status)}
                    <span className="capitalize">{session.status}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="flex items-center space-x-3">
                    <Calendar size={18} className="text-stone-600" />
                    <div>
                      <p className="text-sm text-stone-500">Date</p>
                      <p className="font-serif">{new Date(session.date).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock size={18} className="text-stone-600" />
                    <div>
                      <p className="text-sm text-stone-500">Time</p>
                      <p className="font-serif">{session.time} ({session.duration} min)</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <VideoIcon size={18} className="text-stone-600" />
                    <div>
                      <p className="text-sm text-stone-500">Type</p>
                      <p className="font-serif capitalize">{session.type}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-serif text-stone-800 mb-2">Topic</h4>
                    <p className="text-stone-600">{session.topic}</p>
                  </div>

                  {session.notes && (
                    <div>
                      <h4 className="font-serif text-stone-800 mb-2">Notes</h4>
                      <p className="text-stone-600">{session.notes}</p>
                    </div>
                  )}

                  {session.materials && (
                    <div>
                      <h4 className="font-serif text-stone-800 mb-2">Required Materials</h4>
                      <div className="flex flex-wrap gap-2">
                        {session.materials.map((material, index) => (
                          <span key={index} className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-sm">
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {session.status === 'upcoming' && (
                  <div className="flex justify-end space-x-4 mt-6 pt-6 border-t border-stone-100">
                    <button className="px-4 py-2 border border-stone-200 rounded-lg text-stone-600 hover:bg-stone-100 transition-colors font-serif">
                      Reschedule
                    </button>
                    <button className="px-4 py-2 bg-stone-800 text-stone-50 rounded-lg hover:bg-stone-900 transition-colors font-serif">
                      Join Session
                    </button>
                  </div>
                )}

                {session.status === 'completed' && (
                  <div className="flex justify-end mt-6 pt-6 border-t border-stone-100">
                    <button className="px-4 py-2 border border-stone-200 rounded-lg text-stone-600 hover:bg-stone-100 transition-colors font-serif">
                      View Notes & Resources
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionPage;