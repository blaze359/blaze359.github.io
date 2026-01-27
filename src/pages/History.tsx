import HistoryData from "../data/history.json";
export default function History() {
  return (
    <section>
      <h2>History</h2>
      <ul>
        {HistoryData.History.map((item) => (
          <li key={item.Company}>
            <h3>
              {item.Company} - {item.HQLocation}
            </h3>
            <h5>
              {item.StartDate} - {item.EndDate}
            </h5>
          </li>
        ))}
      </ul>
    </section>
  );
}
