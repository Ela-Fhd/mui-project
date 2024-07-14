import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

function SearchBar({ placeholder, label, onChange }) {
  const styles = {
    wrapper: {
      width: "100%",
      display: "flex",
      gap: "0 5px",
      paddingTop: "5px",
      backgroundColor: "rgba(0,0,0,0.06)",
    },
    input: {
      width: "100%",
    },
    inputIcon: {
      color: "#009be5",
    },
  };

  return (
    <Box sx={styles.wrapper} component="form" noValidate autoComplete="off">
      <TextField
        color="info"
        label={label}
        placeholder={placeholder}
        sx={styles.input}
        onChange={onChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={styles.inputIcon} />
            </InputAdornment>
          ),
        }}
        variant="standard"
        focused
      />
    </Box>
  );
}

export default SearchBar;
