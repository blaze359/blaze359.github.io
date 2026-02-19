
import GetIcon from "../components/GetIcon";
import { useStatsigConfig } from "../statsig/useStatsigConfig";
import { Ul } from "../styles/Ul";
export default function AboutMe() {
  const aboutData = useStatsigConfig("about_config");
  const hobbies = aboutData.get("hobbies", []) as { icon: string; text: string }[];
  
  return (
    <section>
      <h1>{aboutData.get("title", "Default Title")}</h1>
      <p>{aboutData.get("description", "Default Description")}</p>
      <h3>Hobbies & Interests</h3>
      <Ul className="d-flex flex-column gap-2">
        {hobbies.map((hobby, index) => (
          <li key={index} className="d-flex align-items-center gap-2">
            <GetIcon name={hobby.icon} />
            <div>{hobby.text}</div>
          </li>
        ))}
      </Ul>
    </section>
  );
}