import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Settings from "./pages/Settings/Settings";
import Profile from "./pages/Profile/Profile";
import Projects from "./pages/Projects/Projects";
import Courses from "./pages/Courses/Courses";
import Friends from "./pages/Friends/Friends";
import Files from "./pages/Files/Files";
import Plans from "./pages/Plans/Plans";

function App() {
  return (
    <BrowserRouter basename="/DashboardDesign">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/files" element={<Files />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
