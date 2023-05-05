import React, { useState } from "react";
import styles from "./selectZoom.module.css";
import { useRecoilState } from "recoil";
import { textEditorRefAtom } from "../../atom/atom";

export function SelectZoom() {
  const [inputRef, setInputRef] = useRecoilState(textEditorRefAtom);
  const [selectedOption, setSelectedOption] = useState("100%");
  const scale = ["100%", "50%", "75%", "90%", "100%", "125%", "150%", "200%"];

  function handleScale(e) {
    setSelectedOption(e.target.value);
    if (inputRef.current && e.target.value === "100%") {
      inputRef.current.style.transform = "scale(1,1)";
    } else if (inputRef.current && e.target.value === "150%") {
      inputRef.current.style.transform = "scale(1.5,1)";
    } else if (inputRef.current && e.target.value === "200%") {
      inputRef.current.style.transform = "scale(2,1)";
    } else if (inputRef.current && e.target.value === "50%") {
      inputRef.current.style.transform = "scale(0.65,0.65)";
    } else if (inputRef.current && e.target.value === "25%") {
      inputRef.current.style.transform = "scale(0.5,0.5)";
    } else if (inputRef.current && e.target.value === "75%") {
      inputRef.current.style.transform = "scale(0.8,1)";
    }
  }

  return (
    <>
      <select
        className={styles.box}
        value={selectedOption}
        onChange={handleScale}
      >
        {scale.map((ele) => (
          <option
            onClick={(e) => setSelectedOption(e.target.value)}
            value={ele}
          >
            {ele}
          </option>
        ))}
      </select>
    </>
  );
}
