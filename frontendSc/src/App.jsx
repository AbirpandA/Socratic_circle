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
import ChatbotComponent from './Componenets/ChatbotComponent';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if user is authenticated

  return (
    <Router>
      <div className="flex min-h-screen bg-stone-50">
        {isAuthenticated && <Sidebar />}
        <div className={`flex-1 ${isAuthenticated ? 'ml-72' : ''} p-8`}>
          <Routes>
            <Route path="/" element={isAuthenticated ? <LearningPlatform /> : <Navigate to="/login" />} />
            <Route path="/find-mentors" element={isAuthenticated ? <MentorSearch /> : <Navigate to="/login" />} />
            <Route path="/fellowship" element={isAuthenticated ? <FellowshipPage /> : <Navigate to="/login" />} />
            <Route path="/inquire" element={isAuthenticated ? <InquirePage /> : <Navigate to="/login" />} />
            <Route path="/session" element={isAuthenticated ? <SessionPage /> : <Navigate to="/login" />} />
            <Route path="/message" element={isAuthenticated ? <MessageSection /> : <Navigate to="/login" />} />
            <Route path='/profile' element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </div>
        <ChatbotComponent />
      </div>
    </Router>
  )
}

export default App