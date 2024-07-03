import { Avatar, Box } from "@mui/material";
import Notification from "../notification/Notification";
import CommonButton from "../commonButton/CommonButton";
function Header({ title }) {
  const styles = {
    wrapper: {
      backgroundColor: "#009be5",
    },
  };

  return (
    <Box sx={styles.wrapper}>
      <Notification badgeColor="error" badgeContent={5} />
      <CommonButton variant="outlined" color="primary">
        Go to docs
      </CommonButton>
      <Avatar alt="profile" src="https://mui.com/static/images/avatar/3.jpg" />

      {title}
    </Box>
  );
}

export default Header;
