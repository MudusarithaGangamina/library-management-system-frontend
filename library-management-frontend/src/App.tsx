import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ManageBooks from "./pages/ManageBooks";
import AddBook from "./pages/AddBook";
import PrivateRoute from "./middleware/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    
    <>
      <Router>
      <ToastContainer />
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<SignIn  />} />
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
