import { Accordion } from "react-bootstrap";
import { Ul } from "../styles/Ul";
import { useStatsigConfig } from "../statsig/useStatsigConfig";
import type { WorkHistory, Education, Certificate } from "../types/history";

export default function History() {
    const historyData = useStatsigConfig("history_config");
    const historyItems = historyData.get("History", []) as WorkHistory[];
    const educationItems = historyData.get("Education", []) as Education[];
    const certificateItems = historyData.get(
        "Certificates",
        [],
    ) as Certificate[];

    return (
        <section>
            <h1>History</h1>
            <Ul className="ps-0">
                {historyItems.map((item) => (
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
                                                {positions.StartDate} -{" "}
                                                {positions.EndDate}
                                            </div>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            {positions.Responsibilities.map(
                                                (resp, respIndex) => (
                                                    <li key={respIndex}>
                                                        {resp}
                                                    </li>
                                                ),
                                            )}
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
                {educationItems.map((edu) => (
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
                {certificateItems.map((cert) => (
                    <li key={cert.Name}>
                        <h3 className="mb-0">{cert.Name}</h3>
                        <p className="mb-0">
                            Issued by: {cert.IssuingOrganization}
                        </p>
                        {cert.Badge && (
                            <img src={cert.Badge} alt={`${cert.Name} badge`} />
                        )}
                    </li>
                ))}
            </Ul>
        </section>
    );
}
