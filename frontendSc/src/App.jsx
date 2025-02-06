import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LearningPlatform from "./Componenets/LearningPlatform"
import FellowshipPage from "./Componenets/FellowshipPage"
import MentorSearch from "./Componenets/MentorSearch"
import InquirePage from "./Componenets/InquirePage"
import SessionPage from "./Componenets/SessionPage"
import Sidebar from "./Componenets/Sidebar"

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-stone-50">
        <Sidebar />
        <div className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<LearningPlatform />} />
            <Route path="/find-mentors" element={<MentorSearch />} />
            <Route path="/fellowship" element={<FellowshipPage />} />
            <Route path="/profile" element={<InquirePage />} />
            <Route path="/session" element={<SessionPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App