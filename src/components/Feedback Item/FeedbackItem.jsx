import PropType from "prop-types";
import "./FeedbackItem.css";
import Card from "../../layout/Card";
import { FaTimes } from "react-icons/fa";

const FeedbackItem = ({ feedback, handleDelete }) => {
  return (
    <Card reverse={false}>
      <div className="num-display">{feedback.rating}</div>
      <button onClick={() => handleDelete(feedback.id)} className="close">
        <FaTimes color="red" />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  feedback: PropType.object.isRequired,
};

export default FeedbackItem;
