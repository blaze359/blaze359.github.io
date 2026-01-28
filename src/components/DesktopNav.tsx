import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

type DesktopNavProps = {
  readonly onAction?: () => void;
};

export default function DesktopNav({ onAction }: DesktopNavProps) {
  return (
    <Nav className="flex-column h-100 w-100 d-flex flex-column gap-4 mt-4 fs-4 align-items-center">
      <Nav.Link as={NavLink} to="/" onClick={onAction}>
        Summary
        <FontAwesomeIcon icon={faChevronRight} className="fs-5" />
      </Nav.Link>
      <Nav.Link as={NavLink} to="/projects" onClick={onAction}>
        Projects
        <FontAwesomeIcon icon={faChevronRight} className="fs-5" />
      </Nav.Link>
      <Nav.Link as={NavLink} to="/history" onClick={onAction}>
        History
        <FontAwesomeIcon icon={faChevronRight} className="fs-5" />
      </Nav.Link>
      <Nav.Link as={NavLink} to="/about" onClick={onAction}>
        About
        <FontAwesomeIcon icon={faChevronRight} className="fs-5" />
      </Nav.Link>
    </Nav>
  );
}