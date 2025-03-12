import { Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HomePage } from "@/pages/HomePage";
import { CoursesPage } from "@/pages/CoursesPage";
import { CourseDetailPage } from "@/pages/CourseDetailPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { CommunityPage } from "@/pages/CommunityPage";
import { AiTutorPage } from "@/pages/AiTutorPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:id" element={<CourseDetailPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/ai-tutor" element={<AiTutorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App