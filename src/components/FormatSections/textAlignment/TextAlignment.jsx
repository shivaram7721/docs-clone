import React from "react";
import styles from "./TextAlignment.module.css";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";

export default function TextAlignment() {
  function handlePosition(element) {
    document.execCommand(element);
  }

  return (
    <div className={styles.formatContainer}>
      <FormatAlignLeftIcon
        className={styles.formatIcons}
        onClick={() => handlePosition("justifyLeft")}
      />
      <FormatAlignCenterIcon
        className={styles.formatIcons}
        onClick={() => handlePosition("justifyCenter")}
      />
      <FormatAlignRightIcon
        className={styles.formatIcons}
        onClick={() => handlePosition("justifyRight")}
      />
    </div>
  );
}
