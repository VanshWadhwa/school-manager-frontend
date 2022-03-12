import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React, { useState, useEffect, Fragment } from "react";
import LogoutIcon from "@mui/icons-material/Logout";

const Logout = () => {
  const [loading, setLoading] = useState(false);

  const submitLogout = async () => {
    
  }

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
