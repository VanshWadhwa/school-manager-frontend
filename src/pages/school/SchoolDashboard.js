import {
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useSnackbar } from "notistack";
import Stack from "@mui/material/Stack";

import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import MiniDrawer from "../../components/layout/MiniDrawer";

const SchoolDashboard = () => {
  const [loading, setloading] = useState(false);
  function createData(name, subject, role) {
    return { name, subject, role };
  }

  const classes = [
    "1 - A",
    "1 - B",
    "2 - A",
    "2 - B",
    "3 - A",
    "3 - B",
    "4 - A",
    "4 - B",
    "4 - A",
    "4 - B",
    "5 - A",
    "5 - B",
    "6 - A",
    "6 - B",
    "7 - A",
    "7 - B",
    "8 - A",
    "8 - B",
    "9 - A",
    "9 - B",
    "10 - A",
    "10 - B",
    "11 - A",
    "11 - B",
    "12 - A",
    "12 - b",
  ];

  const students = [
    {
      name: "saifullah rahman",
      rollNumber: "1",
      enrollNumber: "12456",
      dob: "22/1/2002",
      phoneNumber: "7841516541",
    },
    {
      name: "Saif",
      rollNumber: "2",
      enrollNumber: "54654",
      dob: "1/5/2002",
      phoneNumber: "785465345",
    },
    {
      name: "Devesh",
      rollNumber: "3",
      enrollNumber: "56465435",
      dob: "24/5/2001",
      phoneNumber: "988621212",
    },
    {
      name: "Vansh",
      rollNumber: "3",
      enrollNumber: "564654",
      dob: "12/12/2002",
      phoneNumber: "7841516541",
    },
    {
      name: "Rajib Mondal",
      rollNumber: "1",
      enrollNumber: "12456",
      dob: "22/1/2002",
      phoneNumber: "7841516541",
    },
    {
      name: "Saif",
      rollNumber: "2",
      enrollNumber: "54654",
      dob: "1/5/2002",
      phoneNumber: "785465345",
    },
    {
      name: "Devesh",
      rollNumber: "3",
      enrollNumber: "56465435",
      dob: "24/5/2001",
      phoneNumber: "988621212",
    },
    {
      name: "Vansh",
      rollNumber: "3",
      enrollNumber: "564654",
      dob: "12/12/2002",
      phoneNumber: "7841516541",
    },
  ];

  const rows = [
    createData("Jaya", "Hindi", "Class Teacher"),
    createData("Reema", "English", "-"),
    createData("Sushma", "Maths", "-"),
    createData("Reekha", "Science", "-"),
  ];
  return (
    <React.Fragment>
      <MiniDrawer />
      <Box className="bg-shapes">
        <Container
          maxWidth="lg"
          sx={{ minHeight: "90vh" }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Grid container component="main">
            <Typography component="h1" variant="h3">
              SchoolDashboard
            </Typography>
            <Grid item lg={12}>
              <Paper
                sx={{
                  m: 2,
                }}
              >
                <Container
                  sx={{
                    p: 1,
                  }}
                >
                  {" "}
                  <TextField
                    fullWidth
                    autoFocus
                    name="email"
                    type="email"
                    margin="dense"
                    label="Search class"
                    size="small"
                    id="standard-basic"
                    variant="standard"
                    maxWidth
                  />
                  <Grid
                    container
                    spacing={1}
                    sx={{
                      my: 1,
                    }}
                  >
                    {" "}
                    {classes.map((individualClass) => {
                      return (
                        <Grid item>
                          <Chip
                            label={individualClass}
                            variant="outlined"
                            onClick={() => {}}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </Container>
              </Paper>
            </Grid>

            <Grid item lg={6}>
              <Paper
                sx={{
                  m: 2,
                }}
              >
                <Container
                  sx={{
                    p: 1,
                  }}
                >
                  {" "}
                  <Typography component="h6" variant="h6">
                    Teachers of 12-A
                  </Typography>
                  <TableContainer component={Paper}>
                    <Table
                      // sx={{ minWidth: 650 }}
                      size="small"
                      aria-label="a dense table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell align="right">Name</TableCell>
                          <TableCell align="right">Subject</TableCell>
                          <TableCell align="right">Other Role</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.subject}</TableCell>
                            <TableCell align="right">{row.role}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Container>
              </Paper>
            </Grid>
            <Grid item lg={6}>
              <Paper
                sx={{
                  m: 2,
                }}
              >
                <Container
                  sx={{
                    p: 1,
                  }}
                >
                  {" "}
                  <Typography component="h6" variant="h6">
                    Students of 12 A
                  </Typography>
                  <TextField
                    required
                    fullWidth
                    autoFocus
                    name="email"
                    type="email"
                    margin="dense"
                    label="Email"
                    size="small"
                    id="standard-basic"
                    variant="standard"
                    maxWidth
                  />
                  <Divider variant="middle" />
                  <TableContainer component={Paper}>
                    <Table
                      sx={{ minWidth: 650 }}
                      size="small"
                      aria-label="a dense table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell align="right">Roll Number</TableCell>
                          <TableCell align="right">Enroll Number</TableCell>
                          <TableCell align="right">DOB</TableCell>
                          <TableCell align="right">Phone Number</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {students.map((student) => (
                          <TableRow
                            key={student.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              <Link to="/student/dashboard">
                              {student.name}
                              </Link>
                            </TableCell>
                            <TableCell align="right">
                              {student.rollNumber}
                            </TableCell>
                            <TableCell align="right">
                              {student.enrollNumber}
                            </TableCell>
                            <TableCell align="right">{student.dob}</TableCell>
                            <TableCell align="right">
                              {student.phoneNumber}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Container>
              </Paper>
            </Grid>

            <br />

            <Divider variant="middle" />
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default SchoolDashboard;
