import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function BasicMenu({ anchorel, open, handleClose, menuItems }) {
  return (
    <div>
      <Menu anchorEl={anchorel} open={open} onClose={handleClose}>
        {menuItems.map((item, index) => {
          return <MenuItem key={item.id}>{item.title}</MenuItem>;
        })}
      </Menu>
    </div>
  );
}

export default BasicMenu;
