import { useParams } from "react-router-dom";
import projectData from "../data/projects.json";
import GetIcon from "../components/GetIcon";

export default function ProjectDetails() {
    const { id } = useParams();
    const projectId = id ? Number(id) : null;
    const project = projectData.projects.find(proj => proj.id === projectId);

    return (
      <section className="d-flex flex-column gap-4">
        <h2>{project ? project.name : "Project Not Found"}</h2>
        {project?.images && project.images.length > 0 ? 
          project.images.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              alt={`${project.name} screenshot ${index + 1}`} 
              style={{ maxWidth: '100%', height: 'auto' }} 
            />
          )) 
        : null}
        {project?.problem ? (
          <>
            <div>
              <h3>Problem</h3>
              <p>{project.problem}</p>
            </div>
            <div>
              <h3>Solution</h3>
              <p>{project.solution}</p>
            </div>
          </>
        ) : <p>{project ? project.longDescription : "No details available."}</p>}
        

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
                <li key={tech}><GetIcon name={tech} />{tech}</li>
            ))}
            </ul>
        </div>
      </section>
    );
}
