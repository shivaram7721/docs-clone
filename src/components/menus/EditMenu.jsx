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
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import ContentPasteRoundedIcon from "@mui/icons-material/ContentPasteRounded";
import SelectAllOutlinedIcon from "@mui/icons-material/SelectAllOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FindReplaceIcon from "@mui/icons-material/FindReplace";

const menuCompStyle = {
  marginBottom: "-4px",
  marginTop: "8px",
  padding: "2px 7px",
  overflow: "hidden",
  verticalAlign: "taxt-bottom",
  textTransform: "none",
  color: "#535457",
};

export default function EditMenu() {
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

  // return focus to the button when we transitioned from !open -> open
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
          Edit
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
                      <UndoIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Undo
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <RedoIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Redo
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ContentCutOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Cut
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ContentCopyRoundedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Copy
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <ContentPasteRoundedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Paste
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <SelectAllOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Select all
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <DeleteOutlineOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Delete
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <FindReplaceIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Find and replace
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
