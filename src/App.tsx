import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminSignup from "./pages/AdminSignup";
import StudentSignup from "./pages/StudentSignup";
import AdminDashbaord from "./pages/AdminDashbaord";
import StudentDashboard from "./pages/StudentDashboard";
import { SideProvider } from "./context/SidebarContext";
import StudentStatus from "./pages/StudentStatus";
import StudentViewForm from "./pages/StudentViewForm";
import AdminViewForm from "./pages/AdminViewForm";
import StudentList from "./pages/StudentList";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <SideProvider>
      <AuthProvider>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="admin-signup" element={<AdminSignup />} />
          <Route path="student-signup" element={<StudentSignup />} />
          <Route
            path="admin-dashboard/fill-form"
            element={<AdminDashbaord />}
          />
          <Route
            path="student-dashboard/fill-form"
            element={<StudentDashboard />}
          />
          <Route
            path="student-dashboard/view-form"
            element={<StudentViewForm />}
          />
          <Route path="admin-dashboard/view-form" element={<AdminViewForm />} />
          <Route path="student-status" element={<StudentStatus />} />
          <Route path="list-of-student" element={<StudentList />} />
        </Routes>
      </AuthProvider>
    </SideProvider>
  );
}

export default App;
