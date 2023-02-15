import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <Row>
          <Col md={8} className="d-flex justify-content-center">
            <h3>WELCOME, ЛАСКАВО ПРОСИМО, MY NAME IS</h3>
          </Col>
        </Row>

        <Row>
          <Col md={8} className="d-flex justify-content-center">
            <h1
              className="d-inline-block p-1"
              style={{ color: "#106BF2", fontSize: "55px" }}
            >
              VIKTORIIA{" "}
            </h1>
            <h1
              className="d-inline-block p-1"
              style={{ color: "#E3E812", fontSize: "55px" }}
            >
              MATUSEVYCH
            </h1>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col md={8} className="d-flex justify-content-center">
            <button className="mx-auto resumeButton">
              <Link
                to="/Portfolio"
                style={{ textDecoration: "none", color: "white" }}
              >
                MY WORK
              </Link>
            </button>
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default HomePage; //ability to import from somewhere else
