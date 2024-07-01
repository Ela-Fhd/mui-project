import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { Container, Grid } from "@mui/material";

function Layout() {
  return (
    <Grid container>
      <Navbar />
      <Outlet />
    </Grid>
  );
}

export default Layout;
