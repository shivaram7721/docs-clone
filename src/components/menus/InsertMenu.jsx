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
import { MenuComponent } from "./localComponents/MenuComponent";

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
                    {/* {iconData.map((ele) => (
                      <MenuComponent Icon={ele.Icon} title={ele.title} />
                    ))} */}

                    <MenuComponent Icon={ImageOutlinedIcon} title="Image" />
                    <MenuComponent
                      Icon={TableChartOutlinedIcon}
                      title="Table"
                    />
                    <MenuComponent
                      Icon={InsertChartOutlinedIcon}
                      title="Chart"
                    />
                    <MenuComponent
                      Icon={HorizontalRuleOutlinedIcon}
                      title="Horizontal line"
                    />
                    <MenuComponent
                      Icon={InsertEmoticonOutlinedIcon}
                      title="Emoji"
                    />
                    <MenuComponent Icon={SubjectIcon} title="Footnote" />
                    <MenuComponent
                      Icon={ViewDayIcon}
                      title="Headers & footers"
                    />
                    <MenuComponent Icon={TagIcon} title="Page numbers" />
                    <MenuComponent Icon={InsertPageBreakIcon} title="Break" />
                    <MenuComponent Icon={InsertLinkIcon} title="Link" />
                    <MenuComponent
                      Icon={AddCommentOutlinedIcon}
                      title="Comment"
                    />
                    <MenuComponent
                      Icon={BookmarkBorderOutlinedIcon}
                      title="Bookmark"
                    />
                    <MenuComponent
                      Icon={TocOutlinedIcon}
                      title="Table of contents"
                    />
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
