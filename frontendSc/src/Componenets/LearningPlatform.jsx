import React, { useState } from 'react';
import { ScrollText, Search, Users, User, PenTool, Menu, Heart, MessageCircle, Share2 } from 'lucide-react';

const LearningPlatform = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Marcus Aurelius",
      avatar: "/api/placeholder/40/40",
      title: "On the Art of Sculpting",
      content: "What is the proper technique for capturing human form in marble? I've studied the ancient masters, but I seek contemporary guidance on tool selection and initial blocking techniques.",
      likes: 42,
      responses: 7,
      category: "Sculpture",
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      author: "Leonardo",
      avatar: "/api/placeholder/40/40",
      title: "Understanding Light and Shadow",
      content: "Seeking guidance on chiaroscuro techniques in oil painting. Particularly interested in how to achieve the subtle gradations seen in Venetian works.",
      likes: 89,
      responses: 12,
      category: "Painting",
      timeAgo: "4 hours ago"
    }
  ]);

  return (
    <div className="flex min-h-screen bg-stone-50">
      {/* Sidebar */}
      <div className="fixed w-72 h-screen bg-stone-100 border-r border-stone-200 p-8 flex flex-col space-y-8">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center">
            <span className="text-stone-50 font-serif text-lg">C</span>
          </div>
          <h1 className="text-2xl font-serif text-stone-800 tracking-wide">Socratic</h1>
        </div>
        
        <nav className="space-y-6">
          <a className="flex items-center space-x-4 text-stone-600 hover:text-stone-900 p-3 rounded-lg hover:bg-stone-200 transition-all">
            <ScrollText size={20} />
            <span className="font-serif text-lg">Forum</span>
          </a>
          
          <a className="flex items-center space-x-4 text-stone-600 hover:text-stone-900 p-3 rounded-lg hover:bg-stone-200 transition-all">
            <Search size={20} />
            <span className="font-serif text-lg">Find Mentors</span>
          </a>
          
          <a className="flex items-center space-x-4 text-stone-600 hover:text-stone-900 p-3 rounded-lg hover:bg-stone-200 transition-all">
            <Users size={20} />
            <span className="font-serif text-lg">Fellowship</span>
          </a>
          
          <a className="flex items-center space-x-4 text-stone-600 hover:text-stone-900 p-3 rounded-lg hover:bg-stone-200 transition-all">
            <User size={20} />
            <span className="font-serif text-lg">Profile</span>
          </a>
        </nav>

        <button className="w-full bg-stone-800 text-stone-50 py-4 px-6 rounded-lg font-serif hover:bg-stone-900 transition-all flex items-center justify-center space-x-2">
          <PenTool size={20} />
          <span>Share Knowledge</span>
        </button>

        <div className="mt-auto p-4 bg-stone-200 rounded-lg">
          <p className="font-serif text-stone-600 italic text-sm">
            "The mind that is anxious about future events is miserable." 
            <br />- Seneca
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-72 flex-1 p-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-serif text-stone-800 mb-4">Forum of Knowledge</h1>
            <p className="text-stone-600 font-serif italic text-lg">"The beginning of wisdom is the definition of terms" - Socrates</p>
          </div>

          {/* Categories */}
          <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
            {["All", "Philosophy", "Art", "Literature", "Science", "Music"].map(category => (
              <button key={category} className="px-4 py-2 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-800 hover:text-stone-50 hover:border-stone-800 transition-all font-serif">
                {category}
              </button>
            ))}
          </div>

          {/* Posts */}
          <div className="space-y-8">
            {posts.map(post => (
              <div key={post.id} className="bg-white p-8 rounded-lg border border-stone-200 hover:border-stone-300 transition-all shadow-sm hover:shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full" />
                    <div>
                      <h3 className="font-serif text-stone-800">{post.author}</h3>
                      <span className="text-sm text-stone-500">{post.timeAgo}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-sm font-serif">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-2xl font-serif text-stone-800 mb-3">{post.title}</h2>
                <p className="text-stone-600 leading-relaxed mb-6">{post.content}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-stone-100">
                  <div className="flex space-x-6">
                    <button className="flex items-center space-x-2 text-stone-600 hover:text-stone-800">
                      <Heart size={18} />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-stone-600 hover:text-stone-800">
                      <MessageCircle size={18} />
                      <span className="text-sm">{post.responses}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-stone-600 hover:text-stone-800">
                      <Share2 size={18} />
                    </button>
                  </div>
                  <button className="text-stone-600 hover:text-stone-800 font-serif hover:underline">
                    Share your wisdom
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPlatform;