import React from "react";
import Box from "@mui/material/Box";
import "./textEditor.css";
import { textEditorRefAtom } from "../../atom/atom";

const TextEditor = () => {
  return (
    <section className="texteditor___container">
      <Box
        ref={textEditorRefAtom}
        className="container"
        contentEditable
        // height={"100vh"}
        // width={"100vw"}
      ></Box>
    </section>
  );
};

export default TextEditor;
