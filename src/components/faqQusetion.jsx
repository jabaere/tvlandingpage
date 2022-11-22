import React, { useState, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "../faq.css";

export const FaqQusetion = ({ question, answer }) => {
  const [arrowClicked, setArrowClicked] = useState(false);
  const answerRef = useRef();
  const asnwerChildRef = useRef();

  const arrowClick = () => {
    setArrowClicked(!arrowClicked);
    console.log(arrowClicked);
    if (!arrowClicked) {
      answerRef.current.style.height = "70px";
      asnwerChildRef.current.style.opacity = 1;
    } else {
      answerRef.current.style.height = 0;
      asnwerChildRef.current.style.opacity = 0;
    }
  };
  return (
    <div className="qusetion">
      <button className="question-1">
        {question}
        <span className="arrow" onClick={arrowClick}>
          {" "}
          {!arrowClicked ? (
            <KeyboardArrowDownIcon style={{ cursor: "pointer" }} />
          ) : (
            <KeyboardArrowUpIcon style={{ cursor: "pointer" }} />
          )}
        </span>
      </button>

      <div className="answer" ref={answerRef}>
        <div className="content" ref={asnwerChildRef}>
          {answer}
        </div>
      </div>
    </div>
  );
};
