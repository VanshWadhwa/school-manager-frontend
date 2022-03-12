import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React, { useState, useEffect, Fragment } from "react";
import LogoutIcon from "@mui/icons-material/Logout";

const Logout = () => {
  const [loading, setLoading] = useState(false);

  const submitLogout = async () => {
    
  }

  //      --------------------------------------------
  //   Commented this incase you need this stuff
  //   ------------------------------------------------
  //   const [msg, sendNotification] = useNotification();

  //   const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  //   const CLIENT_URL = process.env.REACT_APP_CLIENT_URL;

  //   useEffect(() => {
  //     if (localStorage.getItem("token") == null) {
  //       window.location.replace(`${CLIENT_URL}/login`);
  //       sendNotification({
  //         msg: "You are not loged in",
  //         variant: "info",
  //       });
  //     } else {
  //       setLoading(false);
  //     }
  //   }, []);

  //   const handleLogout = (e) => {
  //     e.preventDefault();

  //     fetch(`${SERVER_URL}/api/v1/users/auth/logout/`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Token ${localStorage.getItem("token")}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         sendNotification({
  //           msg: "Loged Out",
  //           variant: "info",
  //         });
  //         console.log(data);
  //         localStorage.clear();
  //         window.location.replace(`${CLIENT_URL}/login`);
  //       });
  //   };

  return (
    <Box className="bg-shapes">
      {loading === false && (
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
