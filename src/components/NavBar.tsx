import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default function NavBar() {
    return (
        <>
            <nav style={{backgroundColor: "black", height: "100%", width: "100%"}}>
                <ul>
                    <li><Link to="/" >Summary</Link></li>
                    <li><Link to="/aboutMe">About Me</Link></li>
                </ul>
            </nav>
            <Navbar bg="light" expand="lg">
                <LinkContainer to="/">
                    <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/service">
                            <Nav.Link>Service</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )

}