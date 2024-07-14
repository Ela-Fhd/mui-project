import { Avatar, Box, IconButton, Tooltip, Typography } from "@mui/material";
import Notification from "../notification/Notification";
import CommonButton from "../commonButton/CommonButton";
import SettingsIcon from "@mui/icons-material/Settings";

function Header({ title }) {
  const styles = {
    wrapper: {
      backgroundColor: "#009be5",
      display: "flex",
      flexDirection: "column",
      width: "calc(100% - 320px)",
      padding: "10px",
      float: "right",
      gap: "15px 0",
    },
    topHeader: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "end",
      gap: "0 8px",
    },
    middleHeader: {
      display: "flex",
      justifyContent: "end",
      marginTop: "10px",
    },
    bottomHeader: {
      marginBottom: "10px",
    },
    setting: {
      color: "#fff",
      padding: "5px",
    },
    settingIcon: {
      fontSize: "35px",
      cursor: "pointer",
    },
    avatar: {
      cursor: "pointer",
    },
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.topHeader}>
        <CommonButton color="primary">Go to docs</CommonButton>
        <Notification
          badgeColor="error"
          badgeContent={5}
          sx={{ color: "white.main" }}
        />
        <Tooltip title="your profile">
          <Avatar
            alt="profile"
            src="https://mui.com/static/images/avatar/3.jpg"
            sx={styles.avatar}
          />
        </Tooltip>
      </Box>
      <Box sx={styles.middleHeader}>
        <CommonButton
          variant="outlined"
          color="primary"
          sx={{ border: "1px solid #fff" }}
        >
          web setup
        </CommonButton>
        <Box sx={styles.setting}>
          <Tooltip title="setting">
            <IconButton sx={{ color: "white.main" }}>
              <SettingsIcon sx={styles.settingIcon} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box sx={styles.bottomHeader}>
        <Typography variant="h5" sx={{ color: "#fff", fontWeight: "bold" }}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
