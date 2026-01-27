import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Ul } from '../styles/Ul';


export default function NavBar() {
    return (
      <nav className="h-100 w-100">
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