import SummaryData from "../data/summary.json";
import MyBadge from "../components/MyBadge";

export default function Summary() {
  return (
    <section>
      <h2>{SummaryData.title}</h2>
      <p>{SummaryData.description}</p>
      <div>
        <h3>Skills</h3>
        <div className="d-flex gap-4 fs-4 flex-wrap">
          {SummaryData.skills.map((skill, index) => (
            <MyBadge text={skill} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
