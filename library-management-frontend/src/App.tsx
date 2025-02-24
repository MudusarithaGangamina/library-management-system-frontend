import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ManageBooks from "./pages/ManageBooks";
import AddBook from "./pages/AddBook";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="login" element={<SignIn />} />
          <Route path="register" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route element={<Layout />}>
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/manage-books" element={<ManageBooks />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
