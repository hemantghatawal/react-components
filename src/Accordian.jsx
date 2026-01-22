import { useState } from "react";

const accordianDefault = { a: 0, b: 0, c: 0 };
export default function Accordion() {
  const [accordianState, setAccordianState] = useState(accordianDefault);
  console.log("accordianState =>", accordianState);
  return (
    <div>
      <div>
        <div onClick={() => setAccordianState((s) => ({ ...s, a: !s.a }))}>
          {" "}
          HTML{" "}
          <span
            aria-hidden={true}
            className={`accordion-icon ${!accordianState.a ? "accordion-icon--rotated" : ""} `}
          />
        </div>
        <div className={` ${accordianState.a ? "show" : "hide"} `}>
          The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser.
        </div>
      </div>
      <div>
        <div onClick={() => setAccordianState((s) => ({ ...s, b: !s.b }))}>
          CSS <span aria-hidden={true} className={`accordion-icon ${!accordianState.a ? "accordion-icon--rotated" : ""} `} />
        </div>
        <div>
          Cascading Style Sheets is a style sheet language used for describing
          the presentation of a document written in a markup language such as
          HTML or XML.
        </div>
      </div>
      <div>
        <div onClick={() => setAccordianState((s) => ({ ...s, c: !s.c }))}>
          JavaScript <span aria-hidden={true} className={`accordion-icon ${!accordianState.a ? "accordion-icon--rotated" : ""} `} />
        </div>
        <div>
          JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS.
        </div>
      </div>
    </div>
  );
}
