import { Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import Summary from './Summary';
import AboutMe from './AboutMe';

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Summary />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes>
  );
}
