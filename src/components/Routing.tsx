import { Routes, Route } from 'react-router-dom';
import Projects from '../pages/Projects';
import Summary from '../pages/Summary';
import AboutMe from '../pages/AboutMe';
import ProjectDetails from '../pages/ProjectDetails';

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Summary />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Projects/:id" element={<ProjectDetails />} />
      <Route path="*" element={<Summary />} />
    </Routes>
  );
}
