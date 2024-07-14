import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { Grid } from "@mui/material";
import Header from "./common/header/Header";
import { useEffect, useState } from "react";

function Layout() {
  const [title, setTitle] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/\W/g, " ");
    setTitle(pathname);
  }, [location]);

  return (
    <Grid>
      <Navbar />
      <Header title={title} />
      <Outlet />
    </Grid>
  );
}

export default Layout;
