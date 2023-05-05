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
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import EditIcon from "@mui/icons-material/Edit";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import AddCommentIcon from "@mui/icons-material/AddComment";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
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
import { useRef } from "react";

export function FormatSection() {
  const inputRef = useRef(null);

  function handleImageOpen() {
    inputRef.current.click();
  }
  function captureImage(event) {
    if (event.target.files[0]) {
      console.log(event.target.files[0]);
      document.execCommand(
        "insertImage",
        "",
        URL.createObjectURL(event.target.files[0])
      );
    }
  }

  return (
    <div className={styles.formatContainer}>
      <UndoIcon className={styles.formatIcons} />
      <RedoIcon className={styles.formatIcons} />
      <PrintIcon className={styles.formatIcons} />
      <SpellcheckIcon className={styles.formatIcons} />
      <FormatColorFillIcon className={styles.formatIcons} />
      <SelectZoom className={styles.formatIcons} />
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
      <FormatColorTextIcon className={styles.formatIcons} />
      <EditIcon className={styles.formatIcons} />
      <RxDividerVertical className={styles.formatIcons} />
      <InsertLinkIcon className={styles.formatIcons} />
      <AddCommentIcon className={styles.formatIcons} />
      <span>
        <InsertPhotoIcon
          className={styles.formatIcons}
          onClick={handleImageOpen}
        />
        <input onChange={captureImage} hidden ref={inputRef} type="file" />
      </span>
      <RxDividerVertical className={styles.formatIcons} />
      <FormatAlignLeftIcon className={styles.formatIcons} />
      <ArrowDropDownIcon className={styles.formatIcons} />
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
