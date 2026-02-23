import { useState } from "react";
import ChipInputBar from "./ChipInputBar";
import ChipsContainer from "./ChipsContainer";
import "./ChipsInput.styles.css";

export default function ChipsInput() {
  const [chips, setChips] = useState([]);
  const [chipInput, setChipInput] = useState("");
  console.log("chips =>", chips);

  return (
    <div className="App">
      <h1>Chips Input</h1>
      <ChipInputBar
        chipInput={chipInput}
        setChipInput={setChipInput}
        setChips={setChips}
      />
      <ChipsContainer chips={chips} setChips={setChips} />
    </div>
  );
}
