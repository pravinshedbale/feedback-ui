import "./Card.css";
import PropType from "prop-types";
const Card = ({ children, reverse }) => {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
};

Card.propTypes = {
  children: PropType.node.isRequired,
  reverse: PropType.bool,
};

export default Card;
