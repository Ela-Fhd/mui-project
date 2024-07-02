import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

function Notification({ badgeColor, iconColor, badgeContent }) {
  const newNotificationMsg = `you have ${badgeContent} new notifications`;
  const noNotificationMsg = "you dont have new notification!";

  return (
    <Tooltip
      title={badgeContent ? newNotificationMsg : noNotificationMsg}
      placement="bottom"
    >
      <IconButton color={iconColor}>
        <Badge badgeContent={badgeContent} color={badgeColor}>
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
}

export default Notification;
