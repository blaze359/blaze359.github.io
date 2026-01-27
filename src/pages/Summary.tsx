import { Badge } from "react-bootstrap";
import SummaryData from "../data/summary.json";
import GetIcon from "../components/GetIcon";

export default function Summary() {
  return (
    <section>
      <h2>{SummaryData.title}</h2>
      <p>{SummaryData.description}</p>
      <div>
        <h3>Skills</h3>
        <div className="d-flex gap-4 fs-4">
          {SummaryData.skills.map((skill) => (
            <Badge key={skill} bg="primary">
              <GetIcon name={skill} />
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
