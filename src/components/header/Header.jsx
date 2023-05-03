import React from "react";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import Stack from "@mui/material/Stack";
import MenuListComposition from "../menus/FileMenu";
import { Colors, iconStyle } from "../../constants/Colors";
import { Button } from "@mui/material";

const iconMainStyle = {
  width: "36px",
  height: "36px",
  color: "#2684fc",
};

export default function Header() {
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Stack direction="row" alignItems={"center"} spacing={2}>
        <InsertDriveFileIcon style={iconMainStyle} />
        <Stack direction="column">
          <Stack direction="row" spacing={2}>
            <div style={{ fontSize: "18px", color: Colors.fontPrimary }}>
              Untitled document
            </div>
            <StarBorderOutlinedIcon style={iconStyle} />
            <DriveFileMoveOutlinedIcon style={iconStyle} />
          </Stack>
          <Stack direction="row">
            <MenuListComposition />
            <MenuListComposition />
            <MenuListComposition />
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems={"center"} spacing={4}>
        <CommentOutlinedIcon />
        <VideocamOutlinedIcon />
        <Button>Share</Button>
        <div>
          <img
            src="https://img.freepik.com/free-photo/young-man-with-beard-round-glasses_273609-6994.jpg?w=2000"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>
      </Stack>
    </Stack>
  );
}
