import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./ColorPicker.module.css";

export default function BackgroundColorPicker() {
  const [show2, setShow2] = useState(false);

  function handlebackgroundhighlight(e) {
    document.execCommand("backColor", "", e.target.value);
  }

  return (
    <span className={styles.colorbox}>
      <EditIcon
        // className={styles.formatIcons}
        onClick={() => setShow2(!show2)}
      />
      {show2 ? (
        <>
          <input
            className={styles.inputbox}
            type="color"
            onChange={(e) => handlebackgroundhighlight(e)}
          />
        </>
      ) : null}
    </span>
  );
}
