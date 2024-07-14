import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import BasicMenu from "../basicMenu/BasicMenu";

function Notification({ badgeColor, iconColor, sx }) {
  const [anchorel, setAnchorel] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (event) => {
    setAnchorel(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorel(null);
    setOpen(false);
  };

  const notifications = [
    { id: 0, title: "please complete your profile" },
    { id: 1, title: "your email verified!" },
    { id: 2, title: "your phone number should edit" },
  ];

  const newNotificationMsg = `you have ${notifications.length} new notifications`;
  const noNotificationMsg = "you dont have new notification!";

  return (
    <>
      <Tooltip
        title={notifications.length ? newNotificationMsg : noNotificationMsg}
        placement="bottom"
      >
        <IconButton
          color={iconColor}
          sx={sx}
          onClick={notifications.length ? handleOpen : null}
          anchorel={anchorel}
        >
          <Badge badgeContent={notifications.length} color={badgeColor}>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu
        open={open}
        anchorel={anchorel}
        handleClose={handleClose}
        menuItems={notifications}
      />
    </>
  );
}

export default Notification;
