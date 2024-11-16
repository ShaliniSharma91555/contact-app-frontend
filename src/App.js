import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbaar from "./components/Navbaar";
import Home from "./components/Home";
import Register from "./components/Register";
import Edit from "./components/Edit";
import Details from "./components/Details";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import { Navigate, Routes, Route } from "react-router-dom";
import RefrshHandler from "./RefreshHandler";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <>
      <Navbaar />
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<PrivateRoute element={<Home />} />} />
        <Route
          exact
          path="/register"
          element={<PrivateRoute element={<Register />} />}
        />
        <Route
          exact
          path="/edit/:id"
          element={<PrivateRoute element={<Edit />} />}
        />
        <Route
          exact
          path="/view/:id"
          element={<PrivateRoute element={<Details />} />}
        />
      </Routes>
    </>
  );
}

export default App;
