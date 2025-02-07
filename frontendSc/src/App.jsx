import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LearningPlatform from "./Componenets/LearningPlatform"
import FellowshipPage from "./Componenets/FellowshipPage"
import MentorSearch from "./Componenets/MentorSearch"
import InquirePage from "./Componenets/InquirePage"
import SessionPage from "./Componenets/SessionPage"
import MessageSection from "./Componenets/MessageSection"

import Sidebar from "./Componenets/Sidebar"

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-stone-50">
        <Sidebar />
        <div className="flex-1 ml-72 p-8">
          <Routes>
            <Route path="/" element={<LearningPlatform />} />
            <Route path="/find-mentors" element={<MentorSearch />} />
            <Route path="/fellowship" element={<FellowshipPage />} />
            <Route path="/Inquire" element={<InquirePage />} />
            <Route path="/session" element={<SessionPage />} />
            <Route path="/message" element={<MessageSection />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App