import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { IconButton } from "@mui/material";

function Notification({ badgeColor, iconColor, badgeContent }) {
  return (
    <IconButton color={iconColor}>
      <Badge badgeContent={badgeContent} color={badgeColor}>
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}

export default Notification;
