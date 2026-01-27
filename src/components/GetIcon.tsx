
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faGithub, faJava, faReact } from "@fortawesome/free-brands-svg-icons";

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
    case "GITHUB ACTIONS":
      return <FontAwesomeIcon icon={faGithub} />;
    case "BOOTSTRAP":
      return <FontAwesomeIcon icon={faBootstrap} />;
    default:
      return null;
  }

}