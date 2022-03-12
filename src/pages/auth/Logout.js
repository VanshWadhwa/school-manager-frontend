import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React, { useState, useEffect, Fragment } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser, reset} from '../../features/auth/authSlice'
import { useNavigate } from "react-router-dom";


const Logout = () => {

  const dispatch  = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isSuccess, message, isError } = useSelector(
    (state) => state.auth
  );

  const submitLogout = async () => {
    dispatch(logoutUser())
    dispatch(reset());
    navigate("/");
  }

  return (
    <Box className="bg-shapes">
      {isLoading === false && (
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
              <Typography component="h1" variant="h5">
                Are You sure you want to logout?
              </Typography>
              <Typography component="span" variant="body2">
                You will need to login again
              </Typography>
              <br />
              <br />
              <Button variant="contained" fullWidth endIcon={<LogoutIcon />} onClick={submitLogout}>
                Logout
              </Button>
            </Paper>
          )}
          {/* </Box> */}
        </Container>
      )}
    </Box>
  );
};

export default Logout;
