import React from "react";
import Header from "./components/header/Header";
import TextEditor from "./components/texteditor/TextEditor";
import { Actions } from "./components/FormatSections/Actions";

export default function App() {
  return (
    <>
      <Header />
      <Actions />
      <TextEditor />
    </>
  );
}
