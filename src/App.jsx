
import './App.css'

import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./component/Login.jsx";
import DashboardStaff from "./component/Staff/DashboardStaff.jsx";
import DataArsipStaff from './component/Staff/DataArsipStaff.jsx';
import LogPengajuanStaff from './component/Staff/LogPengajuanStaff.jsx';
import LogHistoryStaff from './component/Staff/logHistoryStaff.jsx';

import DashboardPimpinan from './component/Pimpinan/DashboardPimpinan.jsx';
import DashboardPetugas from './component/Petugas/DashboardPetugas.jsx';


function ProtectedRoute({ children, allowedRoles }) {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
  const userRole = sessionStorage.getItem("userRole");

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  // Jika allowedRoles didefinisikan, cek apakah user role sesuai
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    // Redirect ke dashboard sesuai role jika akses ditolak
    return <Navigate to={`/dashboard${userRole}`} />;
  }

  return children;
}

export default function App() {
  return (
    <Routes>
    
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboardStaff"
        element={
          <ProtectedRoute allowedRoles={["Staff"]}>
            <DashboardStaff />
          </ProtectedRoute>
        }
      />

      {/* Dashboard untuk Petugas */}
      <Route
        path="/dashboardPetugas"
        element={
          <ProtectedRoute allowedRoles={["Petugas"]}>
            <DashboardPetugas />
          </ProtectedRoute>
        }
      />

      {/* Dashboard untuk Pimpinan */}
      <Route
        path="/dashboardPimpinan"
        element={
          <ProtectedRoute allowedRoles={["Pimpinan"]}>
            <DashboardPimpinan />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dataArsipStaff"
        element={
          <ProtectedRoute>
            <DataArsipStaff />
          </ProtectedRoute>
        }
      />
      <Route
        path="/logPengajuanStaff"
        element={
          <ProtectedRoute>
            <LogPengajuanStaff />
          </ProtectedRoute>
        }
      />
      <Route
        path="/logHistoryStaff"
        element={
          <ProtectedRoute>
            <LogHistoryStaff />
          </ProtectedRoute>
        }
      />


      </Routes>
    
  );
}




