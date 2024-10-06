import React, { useState } from "react";

export default function TextForm(props) {
  // button 1
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted To UpperCase", "success");
  };
  // button 2
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted To LowerCase", "success");

  };

  // button 3
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("All Clear", "success");

  };
  // button 4
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "success");

  };
  // button 5

  const handleExtraSpace = () => {
    let newText = text.split(/ [ ] + /);
    setText(newText.join(" "));
    props.showAlert("Text Spaces Are Removed", "success");

  };

  // handle onchange function
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className=" container my-2">
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          <b> {props.heading}</b>
        </h2>

        <textarea
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          className="form-control text-area my-3"
          placeholder="Typing here...."
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="10"
        ></textarea>
        {/* button 1  */}
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        {/* button 2 */}
        <button className="btn btn-primary mx-3 my-3 " onClick={handleLoClick}>
          Convert To Lowercase
        </button>

        {/* button 3  */}
        <button
          className="btn btn-primary mx-3 my-3 "
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>

        {/* button 4  */}
        <button className="btn btn-primary mx-3 my-3 " onClick={handleCopy}>
          Text Copy
        </button>

        {/* button 5  */}
        <button className="btn btn-primary my-3 " onClick={handleClearClick}>
          Clear All Text
        </button>
      </div>
      {/* text summary start */}
      <div className="container">
        <h3 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          <b> Your text summary</b>
        </h3>
        <div className="d-flex">
          <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
            <span>READING TIME</span>
            <p className="margin-left">{0.004 * text.split(" ").length}</p>
            <span>Mins : miniSecs</span>
          </div>
          <div
            className="mx-5"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            <span>WORDS</span>
            <p className="margin-left">{text.split(" ").length}</p>
          </div>
          <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
            <span>CHARACTERS</span>
            <p className="margin-left">{text.length}</p>
          </div>
        </div>
        {/* text summary end  */}

        {/* preview  */}
        <div
          className="pre my-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h3>
            <b>Preview</b>
          </h3>
          <p>
            {text.length > 0
              ? text
              : "Enter something in the textbox above to preview it here."}
          </p>
        </div>
      </div>
    </>
  );
}
