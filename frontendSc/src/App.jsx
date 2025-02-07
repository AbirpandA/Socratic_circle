import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LearningPlatform from "./Componenets/LearningPlatform"
import FellowshipPage from "./Componenets/FellowshipPage"
import MentorSearch from "./Componenets/MentorSearch"
import InquirePage from "./Componenets/InquirePage"
import SessionPage from "./Componenets/SessionPage"
import MessageSection from "./Componenets/MessageSection"

import Sidebar from "./Componenets/Sidebar"
import ProfilePage from './Componenets/ProfilePage';
import LoginPage from './Componenets/LoginPage';
import SignUpPage from './Componenets/SignUpPage';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if user is authenticated

  return (
    <Router>
      <div className="flex min-h-screen bg-stone-50">
        <Sidebar />
        <div className="flex-1 ml-72 p-8">
          <Routes>
            <Route path="/" element={isAuthenticated ? <LearningPlatform /> : <Navigate to="/login" />} />
            <Route path="/find-mentors" element={<MentorSearch />} />
            <Route path="/fellowship" element={<FellowshipPage />} />
            <Route path="/inquire" element={<InquirePage />} />
            <Route path="/session" element={<SessionPage />} />
            <Route path="/message" element={<MessageSection />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App