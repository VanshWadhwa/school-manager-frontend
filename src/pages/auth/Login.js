import React from "react";
import { useState, useEffect } from "react";
import { registerUser } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useSnackbar } from "notistack";

import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../../features/auth/authSlice";
import MiniDrawer from "../../components/layout/MiniDrawer";


const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, isLoading, isSuccess, message, isError } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      enqueueSnackbar(message, { variant: "error" });
    }
    if (isSuccess) {
        navigate("/school/dashboard");
      
    }
  }, [isSuccess, message, isError]);

  const submitLogin = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(loginUser(userData));
  };

  return (
    <>
      {/* <MiniDrawer /> */}
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
                Login
              </Typography>
              <Box
                component="form"
                noValidate
                sx={{ mt: 3 }}
                onSubmit={submitLogin}
              >
                <TextField
                  required
                  fullWidth
                  autoFocus
                  name="email"
                  type="email"
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
                  name="password"
                  type="password"
                  margin="dense"
                  variant="outlined"
                  label="Password"
                  size="small"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <br />

                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  endIcon={<LoginIcon />}
                >
                  Login
                </Button>
              </Box>
              <br />

              <Divider variant="middle" />
              <br />
              <>
                <Typography component="p" variant="body2">
                  Don't have an account?
                  <Link to="/signup">
                    <Button variant="text" to="/signup">
                      Sign Up
                    </Button>
                  </Link>
                </Typography>
              </>
            </Paper>
          )}
          {/* </Box> */}
        </Container>
      </Box>
    </>
  );
};

export default Login;
