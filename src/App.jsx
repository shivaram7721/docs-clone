
import React from "react";
import Header from "./components/header/Header";
import { FormatSection } from "./components/FormatSections/FormatSection";
import TextEditor from "./components/texteditor/TextEditor";

export default function App() {
  return (
    <>
      <Header />
      <FormatSection />
      <TextEditor />
    </>
  );
}
