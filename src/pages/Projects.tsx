import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import MyBadge from "../components/MyBadge";
import { useStatsigConfig } from "../statsig/useStatsigConfig";
import type { Project } from "../types/projects";

export default function Projects() {
    const projectsData = useStatsigConfig("projects_config");
    const projects = projectsData.get("projects", []) as Project[];

    return (
        <section>
            <h1>Projects</h1>
            <ul className="ps-0">
                {projects.map((project) => (
                    <li
                        key={project.id}
                        className="d-flex flex-column gap-2 mb-4"
                    >
                        <Link
                            to={`/Projects/${project.id}`}
                            className="text-decoration-none"
                        >
                            <Card className="p-0">
                                <Card.Header>
                                    <h4>{project.name}</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {project.shortDescription}
                                    </Card.Text>
                                    <div className="d-flex flex-wrap gap-2">
                                        {project.technologies.map(
                                            (tech, index) =>
                                                index < 3 && (
                                                    <MyBadge
                                                        text={tech}
                                                        key={tech}
                                                        bg="secondary"
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
