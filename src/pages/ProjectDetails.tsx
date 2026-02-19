import { useParams } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import MyBadge from "../components/MyBadge";
import { useStatsigConfig } from "../statsig/useStatsigConfig";
import { Project } from "../types/projects";

export default function ProjectDetails() {
    const { id } = useParams();
    const projectId = id ? Number(id) : null;
    const projectsData = useStatsigConfig("projects_config");
    const projects = projectsData.get("projects", []) as Project[];
    const projectFromConfig = projects.find((proj) => proj.id === projectId);

    return (
        <section className="d-flex flex-column gap-4">
            <h2>
                {projectFromConfig
                    ? projectFromConfig.name
                    : "Project Not Found"}
            </h2>
            {projectFromConfig?.images &&
            projectFromConfig.images.length > 0 ? (
                <ImageCarousel images={projectFromConfig.images} />
            ) : null}
            {projectFromConfig?.problem ? (
                <>
                    <div>
                        <h3>Problem</h3>
                        <p>{projectFromConfig.problem}</p>
                    </div>
                    <div>
                        <h3>Solution</h3>
                        <p>{projectFromConfig.solution}</p>
                    </div>
                </>
            ) : (
                <p>
                    {projectFromConfig
                        ? projectFromConfig.longDescription
                        : "No details available."}
                </p>
            )}

            {projectFromConfig?.url && projectFromConfig.url.length > 0 ? (
                <div className="d-flex flex-row gap-2">
                    <p>URL:</p>
                    {projectFromConfig.url.map((url, index) =>
                        url.includes("http") ? (
                            <a
                                key={index}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {url}
                            </a>
                        ) : (
                            <p key={index}>{url}</p>
                        ),
                    )}
                </div>
            ) : null}
            {projectFromConfig?.repository ? (
                <div className="d-flex flex-row gap-2">
                    <p>Repository:</p>
                    {projectFromConfig.repository.includes("http") ? (
                        <a
                            href={projectFromConfig.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {projectFromConfig.repository}
                        </a>
                    ) : (
                        <p>{projectFromConfig.repository}</p>
                    )}
                </div>
            ) : null}
            <div>
                {" "}
                Technologies:
                <div className="d-flex flex-wrap gap-2 mt-2">
                    {projectFromConfig?.technologies.map((tech) => (
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
