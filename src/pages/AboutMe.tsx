
import AboutData from "../data/about.json";
export default function AboutMe() {
    return (
        <section>
            <h2>{AboutData.title}</h2>
            <p>{AboutData.description}</p>
            <h3>Hobbies & Interests</h3>
            <ul>
                {AboutData.hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </section>
    )
}