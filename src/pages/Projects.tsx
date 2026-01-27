import { Link } from "react-router-dom";
import projectData from "../data/projects.json";
import Card from "react-bootstrap/Card";
import MyBadge from "../components/MyBadge";

export default function Projects() {
    return (
      <section>
        <h2>Projects</h2>
        <ul>
          {projectData.projects.map((project) => (
            <li key={project.id} className="d-flex flex-column gap-2 mb-4">
              <Link
                to={`/Projects/${project.id}`}
                className="text-decoration-none"
              >
                <Card className="p-0">
                  <Card.Header>
                    <h4>{project.name}</h4>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>{project.shortDescription}</Card.Text>
                    <div className="d-flex">
                      {project.technologies.map(
                        (tech, index) =>
                          index < 3 && (
                            <MyBadge
                              text={tech}
                              key={tech}
                              bg="secondary"
                              className="me-2"
                            />
                          ),
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );

}