import { Routes, Route } from "react-router";
import Layout from "./components/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import SkillsPage from "./pages/SkillsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={<HomePage name="Magzhan Kydyralin" role="Developer" />}
        />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
