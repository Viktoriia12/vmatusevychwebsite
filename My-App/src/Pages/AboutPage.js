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
            <p style={{ color: "black", fontSize: "25px" }}>BIO</p>
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
