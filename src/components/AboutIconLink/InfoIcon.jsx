import { FaInfo } from "react-icons/fa";
import { Link } from "react-router-dom";
const InfoIcon = () => {
  return (
    <div className="about-link">
      <Link to={"/about"}>
        <FaInfo size={30} />
      </Link>
    </div>
  );
};

export default InfoIcon;
