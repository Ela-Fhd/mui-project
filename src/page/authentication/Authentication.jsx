import { capitalize, Grid } from "@mui/material";
import React from "react";
import CommonButton from "../../components/common/commonButton/CommonButton";

function Authentication() {
  return (
    <Grid item sm={8}>
      <CommonButton variant="contained" size="large">
        view profile
      </CommonButton>
      <CommonButton variant="outlined" size="large">
        view profile
      </CommonButton>
    </Grid>
  );
}

export default Authentication;
