import projectData from "../data/projects.json";

export default function Projects() {
    return (
        <section>
            <h2>Projects</h2>
            {projectData.projects.map((project) => (
                <div key={project.id}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </section>
    )

}