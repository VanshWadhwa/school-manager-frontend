
import React from "react";
import {useState} from 'react'
import {registerUser} from '../../features/auth/authSlice'
import {useDispatch} from 'react-redux';

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
import { Link } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const onSubmit = (e) => {
    // sendNotification({
    //   msg: "Loged In",
    //   variant: "info",
    // });

    enqueueSnackbar("messge", { variant: "success" });
  };
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
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
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
  );

};

export default Login;
