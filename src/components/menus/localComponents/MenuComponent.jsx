import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { iconStyle } from "../../../constants/Colors";

export function MenuComponent({ onClick, Icon, title }) {
  return (
    <MenuItem onClick={onClick}>
      <Icon sx={{ marginRight: "10px" }} style={iconStyle} />
      {title}
    </MenuItem>
  );
}
