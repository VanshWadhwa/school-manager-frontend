import {
  Button,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import React, { useState } from "react";
// import {registerUser} from '../../features/auth/authSlice'
import { useDispatch } from "react-redux";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitLogin = async () => {
    
  }

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
            <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={submitLogin}>
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
                onChange={(e)=> setEmail(e.target.value) }
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
                onChange={(e)=> setPassword(e.target.value) }
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
