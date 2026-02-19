import MyBadge from "../components/MyBadge";
import { useStatsigConfig } from "../statsig/useStatsigConfig";

export default function Summary() {
    const summaryData = useStatsigConfig("summary_config");
    const skills = summaryData.get("skills", []) as string[];

    return (
        <section>
            <h1>{summaryData.get("title", "Default Title")}</h1>
            <p>{summaryData.get("description", "Default Description")}</p>
            <div>
                <h3>Skills</h3>
                <div className="d-flex gap-4 fs-4 flex-wrap">
                    {skills.map((skill) => (
                        <MyBadge text={skill} key={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
}
