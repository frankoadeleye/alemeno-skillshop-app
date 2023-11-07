import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseDetails from "src/components/CourseDetails";
import StudentDashboard from "src/components/Dashboard";
import CourseListing from "src/components/CourseListing";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CourseListing />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
