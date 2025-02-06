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
      
      {/* Main Content */}
      <div className="flex-1 p-8">
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