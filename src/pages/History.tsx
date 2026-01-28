import { Accordion } from "react-bootstrap";
import HistoryData from "../data/history.json";
import { Ul } from "../styles/Ul";
export default function History() {
  return (
    <section>
      <h1>History</h1>
      <Ul className="ps-0">
        {HistoryData.History.map((item) => (
          <li key={item.Company}>
            <h3 className="mb-0">
              {item.Company} - {item.Location}
            </h3>
            <p className="mb-0">Headquarters: {item.HQLocation}</p>
            <h5>
              {item.StartDate} - {item.EndDate}
            </h5>
            <Accordion>
              {item.Positions.map((positions, index) => (
                <Accordion.Item
                  key={positions.Title}
                  eventKey={index.toString()}
                >
                  <Accordion.Header>
                    <div className="d-flex flex-column">
                      <strong>{positions.Title}</strong>
                      <div>
                        {positions.StartDate} - {positions.EndDate}
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      {positions.Responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </li>
        ))}
      </Ul>
      <h2>Education</h2>
      <Ul>
        {HistoryData.Education.map((edu) => (
          <li key={edu.School}>
            <h3 className="mb-0">
              {edu.School} - {edu.Location}
            </h3>
            <h5>
              {edu.Degree} ({edu.GraduationYear})
            </h5>
            <p className="mb-0">Major: {edu.Major}</p>
          </li>
        ))}
      </Ul>
      <h2>Certifications</h2>
      <Ul>
        {HistoryData.Certificates.map((cert) => (
          <li key={cert.Name}>
            <h3 className="mb-0">{cert.Name}</h3>
            <p className="mb-0">Issued by: {cert.IssuingOrganization}</p>
            {cert.Badge && <img src={cert.Badge} alt={`${cert.Name} badge`} />}
          </li>
        ))}
      </Ul>
    </section>
  );
}
