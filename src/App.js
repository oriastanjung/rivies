import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { Login } from "./pages/LoginPage/login";
import UpdateProfilePage from "./pages/UpdateProfilePage/UpdateProfilePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/updateProfile" element={<UpdateProfilePage />} />
    </Routes>
  );
}

export default App;
