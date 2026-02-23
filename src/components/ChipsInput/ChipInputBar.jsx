const ChipInputBar = ({ chipInput, setChipInput, setChips }) => {
  return (
    <input
      type="text"
      className="chips-input"
      placeholder="Enter Chip Input"
      value={chipInput}
      onChange={(e) => {
        setChipInput(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          console.log("Enter pressed:", e.target.value);
          if (e.target.value.trim()) {
            setChips((chips) => [...chips, e.target.value]);
          }
          setChipInput("");
        }
      }}
    />
  );
};

export default ChipInputBar;
