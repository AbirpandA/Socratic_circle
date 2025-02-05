import LearningPlatform from "./Componenets/LearningPlatform"
import FellowshipPage from "./Componenets/FellowshipPage"
import MentorSearch from "./Componenets/MentorSearch"
import MessageInterface from "./Componenets/MessageInteface"
import SessionPage from "./Componenets/SessionPage"

const App = () => {
  return (
    <div>
      <LearningPlatform />
      <FellowshipPage />
      <MentorSearch />
      <SessionPage />
      <MessageInterface />
    </div>
  )
}

export default App