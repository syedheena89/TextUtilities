import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText("You have clicked on to the handle on click here " + text);
    let newText = text.toUpperCase(text);
    setText(newText);
    props.showAlert("Converted to upper case", "Success");
  };
  const handleLoClick = () => {
    setText("You have clicked on to the handle on click here " + text);
    let newText = text.toLowerCase(text);
    setText(newText);
    props.showAlert("Converted to upper case", "Success");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleUClickToClear = () => {
    setText(" ");
    props.showAlert("Text cleared", "Success");
  };
  const handleCopy = () => {
    var text = document.getElementById("my-Box");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to the clipboard", "success");
  };
  const handleExtraSpaces = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };
  return (
    <>
      <div
        className="container my-2"
        style={{
          backgroundColor: props.mode === "dark" ? "#042743" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="my-Box"
            rows="8"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleChange}
          ></textarea>
          <button className="btn btn-primary mt-3 mx-1" onClick={handleUpClick}>
            ConvertToUpperCase
          </button>
          <button className="btn btn-primary mt-3 mx-1" onClick={handleLoClick}>
            ConvertToLowerCase
          </button>
          <button
            className="btn btn-primary mt-3 mx-1"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button className="btn btn-primary mt-3 mx-1" onClick={handleCopy}>
            Copy Text
          </button>

          <button
            className="btn btn-primary mt-3 mx-1"
            onClick={handleUClickToClear}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h6>Your Text Summary</h6>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>

        <h3>Text Preview</h3>
        <p className="preview">{text}</p>
      </div>
    </>
  );
}
