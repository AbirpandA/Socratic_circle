import React, { useState } from 'react';
import { 
  Search, 
  Clock, 
  MapPin, 
  SlidersHorizontal, 
  BookOpen, 
  Star 
} from 'lucide-react';

const MentorSearch = () => {
  const [mentors, setMentors] = useState([
    {
      id: 1,
      name: "Michelangelo",
      avatar: "/api/placeholder/80/80",
      title: "Master Sculptor & Painter",
      rating: 4.9,
      reviews: 128,
      expertise: ["Sculpture", "Fresco", "Architecture"],
      hourlyRate: "3",
      location: "Florence, Italy",
      availability: "Next Week",
      description: "Specializing in marble sculpture and fresco techniques. Teaching the principles of human form and classical composition.",
      languages: ["Italian", "Latin"]
    },
    {
      id: 2,
      name: "Aristotle",
      avatar: "/api/placeholder/80/80",
      title: "Philosophy & Logic Master",
      rating: 4.8,
      reviews: 245,
      expertise: ["Logic", "Ethics", "Natural Science"],
      hourlyRate: "2",
      location: "Athens, Greece",
      availability: "Tomorrow",
      description: "Teaching systematic thinking, logic, and the art of reasoning. Expertise in practical philosophy and scientific method.",
      languages: ["Greek", "Persian"]
    },
    {
      id: 3,
      name: "Hildegard",
      avatar: "/api/placeholder/80/80",
      title: "Music & Herbalism Expert",
      rating: 4.7,
      reviews: 89,
      expertise: ["Musical Composition", "Herbalism", "Medicine"],
      hourlyRate: "1",
      location: "Rhineland",
      availability: "This Week",
      description: "Specializing in medieval musical composition and natural healing practices. Combining art with practical knowledge.",
      languages: ["Latin", "German"]
    }
  ]);

  return (
    <div className="flex min-h-screen bg-stone-50">
      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-serif text-stone-800 mb-4">Find Your Mentor</h1>
            <p className="text-stone-600 font-serif italic">
              "The wise man is not learned in all things, but seeks out good counsel" - Plato
            </p>
          </div>

          {/* Search Bar and Filters (Sticky) */}
          <div className="sticky top-0 z-10 bg-white p-6 rounded-lg border border-stone-200 mb-8 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search by skill, expertise, or mentor name..."
                  className="w-full pl-12 pr-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                />
                <Search size={20} className="absolute left-4 top-3.5 text-stone-400" />
              </div>
              <button className="flex items-center space-x-2 px-6 py-3 bg-stone-800 text-stone-50 rounded-lg hover:bg-stone-900 transition-colors">
                <Search size={20} />
                <span className="font-serif">Search</span>
              </button>
            </div>

            {/* Advanced Filters */}
            <div className="mt-4 flex items-center justify-between pt-4 border-t border-stone-100">
              <div className="flex space-x-4">
                {[
                  { label: "Expertise Level", icon: BookOpen },
                  { label: "Availability", icon: Clock },
                  { label: "Language", icon: MapPin },
                  { label: "SP Cost", icon: SlidersHorizontal }
                ].map((filter, index) => (
                  <button 
                    key={index} 
                    className="flex items-center space-x-2 px-4 py-2 border border-stone-200 rounded-lg text-stone-600 hover:border-stone-400 transition-colors"
                  >
                    <filter.icon size={16} />
                    <span className="font-serif">{filter.label}</span>
                  </button>
                ))}
              </div>
              <button className="text-stone-600 hover:text-stone-800 font-serif">
                Clear Filters
              </button>
            </div>
          </div>

          {/* Results (with extra top padding so content isn’t hidden behind the sticky header) */}
          <div className="space-y-6 pt-40">
            {mentors.map(mentor => (
              <div 
                key={mentor.id} 
                className="bg-white p-6 rounded-lg border border-stone-200 hover:shadow-md transition-all"
              >
                <div className="flex items-start space-x-6">
                  <img 
                    src={mentor.avatar} 
                    alt={mentor.name} 
                    className="w-20 h-20 rounded-lg object-cover" 
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-serif text-stone-800">{mentor.name}</h3>
                        <p className="text-stone-600">{mentor.title}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star size={16} className="text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold">{mentor.rating}</span>
                        <span className="text-stone-500">({mentor.reviews} reviews)</span>
                      </div>
                    </div>

                    <p className="text-stone-600 mb-4">{mentor.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {mentor.expertise.map(skill => (
                        <span 
                          key={skill} 
                          className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-sm font-serif"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                      <div className="flex space-x-6 text-sm text-stone-600">
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span>{mentor.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={16} />
                          <span>Available {mentor.availability}</span>
                        </div>
                        <div>
                          <span className="font-semibold">SP {mentor.hourlyRate}</span>
                        </div>
                      </div>
                      
                      <button className="px-6 py-2 bg-stone-800 text-stone-50 rounded-lg hover:bg-stone-900 transition-colors font-serif">
                        Request Mentorship
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results State (hidden by default) */}
          <div className="hidden text-center py-12">
            <p className="text-stone-600 font-serif">
              "The search for knowledge never yields nothing. Adjust your criteria to find more mentors."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorSearch;