import React, { useState, useEffect } from "react";
import CodeBlock from "@theme/CodeBlock";

const GitHubCodeBlock = ({ 
  url, 
  language = "kotlin", 
  title = "Source Code", 
  startLine = 1, 
  endLine = null 
}) => {
  const [code, setCode] = useState("");
  
  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((text) => {
        const lines = text.split("\n"); // Split file into lines
        const selectedLines = lines.slice(startLine - 1, endLine || lines.length).join("\n"); // Extract required lines
        setCode(selectedLines);
      })
      .catch((error) => console.error("Error fetching code:", error));
  }, [url, startLine, endLine]);

  return (
    <>
      <CodeBlock language={language} title={title}>{code}</CodeBlock>
    </>
  );
};

export default GitHubCodeBlock;