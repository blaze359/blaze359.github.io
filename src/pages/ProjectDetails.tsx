import { useParams } from "react-router-dom";
import projectData from "../data/projects.json";

export default function ProjectDetails() {
    const { id } = useParams();
    const projectId = id ? Number(id) : null;
    const project = projectData.projects.find(proj => proj.id === projectId);

    return (
      <section className="d-flex flex-column gap-4">
        <h2>{project ? project.name : "Project Not Found"}</h2>
        <p>{project ? project.longDescription : "No details available."}</p>

        {project?.url ? (
          <div>
            URL:{" "}
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.url}
            </a>
          </div>
        ) : null}
        {project?.repository ? (
          <div>
            Repository:{" "}
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.repository}
            </a>
          </div>
        ) : null}
        <div> Technologies:
            <ul>
            {project?.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
            ))}
            </ul>
        </div>
      </section>
    );
}
