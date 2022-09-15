import { useState } from "react";
import "./FeedbackForm.css";
import Card from "../../layout/Card";
import Button from "../../common/Button/Button";
import RatingSelection from "../Rating Selection/RatingSelection";
const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const handleTextChange = (e) => {
    if (text === "") {
      setbtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setbtnDisabled(true);
      setMessage("Feedback must me atleast 10 characters");
    } else {
      setbtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
        id:
      };
      handleAdd(newFeedback);
      setText("");
    } else {
      alert("Feedback text should be atleast 10 charachters long");
    }
  };
  return (
    <Card reverse={false}>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>

        <RatingSelection
          select={(rating) => {
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            onKeyUp={handleTextChange}
            type="text"
            placeholder="Write your review"
            value={text}
            className="feedback-text"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
