import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import EditProfile from "./pages/EditProfile";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
