import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

const LearningPlatform = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/posts/feed");
        const data = await response.json();

        // Transform API response into expected format
        const formattedPosts = data.map(post => ({
          id: post._id,
          author: post.user.email.split("@")[0], // Extract username from email
          avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=" + post.user.email, // Placeholder avatar
          title: "New Post", // Placeholder title (since API does not provide one)
          content: post.text,
          likes: post.likes,
          responses: post.comments.length,
          category: "General", // Placeholder category
          timeAgo: "Just now", // You can format actual timestamps if available
          image: post.image[0] || null, // Use image if available
          videoUrl: post.videoUrl || null
        }));

        setPosts(formattedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex min-h-screen bg-stone-50">
      <div className="flex-1 p-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-serif text-stone-800 mb-4">Forum of Knowledge</h1>
            <p className="text-stone-600 font-serif italic text-lg">
              "The beginning of wisdom is the definition of terms" - Socrates
            </p>
          </div>

          {/* Categories */}
          <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
            {["All", "General", "Art", "Literature", "Science", "Music"].map(category => (
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

                {/* Render image or video if available */}
                {post.image && (
                  <img src={post.image} alt="Post Visual" className="w-full h-auto rounded-lg mb-4" />
                )}
                {post.videoUrl && (
                  <video controls className="w-full h-auto rounded-lg mb-4">
                    <source src={post.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}

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
