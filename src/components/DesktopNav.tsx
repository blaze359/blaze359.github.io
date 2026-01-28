import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Nav } from 'react-bootstrap';


export default function DesktopNav() {
  return (
    <Nav className="flex-column h-100 w-100 d-flex flex-column gap-4 mt-4 fs-4 align-items-center">
      <Nav.Link href="/">
        Summary
        <FontAwesomeIcon icon={faChevronRight} className="fs-5" />
      </Nav.Link>
      <Nav.Link href="/projects">
        Projects
        <FontAwesomeIcon icon={faChevronRight} className="fs-5" />
      </Nav.Link>
      <Nav.Link href="/history">
        History
        <FontAwesomeIcon icon={faChevronRight} className="fs-5" />
      </Nav.Link>
      <Nav.Link href="/aboutMe">
        About
        <FontAwesomeIcon icon={faChevronRight} className="fs-5" />
      </Nav.Link>
    </Nav>
  );

}