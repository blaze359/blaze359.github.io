import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
      <nav style={{ backgroundColor: "black", height: "100%", width: "100%" }}>
        <ul>
          <li>
            <Link to="/">Summary</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/aboutMe">About Me</Link>
          </li>
        </ul>
      </nav>
    );

}