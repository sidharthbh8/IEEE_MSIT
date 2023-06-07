import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function HeaderComponent() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" color='$indigo-900' style={{ height: '1.8rem' }}>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link href="#features" style={{ zIndex: '50', color: 'white' }}>IEEE.org</Nav.Link>
                            <Nav.Link href="#pricing">IEEE xplore Digital Library</Nav.Link>
                            <Nav.Link href="#features">IEEE Standards</Nav.Link>
                            <Nav.Link href="#pricing">IEEE Spectrum</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: "#18122B" }}>
                <Container>
                    <Navbar.Brand href="/">IEEE-MSIT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#pricing">About Us</Nav.Link>
                            <Nav.Link href="/events">Event</Nav.Link>
                            <Nav.Link href="#pricing">Gallery</Nav.Link>
                            <Nav.Link href="#pricing">Executive Board</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Login</Nav.Link>
                            <Nav.Link href="#deets">SignUp</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default HeaderComponent;