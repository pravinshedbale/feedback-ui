import PropTypes from "prop-types";
import FeedbackItem from "../Feedback Item/FeedbackItem";
const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem
          id={item.id}
          feedback={item}
          handleDelete={handleDelete}
          key={item.id}
        />
      ))}
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackList;
