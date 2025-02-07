
import { Calendar, Users, BookOpen, MessageSquare, Clock, HelpCircle, Bookmark } from 'lucide-react';

const ProfilePage = () => {
  const teachingSkills = ["Poetry", "Creative Writing", "Shakespeare", "Greek Mythology"];
  const learningSkills = ["Modern Literature", "Script Writing", "Literary Analysis"];
  
  const stats = {
    posts: 24,
    questions: 13,
    sessions: 8,
    upcomingSessions: 3
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="relative text-center space-y-6">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 rounded-full blur-xl opacity-70"></div>
            <img 
              src="/api/placeholder/120/120" 
              alt="Profile" 
              className="relative rounded-full ring-2 ring-white shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 bg-green-100 p-2 rounded-full shadow-sm">
              <BookOpen className="w-4 h-4 text-green-700" />
            </div>
          </div>
          
          <div className="relative">
            <h1 className="text-4xl font-serif text-gray-800">Alexander Wordsworth</h1>
            <p className="text-gray-600 italic mt-2 font-serif">"In nature's infinite book of secrecy, a little I can read."</p>
          </div>

          {/* Stats Display */}
          <div className="flex justify-center gap-12">
            {[
              { label: 'Posts', count: stats.posts },
              { label: 'Questions', count: stats.questions },
              { label: 'Sessions', count: stats.sessions }
            ].map(({ label, count }) => (
              <div key={label} className="text-center">
                <span className="block text-3xl font-semibold text-gray-800">{count}</span>
                <span className="text-sm text-gray-600">{label}</span>
              </div>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-stone-200 hover:bg-stone-50 transition-colors">
              <Calendar className="w-4 h-4" />
              Schedule Session
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-stone-800 text-white rounded-lg shadow-sm hover:bg-stone-700 transition-colors">
              <Users className="w-4 h-4" />
              Connect
            </button>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-6">
            <h2 className="text-xl font-serif text-center">Chapters of Knowledge</h2>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-gray-800 mb-3 text-center">Can Teach</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {teachingSkills.map(skill => (
                  <span 
                    key={skill}
                    className="px-4 py-1.5 bg-gray-100 text-gray-900 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-800 mb-3 text-center">Wishes to Learn</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {learningSkills.map(skill => (
                  <span 
                    key={skill}
                    className="px-4 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-slate-200 cursor-pointer transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Posts Section */}
          <div className="md:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-serif flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-gray-600" />
                Recent Posts
              </h2>
              <span className="text-sm text-gray-600">{stats.posts} total</span>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-2 border-stone-200 pl-4">
                <h3 className="font-medium">Thoughts on Modern Poetry</h3>
                <p className="text-sm text-gray-600 mt-1">A discussion on the evolution of poetic forms in contemporary literature...</p>
              </div>
              <div className="border-l-2 border-stone-200 pl-4">
                <h3 className="font-medium">Reading Group: Dante's Inferno</h3>
                <p className="text-sm text-gray-600 mt-1">Join us for a weekly discussion on this masterpiece...</p>
              </div>
            </div>
          </div>

          {/* Questions Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-serif flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-gray-600" />
                Recent Questions
              </h2>
              <span className="text-sm text-gray-600">{stats.questions} total</span>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-2 border-stone-200 pl-4">
                <h3 className="font-medium">Victorian Literature</h3>
                <p className="text-sm text-gray-600 mt-1">Seeking recommendations for Victorian era novels...</p>
              </div>
              <div className="border-l-2 border-stone-200 pl-4">
                <h3 className="font-medium">Poetry Analysis</h3>
                <p className="text-sm text-gray-600 mt-1">Help with interpreting metaphors in modern poetry...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sessions Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-serif flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-600" />
              Upcoming Sessions
            </h2>
            <div className="space-x-3">
              <span className="text-sm text-gray-600">{stats.upcomingSessions} upcoming</span>
              <span className="text-sm text-gray-600">·</span>
              <span className="text-sm text-gray-600">{stats.sessions} total</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Poetry Writing Workshop",
                time: "Thursday, 3:00 PM",
                spots: 2,
                duration: 60
              },
              {
                title: "Shakespeare Reading Circle",
                time: "Saturday, 2:00 PM",
                spots: 4,
                duration: 90
              },
              {
                title: "Creative Writing Basics",
                time: "Monday, 4:00 PM",
                spots: 1,
                duration: 45
              }
            ].map((session, idx) => (
              <div key={idx} className="border-l-2 border-stone-200 pl-4">
                <h3 className="font-medium">{session.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{session.time}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-gray-500">{session.spots} spots</span>
                  <span className="text-xs text-gray-500">·</span>
                  <span className="text-xs text-gray-500">{session.duration} min</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;