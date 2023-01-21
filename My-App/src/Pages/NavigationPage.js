import { Link, Outlet, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Stack from "react-bootstrap/Stack";

function NavigationPage() {
  const location = useLocation();

  function dotNavigation(matchingLocation) {
    return location.pathname === matchingLocation ? "Dot buttonColor" : "";
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Collapse
            className="justify-content-end"
            style={{ background: "transparent" }}
          >
            <Navbar.Text>
              <Stack direction="horizontal" gap={3}>
                <Link
                  to="/"
                  className={dotNavigation("/")}
                  style={{ textDecoration: "none" }}
                >
                  HOME
                </Link>
                <Link
                  to="/About"
                  className={dotNavigation("/About")}
                  style={{ textDecoration: "none" }}
                >
                  ABOUT
                </Link>
                <Link
                  to="/Portfolio"
                  className={dotNavigation("/Portfolio")}
                  style={{ textDecoration: "none" }}
                >
                  PORTFOLIO
                </Link>
                <Link
                  to="/Contact"
                  className={dotNavigation("/Contact")}
                  style={{ textDecoration: "none" }}
                >
                  CONTACT
                </Link>
              </Stack>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
export default NavigationPage;
