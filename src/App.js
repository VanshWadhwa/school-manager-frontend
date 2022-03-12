import Login from "./pages/auth/Login.js";
import Logout from "./pages/auth/Logout.js";
import Signup from "./pages/auth/Signup.js";

import Home from "./pages/Home.js";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MiniDrawer from "./components/layout/MiniDrawer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <MiniDrawer /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />

          {/* <Route path="invoices" element={<Invoices />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
