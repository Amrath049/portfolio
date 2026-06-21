import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import ProjectsListPage from "./components/ProjectsListPage";
import ProjectDetailPage from "./components/ProjectDetailPage";

/** Scrolls to a #section on hash navigation, otherwise to the top of a new page. */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        requestAnimationFrame(() =>
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        );
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <ScrollManager />
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsListPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
