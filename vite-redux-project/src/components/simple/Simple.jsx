import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  docco,
  dracula,
  shadesOfPurple,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
const styleFont = shadesOfPurple;
import SimpleProject1 from "./SimpleProject1";
const Simple = () => {
  return (
    <>
      <h2>Projects</h2>
      <section>
        <SimpleProject1 />
      </section>
    </>
  );
};

export default Simple;
