import React, { useState } from "react";
import styles from "./ColorPicker.module.css";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";

export default function FontColorPicker() {
  const [show, setShow] = useState(false);

  function handleColor(e) {
    document.execCommand("foreColor", "", e.target.value);
  }

  return (
    <span className={styles.colorbox}>
      <FormatColorTextIcon
        className={styles.formatIcons}
        onClick={() => setShow(!show)}
      />
      {show ? (
        <>
          <input
            className={styles.inputbox}
            type="color"
            onChange={(e) => handleColor(e)}
          />
        </>
      ) : null}
    </span>
  );
}
