import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import Display from "./components/Display";
import Update from "./components/Update";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="display" element={<PrivateRoute><Display/></PrivateRoute>} />
          <Route path="register" element={<Register />} />
          <Route path="update" element={<Update />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
