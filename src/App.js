import "./App.css";
import Login from "./pages/auth/Login.js";
import Home from "./pages/Home.js";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* <Route path="invoices" element={<Invoices />} /> */}
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
