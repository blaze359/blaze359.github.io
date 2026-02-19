import { Routes, Route, Navigate } from "react-router-dom";
import Projects from "../pages/Projects";
import Summary from "../pages/Summary";
import AboutMe from "../pages/AboutMe";
import ProjectDetails from "../pages/ProjectDetails";
import History from "../pages/History";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/history" element={<History />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
