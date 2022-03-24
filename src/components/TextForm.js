import React, { useState } from "react";

export default function TextForm(props) {
  const [textData, setTextData] = useState("");

  const setTextDataHandler = (e) => {
    e.preventDefault();
    setTextData(e.target.value);
  };

  const setLowerText = () => {
    setTextData(textData.toLowerCase());
  };

  const setUpperText = () => {
    const data = [];
    const textdata1 = textData
      .trim()
      .split(" ")
      .map((data1) => {
        if (data1) {
          data.push(data1);
        } else {
          return;
        }
      });
    setTextData(data.join(" ").toUpperCase());
    console.log(textData);
  };

  const clearData = () => {
    setTextData("");
  };

  console.log(textData.split(" "));

  return (
    <div style={{ color: props.mode == "light" ? "black" : "white" }}>
      <div className="mb-3">
        <h1>{props.title}</h1>
        <textarea
          style={{ backgroundColor: props.mode === "light" ? "white" : "grey" }}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="7"
          value={textData}
          onChange={setTextDataHandler}
        ></textarea>
        <button
          className="btn btn-primary my-2 mx-2"
          type="submit"
          onClick={setUpperText}
        >
          Convert UpperCase
        </button>
        <button
          className="btn btn-primary my-2 mx-2"
          type="submit"
          onClick={setLowerText}
        >
          Convert LowerCase
        </button>
        <button
          className="btn btn-primary my-2 mx-2"
          type="submit"
          onClick={clearData}
        >
          Clear
        </button>
      </div>
      <div className="container">
        <h1 className="my-3">Your text summery is below</h1>
        <p className="container my-3">
          Your text have {textData ? textData.split(" ").length : 0} words &{" "}
          {textData.length} alphabet
        </p>
        <h2>Preview</h2>
        <p>{textData}</p>
      </div>
    </div>
  );
}
