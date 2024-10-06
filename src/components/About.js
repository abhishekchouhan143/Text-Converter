import React, { useState } from "react";

export default function About(props) {
  // useState function
  const [myStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "grey" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h3 className="my-3">
          <b>About Us</b>
        </h3>
        {/* accordion 1 */}
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                style={{
                  backgroundColor: props.mode === "dark" ? "grey" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <h5>Lowercase to uppercase converter</h5>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body fs-5" style={myStyle}>
                Alternatively, you can use our tool to convert text from
                lowercase to uppercase by clicking the “UPPER” button. You can
                also use<code className="color-blue fs-5"> this tool </code> to do it automatically.
              </div>
            </div>
          </div>

          {/* accordion 2 */}

          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                style={{
                  backgroundColor: props.mode === "dark" ? "grey" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <h5>Uppercase to lowercase converter</h5>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body fs-5" style={myStyle}>
                If you left caps lock on accidentally, you can quickly convert
                your title from uppercase to lowercase by selecting the “lower”
                button above. This will unCapitalize your text. You can also use
                <code className="color-blue fs-5"> this tool </code>to do it automatically.
              </div>
            </div>
          </div>

          {/* accordion 3 */}

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                style={{
                  backgroundColor: props.mode === "dark" ? "grey" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <h5>Remove Extra Spaces</h5>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body fs-5"  style={myStyle}>
                Alternatively, you can use our tool to remove extra spaces from
                the sentences to you write in the text area so click “REMOVE
                EXTRA SPACES” button. You can also use<code className="color-blue fs-5"> this tool </code>
                to do it automatically.
              </div>
            </div>
          </div>
          {/* accordion 4 */}

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                style={{
                  backgroundColor: props.mode === "dark" ? "grey" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <h5>Copy Text</h5>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body fs-5" style={myStyle}>
                Alternatively, you can use our tool to copy text from the
                sentences to you write in the text area so click “COPY TEXT”
                button. You can also use<code className="color-blue fs-5"> this tool </code>
                to do it automatically.
              </div>
            </div>
          </div>
          {/* accordion 5 */}

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                style={{
                  backgroundColor: props.mode === "dark" ? "grey" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <h5>Clear All Text</h5>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body fs-5" style={myStyle}>
                Alternatively, you can use our tool to clear all text from the
                sentences to you write in the text area so click “CLEAR ALL
                TEXT” button. You can also use<code className="color-blue fs-5"> this tool </code>
                to do it automatically.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
