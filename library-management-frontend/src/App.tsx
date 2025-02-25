import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ManageBooks from "./pages/ManageBooks";
import AddBook from "./pages/AddBook";
import PrivateRoute from "./middleware/PrivateRoute";
import { useEffect, useState } from "react";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    
    <>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<SignUp />} />
          

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route element={<Layout />}>
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/manage-books" element={<ManageBooks />} />
          </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
