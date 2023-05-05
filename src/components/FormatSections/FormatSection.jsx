import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import PrintIcon from "@mui/icons-material/Print";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import { SelectZoom } from "./selectZoom";
import { FontFamily } from "./fontFamily";
import { FontSize } from "./fontSize";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

import InsertLinkIcon from "@mui/icons-material/InsertLink";
import AddCommentIcon from "@mui/icons-material/AddComment";

import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatLineSpacingIcon from "@mui/icons-material/FormatLineSpacing";
import ChecklistIcon from "@mui/icons-material/Checklist";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import FormatClearIcon from "@mui/icons-material/FormatClear";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { RxDividerVertical } from "react-icons/rx";
import styles from "./FormatSection.module.css";
import React, { useState, useRef } from "react";
import { textEditorRefAtom } from "../../atom/atom";
import { scale } from "../../constants/ConstData";

export function FormatSection() {
  const inputRef = useRef(textEditorRefAtom);
  // const [show, setShow] = useState(false);
  // const [show2, setShow2] = useState(false);
  const [scaleSize, setScaleSize] = useState("100%");

  // function handleColor(e) {
  //   document.execCommand("foreColor", "", e.target.value);
  // }

  // function handlebackgroundhighlight(e) {
  //   document.execCommand("backColor", "", e.target.value);
  // }

  // function handlePosition(element) {
  //   document.execCommand(element);
  // }

  // function handleImageOpen() {
  //   inputRef.current.click();
  // }

  // function handleFileSelect(event) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = function (event) {
  //     const img = document.createElement("img");
  //     img.src = event.target.result;
  //     img.width = 500;
  //     img.height = 500;
  //     const editor = inputRef.current;
  //     editor.focus();
  //     const selection = document.getSelection();
  //     if (selection.rangeCount === 0) return;
  //     const range = selection.getRangeAt(0);
  //     range.insertNode(img);
  //   };

  //   reader.readAsDataURL(file);
  // }

  function handleScale(e) {
    // console.log(inputRef.current);
    setScaleSize(e.target.value);
    console.log(e.target.value);
    console.log(inputRef);
    if (e.target.value === "100%") {
      inputRef.current.style.transform = "scale(1,1)";
    } else if (e.target.value === "150%") {
      inputRef.current.style.transform = "scale(1.5,1)";
    } else if (e.target.value === "200%") {
      inputRef.current.style.transform = "scale(2,1)";
    } else if (e.target.value === "50%") {
      inputRef.current.style.transform = "scale(0.65,0.65)";
    } else if (e.target.value === "25%") {
      inputRef.current.style.transform = "scale(0.5,0.5)";
    } else if (e.target.value === "75%") {
      inputRef.current.style.transform = "scale(0.8,1)";
    }
  }

  return (
    <div className={styles.formatContainer}>
      <UndoIcon className={styles.formatIcons} />
      <RedoIcon className={styles.formatIcons} />
      <PrintIcon className={styles.formatIcons} />
      <SpellcheckIcon className={styles.formatIcons} />
      <FormatColorFillIcon className={styles.formatIcons} />
      {/* <SelectZoom className={styles.formatIcons} /> */}

      <select
        className={styles.formatIcons}
        id="fontStyle"
        onChange={handleScale}
      >
        <option>{scaleSize}</option>
        {scale.map((x, i) => (
          <option key={i}>{x}</option>
        ))}
      </select>

      <RxDividerVertical className={styles.formatIcons} />
      <FontSize className={styles.formatIcons} />
      <RxDividerVertical className={styles.formatIcons} />
      <FontFamily className={styles.formatIcons} />
      <RxDividerVertical className={styles.formatIcons} />
      <RemoveIcon className={styles.formatIcons} />
      <input style={{ width: "2vw" }} type="text" />
      <AddIcon className={styles.formatIcons} />
      <RxDividerVertical className={styles.formatIcons} />
      <FormatBoldIcon className={styles.formatIcons} />
      <FormatItalicIcon className={styles.formatIcons} />
      <FormatUnderlinedIcon className={styles.formatIcons} />

      {/* <span className={styles.colorbox}>
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
      </span> */}

      {/* <span className={styles.colorbox}>
        <EditIcon
          className={styles.formatIcons}
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
      </span> */}

      <RxDividerVertical className={styles.formatIcons} />
      <InsertLinkIcon className={styles.formatIcons} />
      <AddCommentIcon className={styles.formatIcons} />
      {/* <div>
        <InsertPhotoIcon
          className={styles.formatIcons}
          onClick={handleImageOpen}
        />
        <input onChange={handleFileSelect} hidden ref={inputRef} type="file" />
      </div> */}
      <RxDividerVertical className={styles.formatIcons} />

      {/* <FormatAlignLeftIcon
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
      /> */}

      <FormatLineSpacingIcon className={styles.formatIcons} />
      <ChecklistIcon className={styles.formatIcons} />
      <ArrowDropDownIcon className={styles.formatIcons} />
      <FormatListBulletedIcon className={styles.formatIcons} />
      <ArrowDropDownIcon className={styles.formatIcons} />
      <FormatListNumberedIcon className={styles.formatIcons} />
      <ArrowDropDownIcon className={styles.formatIcons} />
      <FormatIndentDecreaseIcon className={styles.formatIcons} />
      <FormatIndentIncreaseIcon className={styles.formatIcons} />
      <FormatClearIcon className={styles.formatIcons} />
    </div>
  );
}
