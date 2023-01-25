import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

type HamburgerMenuIconProps = {
  onClick: () => void;
};

const HamburgerMenuIcon = ({
  onClick,
}: HamburgerMenuIconProps): JSX.Element => {
  return (
    <IconButton
      onClick={onClick}
      edge='end'
      color='inherit'
      aria-label='open menu'
    >
      <MenuIcon sx={{ fontSize: 50 }} />
    </IconButton>
  );
};

export default HamburgerMenuIcon;
