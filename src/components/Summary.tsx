import { Container } from "react-bootstrap";
import SummaryData from "../data/summary.json";

export default function Summary() {
  return (
    <section>
      <h2>{SummaryData.title}</h2>
      <p>{SummaryData.description}</p>
    </section>
  );
}
