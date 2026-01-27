import { Link } from 'react-router-dom';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Ul = styled.ul`
    list-style-type: none;
`;

export default function NavBar() {
    return (
      <nav style={{ height: "100%", width: "100%" }}>
        <Ul className="d-flex flex-column gap-4 mt-4 fs-4">
          <li>
            <Link to="/">Summary</Link>
            <FontAwesomeIcon icon={faChevronRight} className="fs-5" />
          </li>
          <li>
            <Link to="/projects">Projects</Link>
            <FontAwesomeIcon icon={faChevronRight} className="fs-5" />
          </li>
          <li>
            <Link to="/history">History</Link>
            <FontAwesomeIcon icon={faChevronRight} className="fs-5" />
          </li>
          <li>
            <Link to="/aboutMe">About Me</Link>
            <FontAwesomeIcon icon={faChevronRight} className="fs-5" />
          </li>
        </Ul>
      </nav>
    );

}