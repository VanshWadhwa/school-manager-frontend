import React, { useState, useEffect } from "react";
// import useNotification from "../../components/layout/Snackbar";
import LoginIcon from "@mui/icons-material/Login";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../../features/auth/authSlice'
import { useSnackbar } from "notistack";
import Spinner from "../../components/Spinner";


const Signup = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();


  const { user, isLoading, isSuccess, message, isError } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if(isError) {
      enqueueSnackbar(message, {variant: "error"})
    }
    if(isSuccess) {
      enqueueSnackbar("School registered successfully" , {variant: "success"})
      navigate('/dashboard')
    }
  
  }, [isSuccess, message, isError])
  
  


  const submitLogin =  (e) => {
    e.preventDefault();
    const userData = {email, password, role: "school"};
    dispatch(registerUser(userData));
  }

  return (
    <Box className="bg-shapes">
      {isLoading && <>Add loader here</>}
      <Container
        component="main"
        maxWidth="sm"
        sx={{ minHeight: "90vh" }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {isLoading === false && (
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
            <Box component="form" noValidate sx={{ mt: 3 } } onSubmit={submitLogin}>
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
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="dense"
                variant="outlined"
                label="Password"
                size="small"
              />
              <TextField
                required
                fullWidth
                autoFocus
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
