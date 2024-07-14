import { Box, Typography } from "@mui/material";
import BasicCard from "../../components/common/BasicCard/BasicCard";
import SearchBar from "../../components/common/SearchBar/SearchBar";

function Authentication() {
  const styles = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      width: "calc(100% - 320px)",
      padding: "10px",
      float: "right",
      gap: "15px 0",
    },
  };

  const searchBar = () => {
    const handleChange = (val) => console.log(val);

    return (
      <SearchBar
        placeholder="Search by emailAddress , userId , uuid..."
        label="SearchBar"
        onChange={(e) => handleChange(e.target.value)}
      />
    );
  };

  const getContent = () => {
    return (
      <Typography
        align="center"
        sx={{ color: "rgba(0,0,0,0.5)", margin: "40px 16px" }}
      >
        No information for this page
      </Typography>
    );
  };

  return (
    <Box sx={styles.wrapper}>
      <BasicCard content={getContent()} header={searchBar()} />
    </Box>
  );
}

export default Authentication;
