import { Routes, Route } from "react-router";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import HomePage from "../pages/HomePage.tsx";
import SkillsPage from "../pages/SkillsPage.tsx";

export default function App() {
  return (
    <>
      <Header name="Magzhan Kydyralin" />
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage name="Magzhan Kydyralin" role="Developer" />}
          />
          <Route path="/skills" element={<SkillsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
