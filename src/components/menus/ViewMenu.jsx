import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { iconStyle } from "../../constants/Colors";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";

const menuCompStyle = {
  marginBottom: "-4px",
  marginTop: "8px",
  padding: "2px 7px",
  overflow: "hidden",
  verticalAlign: "taxt-bottom",
  textTransform: "none",
  color: "#535457",
};

export default function ViewMenu() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          style={menuCompStyle}
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          View
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper square elevation={3}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    sx={{ width: "20rem" }}
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>
                      <CreateOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Mode
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <DoneOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Show prite layout
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <DoneOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Show ruler
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <DoneOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Show outline
                    </MenuItem>

                    <MenuItem onClick={handleClose} sx={{ marginLeft: "30px" }}>
                      Show equation toolbar
                    </MenuItem>

                    <MenuItem onClick={handleClose} sx={{ marginLeft: "30px" }}>
                      Show non-printing characters
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <FullscreenOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Full screen
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}

// function MenuItem({onClick , iconData, iconName}) {
//   return (
//     <MenuItem onClick={onClick}>
//       <{iconData}
//         sx={{ marginRight: "10px" }}
//         style={iconStyle}
//       />
//       {iconName}
//     </MenuItem>
//   );
// }
