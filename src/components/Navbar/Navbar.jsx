import { Drawer } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { navbarItem } from "./navbarItem";
import { navbarStyles } from "./navbarStyles";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <Drawer sx={navbarStyles.drawer} variant="permanent" anchor="left">
      <Toolbar />
      <Divider />
      <List>
        {navbarItem.map((item, index) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={() => navigate(item.route)}>
              <ListItemIcon sx={navbarStyles.icon}>{item.icon}</ListItemIcon>
              <ListItemText sx={navbarStyles.title}>{item.title}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Navbar;
