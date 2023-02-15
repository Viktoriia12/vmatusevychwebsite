import { alignPropType } from "react-bootstrap/esm/types";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import SocialMediaButtons from "../Components/SocialMediaButtons";

function AboutPage() {
  return (
    <div className="About">
      <p style={{ textAlign: "center", color: "white", fontSize: "25px" }}>
        ABOUT ME
      </p>
      <Row>
        <Col md={6}>
          <p style={{ color: "black", fontSize: "25px" }}>Picture goes here</p>
        </Col>
        <Col md={6}>
          <div className="white-rectangle" align={alignPropType}>
            <p
              className="p-4 text-center"
              style={{ color: "black", fontSize: "25px" }}
            >
              BIO
            </p>
            <p className="p-4 text-center">
              I am Viktoriia Matusevych a globally-minded designer with a
              passion for computer game design. Born in Ukraine, my love of
              travel led me to study in countries such as Saudi Arabia, Oman,
              Qatar and the United States, where my artistic talents were
              nurtured and encouraged. This portfolio website is a reflection of
              the skills and experiences I have gained over the years.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <button class="resumeButton">DOWNLOAD RESUME</button>
        </Col>
      </Row>
      <SocialMediaButtons />
    </div>
  );
}

export default AboutPage;
