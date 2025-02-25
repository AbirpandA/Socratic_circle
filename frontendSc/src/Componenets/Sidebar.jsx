
import { Link, useNavigate } from 'react-router-dom';
import { ScrollText, Search, Users,MessageCircleQuestion, PenTool,CalendarSync,MessageSquareDot,Sparkles   } from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed w-72 h-screen bg-stone-100 border-r border-stone-200 p-8 flex flex-col space-y-8">
      <div className="flex items-center space-x-3">
        <Link  to="/Profile" className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center">
          <span className="text-stone-50 font-serif text-lg">C</span>
        </Link>
        <h1 className="text-2xl font-serif text-stone-800 tracking-wide">Socratic</h1>

        <div className='flex gap-2 align-middle'>
        <Sparkles size={20} />
        <h3 className='text-stone-600'>3</h3>
        </div>
      </div>
      
      <nav className="space-y-6">
        <Link to="/" className="flex items-center space-x-4 text-stone-600 hover:text-stone-900 p-3 rounded-lg hover:bg-stone-200 transition-all">
          <ScrollText size={20} />
          <span className="font-serif text-lg">Forum</span>
        </Link>
        
        <Link to="/find-mentors" className="flex items-center space-x-4 text-stone-600 hover:text-stone-900 p-3 rounded-lg hover:bg-stone-200 transition-all">
          <Search size={20} />
          <span className="font-serif text-lg">Find Mentors</span>
        </Link>
        
        <Link to="/fellowship" className="flex items-center space-x-4 text-stone-600 hover:text-stone-900 p-3 rounded-lg hover:bg-stone-200 transition-all">
          <Users size={20} />
          <span className="font-serif text-lg">Fellowship</span>
        </Link>
        
        <Link to="/Inquire" className="flex items-center space-x-4 text-stone-600 hover:text-stone-900 p-3 rounded-lg hover:bg-stone-200 transition-all">
          < MessageCircleQuestion size={20} />
          <span className="font-serif text-lg">Inquire</span>
        </Link>

        <Link to="/Session" className="flex items-center space-x-4 text-stone-600 hover:text-stone-900 p-3 rounded-lg hover:bg-stone-200 transition-all">
          < CalendarSync  size={20} />
          <span className="font-serif text-lg">Session</span>
        </Link>
        <Link to="/message" className="flex items-center space-x-4 text-stone-600 hover:text-stone-900 p-3 rounded-lg hover:bg-stone-200 transition-all">
          < MessageSquareDot   size={20} />
          <span className="font-serif text-lg">Personal Inquiry</span>
        </Link>
      </nav>

      <button 
      className="w-full bg-stone-800 text-stone-50 py-4 px-6 rounded-lg font-serif hover:bg-stone-900 transition-all flex items-center justify-center space-x-2"
      onClick={() => navigate('/create-feed')} // Navigate to Feed Post Page
    >
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
  );
};

export default Sidebar; 