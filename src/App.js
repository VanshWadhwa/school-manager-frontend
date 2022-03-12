import Login from "./pages/auth/Login.js";
import Logout from "./pages/auth/Logout.js";
import Signup from "./pages/auth/Signup.js";
import SchoolDashboard from "./pages/school/SchoolDashboard.js";
import TeacherDashboard from "./pages/teacher/TeacherDashboard.js";
import alanBtn from "@alan-ai/alan-sdk-web";
import StudentDashboard from "./pages/student/StudentDashboard.js";

import { SnackbarProvider } from "notistack";

import Home from "./pages/Home.js";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import MiniDrawer from "./components/layout/MiniDrawer";
import { useEffect, useRef } from "react";

function App() {
  useEffect(() => {
    alanBtn({
      key: "d5789270056610d32f6f03d8091fb33f2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "getDashboard") {
          // Call the client code that will react to the received command
          console.log("Dashboard pe redirect");
          // navigate("/school/dashboard");
          // redirectTo("/school/dashboard");
          window.location.replace(`/school/dashboard`);

          // <Link to="/school/dashboard"></Link>;
          // navigate("/school/dashboard", { replace: true });
        } else if (commandData.command === "getProfile") {
          // Call the client code that will react to the received command
          console.log("Getting you the profile ");
          console.log("Getting Profile");

          console.log(commandData.data);
          window.location.replace(`/school/profile?name=${commandData.data}`);

          // navigate("/school/dashboard");
          // redirectTo("/school/dashboard");

          // <Link to="/school/dashboard"></Link>;
          // navigate("/school/dashboard", { replace: true });
        }
      },
    });
  }, []);

  return (
    <div className="App ">
      {/* <MiniDrawer /> */}
      <SnackbarProvider maxSnack={3}>
        <BrowserRouter>
          {/* <MiniDrawer /> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/School/Dashboard" element={<SchoolDashboard />} />
            <Route path="/teacher/Dashboard" element={<TeacherDashboard />} />
            <Route path="/student/Dashboard" element={<StudentDashboard />} />

            {/* <Route path="invoices" element={<Invoices />} /> */}
          </Routes>
          <alanBtn />
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  );
}

export default App;
