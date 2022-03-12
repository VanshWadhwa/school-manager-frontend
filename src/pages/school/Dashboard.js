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

const Dashboard = () => {
  const [loading, setloading] = useState(false);
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
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
            Dashboard
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
                  required
                  fullWidth
                  autoFocus
                  name="email"
                  type="email"
                  margin="dense"
                  label="Email"
                  size="small"
                  id="standard-basic"
                  label="Search"
                  variant="standard"
                  maxWidth
                />
                <Divider variant="middle" />
                <Grid container spacing={1}>
                  {" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>{" "}
                  <Grid item>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={() => {}}
                    />
                  </Grid>
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
                  Class 12-A ( Sanjay Sir )
                </Typography>
                <TableContainer component={Paper}>
                  <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
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
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="right">{row.carbs}</TableCell>
                          <TableCell align="right">{row.protein}</TableCell>
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
                  label="Search"
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
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
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
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="right">{row.carbs}</TableCell>
                          <TableCell align="right">{row.protein}</TableCell>
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

          {/* </Box> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
