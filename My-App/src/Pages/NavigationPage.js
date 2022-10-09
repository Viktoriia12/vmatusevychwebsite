import { Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';

function NavigationPage() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Collapse className="justify-content-end" style={{background: 'transparent'}}>
          <Navbar.Text>
          <Stack direction="horizontal" gap={3}>
            <Link to="/" className="Dot" style={{textDecoration: 'none'}}>HOME</Link> 
            <Link to="/About" style={{textDecoration: 'none'}}>ABOUT</Link>  
            <Link to="/Portfolio" style={{textDecoration: 'none'}}>PORTFOLIO</Link> 
            <Link to="/Contact" style={{textDecoration: 'none'}}>CONTACT</Link> 
            </Stack>   
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>  
        </>
    )
}
export default NavigationPage; 