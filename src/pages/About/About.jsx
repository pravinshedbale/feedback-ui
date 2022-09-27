import Card from "../../layout/Card";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <Card>
      <div className="about">
        <h1>About Feedback UI</h1>
        <p>SPA for taking feedback for a product/service</p>
        <p>Version 1.0</p>
        <p>
          Author :{" "}
          <b>
            <a
              href="https://www.linkedin.com/in/pravinshedbale"
              target={"_blank"}
            >
              Pravin Shedbale
            </a>
          </b>
        </p>
        <p>
          <Link to={"/"}>Back to Home</Link>
        </p>
      </div>
    </Card>
  );
};

export default About;
