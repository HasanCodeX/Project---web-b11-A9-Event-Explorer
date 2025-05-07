import { Routes, Route } from "react-router-dom";
import PrivateRoute from "..//routes/PrivateRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import About from "../pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/about"
        element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
