import { useState, useEffect } from 'react';
import {Send, BookOpen, Search, ThumbsUp, MessageCircle, Share2, Filter } from 'lucide-react';
import axios from "axios"

const InquirePage = () => {
  // const [messages, setMessages] = useState([
  //   {
  //     id: 1,
  //     author: "Young Scholar",
  //     avatar: "/api/placeholder/40/40",
  //     question: "On the Nature of Beauty",
  //     content: "In studying the great masters, I observe that beauty appears to follow certain proportions. Is beauty truly mathematical in nature, or is there something more divine in its essence?",
  //     topic: "Aesthetics",
  //     responses: 3,
  //     contemplations: 12,
  //     timeAgo: "2 hours ago",
  //     references: ["Plato's Symposium", "Vitruvian Principles"],
  //     type: "inquiry"
  //   },
  //   {
  //     id: 2,
  //     author: "Master Leonardo",
  //     avatar: "/api/placeholder/40/40",
  //     content: "Indeed, the divine proportion manifests in nature's most beautiful forms. Yet, true beauty lies not merely in numbers, but in the harmony between mathematical precision and natural variation. Consider how light and shadow dance together - neither pure geometry nor chaos, but a perfect balance.",
  //     parentQuestion: "On the Nature of Beauty",
  //     timeAgo: "1 hour ago",
  //     wisdom: 28,
  //     type: "response"
  //   },
  //   {
  //     id: 3,
  //     author: "Curious Mind",
  //     avatar: "/api/placeholder/40/40",
  //     question: "The Role of Practice in Mastery",
  //     content: "How does one balance the pursuit of theoretical knowledge with practical application? The ancient texts speak of both contemplation and action.",
  //     topic: "Methodology",
  //     responses: 5,
  //     contemplations: 15,
  //     timeAgo: "3 hours ago",
  //     references: ["Aristotle's Nicomachean Ethics"],
  //     type: "inquiry"
  //   }
  // ]);

  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/api/inquire/categories")
        .then(response => {
            setCategories(response.data);  // Store fetched categories
            console.log(response.data);
        })
        .catch(error => {
            console.error("Error fetching categories:", error);
        });
  }, []);

  // Function to fetch questions when a category is clicked
  const fetchQuestions = async (categoryId) => {
    setLoading(true);
    try{
      const response = await axios.get(`http://localhost:3000/api/inquire/questions/${categoryId}`)
      console.log(response.data);
      setQuestions(response.data);
      console.log("questions", questions)
    }catch(err){
      console.error("Error fetching questions:", err);
    }finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-stone-50">
      {/* Left Sidebar - Topics */}
      <div className="w-72 border-r border-stone-200 p-6 bg-stone-100">
        <h2 className="text-xl font-serif mb-6 text-stone-800">Fields of Inquiry</h2>
        
        <div className="space-y-4">
          {/* {["Philosophy", "Arts", "Sciences", "Letters", "Mathematics", "Music"].map(topic => (
            <button key={topic} className="w-full text-left px-4 py-2 rounded-lg text-stone-600 hover:bg-stone-200 transition-all font-serif">
              {topic}
            </button>
          ))} */}
          {
            categories.map((category, index) => (
              <button key={index} className="w-full text-left px-4 py-2 rounded-lg text-stone-600 hover:bg-stone-200 transition-all font-serif"
               onClick={() => fetchQuestions(category._id)}
              >
                {/* {category._id} */}
                {category.name}
              </button>
            ))
          }
        </div>

        <div className="mt-8 p-4 bg-stone-200 rounded-lg">
          <p className="font-serif text-stone-600 italic text-sm">
            "The unexamined life is not worth living" - Socrates
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b border-stone-200 p-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search through the scrolls of wisdom..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
              />
              <Search size={20} className="absolute left-4 top-3.5 text-stone-400" />
            </div>
          </div>
        </div>

        {/* Messages */}
        {/* Display Fetched Questions */}
<div className="flex-1 overflow-y-auto p-6">
  <div className="max-w-3xl mx-auto space-y-6">
    {loading ? (
      <p className="text-stone-500 text-center">Loading questions...</p>
    ) : questions.length > 0 ? (
      questions.map(question => (
        <div key={question._id} className="bg-white rounded-lg border border-stone-200 p-6 hover:shadow-md transition-all">
          <div className="flex items-start space-x-4">
            <img src="/api/placeholder/40/40" alt="User" className="w-10 h-10 rounded-full" />

            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="font-serif text-stone-800">{question.author || "Anonymous"}</span>
                <span className="text-stone-500 text-sm">{question.timeAgo || "Just now"}</span>
              </div>

              <h3 className="text-xl font-serif text-stone-800 mb-2">{question.questionText}</h3>

              <p className="text-stone-600 leading-relaxed mb-4">{question.description}</p>

              {question.references && question.references.length > 0 && (
                <div className="flex items-center space-x-2 mb-4">
                  <BookOpen size={16} className="text-stone-500" />
                  <div className="flex space-x-2">
                    {question.references.map((ref, index) => (
                      <span key={index} className="text-sm text-stone-500 italic">
                        {ref}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                <div className="flex space-x-6">
                  <button className="flex items-center space-x-2 text-stone-500 hover:text-stone-800">
                    <MessageCircle size={18} />
                    <span className="text-sm">{question.responses || 0} Responses</span>
                  </button>
                  <button className="flex items-center space-x-2 text-stone-500 hover:text-stone-800">
                    <ThumbsUp size={18} />
                    <span className="text-sm">{question.contemplations || 0} Contemplations</span>
                  </button>
                </div>

                <button className="text-stone-600 hover:text-stone-800 font-serif text-sm">
                  Offer Wisdom
                </button>
              </div>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p className="text-stone-500 text-center">No questions found for this category.</p>
    )}
  </div>
</div>


        {/* Question Input */}
        <div className="border-t border-stone-200 p-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <textarea
                placeholder="Frame your question with wisdom and clarity..."
                className="w-full pl-4 pr-12 py-4 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 resize-none"
                rows={3}
              />
              <div className="absolute right-4 bottom-4 flex items-center space-x-2">
                <button className="p-2 text-stone-400 hover:text-stone-600">
                  <BookOpen size={20} />
                </button>
                <button className="p-2 text-stone-400 hover:text-stone-600">
                  <Filter size={20} />
                </button>
                <button className="p-2 bg-stone-800 text-stone-50 rounded-lg hover:bg-stone-900">
                  <Send size={20} />
                </button>
              </div>
            </div>
            <p className="mt-2 text-stone-500 text-sm font-serif italic">
              "Ask not in haste, but in contemplation. A well-formed question is half the answer."
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default InquirePage;