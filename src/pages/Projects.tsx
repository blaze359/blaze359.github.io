import { Link } from "react-router-dom";
import projectData from "../data/projects.json";
import Badge from "react-bootstrap/Badge";

export default function Projects() {
    return (
      <section>
        <h2>Projects</h2>
        <ul>
          {projectData.projects.map((project) => (
            <li key={project.id} className="d-flex flex-column gap-2 mb-4">
              <Link to={`/Projects/${project.id}`}><h4 className="mb-0">{project.name}</h4></Link>
              <p className="mb-0">{project.shortDescription}</p>
              <div>
                {project.technologies.map(
                  (tech, index) =>
                    index < 3 && (
                      <Badge
                        key={index}
                        bg="secondary"
                        style={{ marginRight: "5px" }}
                      >
                        {tech}
                      </Badge>
                    ),
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    );

}