// React Imports
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Component Imports
import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header/Header";
import FeedbackList from "./components/Feedback List/FeedbackList";
import FeedbackStats from "./components/Feedback Stats/FeedbackStats";
import FeedbackForm from "./components/Feedback Form/FeedbackForm";
import About from "./pages/About/About";
import InfoIcon from "./components/AboutIconLink/InfoIcon";

// Provider imports
import { FeedbackProvider } from "./context/FeedbackContext";
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (feedback) => {
    feedback.id = uuidv4();
    setFeedback((prev) => {
      return [feedback, ...prev];
    });
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete feedback ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <FeedbackProvider>
      <Router>
        <Header title="Feedback" />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats />
                  <FeedbackList handleDelete={deleteFeedback} />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>
          <InfoIcon />
        </div>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
