import React, { useState, useEffect } from "react";
// import useNotification from "../../components/layout/Snackbar";
import LoginIcon from "@mui/icons-material/Login";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);

  //   const [msg, sendNotification] = useNotification();

  //   const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  //   const CLIENT_URL = process.env.REACT_APP_CLIENT_URL;

  //   useEffect(() => {
  //     if (localStorage.getItem("token") !== null) {
  //       sendNotification({
  //         msg: "You are already Loged in",
  //         variant: "info",
  //       });
  //       window.location.replace(`${CLIENT_URL}/editor`);
  //     } else {
  //       setLoading(false);
  //     }
  //   }, []);

  //   const onSubmit = (e) => {
  //     e.preventDefault();

  //     const user = {
  //       email: email,
  //       password1: password1,
  //       password2: password2,
  //     };

  //     fetch(`${SERVER_URL}/api/v1/users/auth/register/`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(user),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.key) {
  //           localStorage.clear();
  //           localStorage.setItem("token", data.key);
  //           sendNotification({
  //             msg: "Signed Up",
  //             variant: "info",
  //           });
  //           window.location.replace(`${CLIENT_URL}/onboard`);
  //         } else {
  //           sendNotification({
  //             msg: "Wrong Credentials",
  //             variant: "error",
  //           });
  //           setEmail("");
  //           setPassword1("");
  //           setPassword2("");
  //           localStorage.clear();
  //           setErrors(true);
  //         }
  //       });
  //   };

  return (
    <Box className="bg-shapes">
      <Container
        component="main"
        maxWidth="sm"
        sx={{ minHeight: "90vh" }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {loading === false && (
          <Paper
            style={
              {
                // backgroundColor: "pink",
              }
            }
            sx={{ p: 4, m: "auto" }}
          >
            <Typography component="h1" variant="h3">
              Sign Up
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <TextField
                required
                fullWidth
                autoFocus
                name="email"
                type="email"
                value={email}
                margin="dense"
                variant="outlined"
                label="Email"
                size="small"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                required
                fullWidth
                autoFocus
                name="password1"
                type="password"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                margin="dense"
                variant="outlined"
                label="Password"
                size="small"
              />
              <TextField
                required
                fullWidth
                autoFocus
                name="password2"
                type="password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                margin="dense"
                variant="outlined"
                label="Confirm Password"
                size="small"
              />

              <br />
              <br />

              <Button
                variant="contained"
                type="submit"
                fullWidth
                endIcon={<LoginIcon />}
              >
                Sign up
              </Button>
            </Box>
            <br />

            <Divider variant="middle" />
            <br />
            <>
              <Typography component="p" variant="body2">
                Already have an account ?
                <Link to="/login">
                  <Button variant="text" to="/login">
                    Login
                  </Button>
                </Link>
              </Typography>
            </>
          </Paper>
        )}
        {/* </Box> */}
      </Container>
    </Box>
  );
};

export default Signup;
