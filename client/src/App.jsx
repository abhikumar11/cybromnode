import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import Display from "./components/Display";
import Update from "./components/Update";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
import StudentData from "./components/StudentData";
import Dashboard from "./components/Dashboard";
const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="display" element={<Display/>} />
          <Route path="register" element={<Register />} />
          <Route path="insert" element={<StudentData/>} />
          <Route path="update" element={<Update />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
