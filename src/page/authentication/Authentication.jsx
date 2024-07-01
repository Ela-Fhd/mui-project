import { capitalize, Grid } from "@mui/material";
import React from "react";
import Notification from "../../components/common/notification/Notification";

function Authentication() {
  return (
    <Grid item sm={8}>
      <Notification badgeColor="error" badgeContent="5" />
    </Grid>
  );
}

export default Authentication;
