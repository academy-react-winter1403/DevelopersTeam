import React, { useEffect, useRef } from "react";
import edjsHTML from "editorjs-html";

const Editor = ({ describe }) => {
  const ref1 = useRef();
  useEffect(() => {
    const edjsParser = edjsHTML();
    const HTML = edjsParser.parse(JSON.parse(describe));
    console.log(HTML);
    ref1.current.innerHTML=HTML
    // ref1.current.focus();
    
  }, []);
// ref1.current.focus();
  return <>
  
  <div ref={ref1}></div>
  
  </>;
};

export default Editor;
