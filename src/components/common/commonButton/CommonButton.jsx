import { Button } from "@mui/material";

function CommonButton({ children, color, variant, disabled, size, sx }) {
  return (
    <Button
      variant={variant}
      color={color}
      disabled={disabled}
      size={size}
      sx={sx}
    >
      {children}
    </Button>
  );
}

export default CommonButton;
