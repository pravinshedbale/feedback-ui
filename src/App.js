// React Imports
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// Component Imports
import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header/Header";
import FeedbackList from "./components/Feedback List/FeedbackList";
import FeedbackStats from "./components/Feedback Stats/FeedbackStats";
import FeedbackForm from "./components/Feedback Form/FeedbackForm";
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
    <>
      <Header title="Feedback" />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
};

export default App;
