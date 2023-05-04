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
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import SubjectIcon from "@mui/icons-material/Subject";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import TagIcon from "@mui/icons-material/Tag";
import InsertPageBreakIcon from "@mui/icons-material/InsertPageBreak";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";

const menuCompStyle = {
  marginBottom: "-4px",
  marginTop: "8px",
  padding: "2px 7px",
  overflow: "hidden",
  verticalAlign: "taxt-bottom",
  textTransform: "none",
  color: "#535457",
};

export default function InsertMenu() {
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
          Insert
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
                      <ImageOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Image
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <TableChartOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Table
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <InsertChartOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Chart
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <HorizontalRuleOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Horizontal line
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <InsertEmoticonOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Emoji
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <SubjectIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Footnote
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <ViewDayIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Headers & footers
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <TagIcon sx={{ marginRight: "10px" }} style={iconStyle} />
                      Page numbers
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <InsertPageBreakIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Break
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <InsertLinkIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Link
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <AddCommentOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Comment
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <BookmarkBorderOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Bookmark
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <TocOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Table of contents
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
