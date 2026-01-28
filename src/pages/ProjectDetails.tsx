import { useParams } from "react-router-dom";
import projectData from "../data/projects.json";
import ImageCarousel from "../components/ImageCarousel";
import MyBadge from "../components/MyBadge";

export default function ProjectDetails() {
    const { id } = useParams();
    const projectId = id ? Number(id) : null;
    const project = projectData.projects.find(proj => proj.id === projectId);

    return (
      <section className="d-flex flex-column gap-4">
        <h2>{project ? project.name : "Project Not Found"}</h2>
        {project?.images && project.images.length > 0 ? 
          <ImageCarousel images={project.images} />
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
        

        {project?.url && project.url.length > 0 ? (
          <div>
            URL:{" "}
            {project.url.map((url, index) => (
              url.includes("http") ? (
              <a key={index} href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            ) : <p key={index}>{url}</p>
            ))}
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
            <div className="d-flex flex-wrap gap-2 mt-2">
            {project?.technologies.map((tech) => (
              <MyBadge
                text={tech}
                key={tech}
                bg="secondary"
                className="fs-5"
              />
            ))}
            </div>
        </div>
      </section>
    );
}
