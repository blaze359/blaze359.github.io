
import GetIcon from "../components/GetIcon";
import AboutData from "../data/about.json";
import { Ul } from "../styles/Ul";
export default function AboutMe() {
    return (
      <section>
        <h1>{AboutData.title}</h1>
        <p>{AboutData.description}</p>
        <h3>Hobbies & Interests</h3>
        <Ul className="d-flex flex-column gap-2">
          {AboutData.hobbies.map((hobby, index) => (
            <li key={index} className="d-flex align-items-center gap-2">
              <GetIcon name={hobby.icon} />
              <div>{hobby.text}</div>
            </li>
          ))}
        </Ul>
      </section>
    );
}