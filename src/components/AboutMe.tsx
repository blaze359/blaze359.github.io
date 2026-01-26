
import AboutData from "../data/about.json";
export default function AboutMe() {
    return (
        <section>
            <h2>{AboutData.title}</h2>
            <p>{AboutData.description}</p>
        </section>
    )
}