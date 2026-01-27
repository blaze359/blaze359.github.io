
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faJava, faReact } from "@fortawesome/free-brands-svg-icons";

type GetIconProps = {
  readonly name: string;
};

export default function GetIcon({ name }: GetIconProps) {
  switch (name.toUpperCase()) {
    case "REACT":
      return <FontAwesomeIcon icon={faReact} />;
    case "JAVA":
      return <FontAwesomeIcon icon={faJava} />;
    case "GITHUB":
    case "GITHUB PAGES":
      return <FontAwesomeIcon icon={faGithub} />;
    default:
      return null;
  }

}