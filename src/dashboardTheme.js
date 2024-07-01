import { createTheme } from "@mui/material";

export const dashboardTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          borderRadius: "8.5",
          color: "#fff",
          "&.MuiButton-contained": {
            backgroundColor: "#009be5",
            "&:hover": { backgroundColor: "#006db3" },
          },
          "&.MuiButton-outlined": {
            color: "#fff",
            backgroundColor: "fff",
            "&:hover": { backgroundColor: "transparent" },
          },
        },
      },
    },
  },
  palette: {
    primary: { main: "#bada55" },
  },
});
