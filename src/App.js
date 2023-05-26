import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, CoursesPage } from "./Pages";

export default function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
