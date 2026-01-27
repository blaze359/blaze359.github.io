
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faBootstrap, faConfluence, faCss3, faFigma, faGithub, faHtml5, faJava, faJira, faReact } from "@fortawesome/free-brands-svg-icons";

type GetIconProps = {
  readonly name: string;
};

export default function GetIcon({ name }: GetIconProps) {
  switch (name.toUpperCase()) {
    case "REACT":
    case "REACT.JS":
      return <FontAwesomeIcon icon={faReact} />;
    case "JAVA":
      return <FontAwesomeIcon icon={faJava} />;
    case "GITHUB":
    case "GITHUB PAGES":
    case "GITHUB ACTIONS":
      return <FontAwesomeIcon icon={faGithub} />;
    case "BOOTSTRAP":
      return <FontAwesomeIcon icon={faBootstrap} />;
    case "HTML":
    case "HTML5":
      return <FontAwesomeIcon icon={faHtml5} />;
    case "CSS":
    case "CSS3":
      return <FontAwesomeIcon icon={faCss3} />;
    case "AWS":
      return <FontAwesomeIcon icon={faAws} />;
    case "JIRA":
      return <FontAwesomeIcon icon={faJira} />;
    case "CONFLUENCE":
      return <FontAwesomeIcon icon={faConfluence} />;
    case "FIGMA":
      return <FontAwesomeIcon icon={faFigma} />;
    default:
      return null;
  }

}