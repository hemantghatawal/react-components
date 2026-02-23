const ChipsContainer = ({ chips, setChips }) => {
  return (
    <div className="chips-container">
      {chips.length > 0 &&
        chips.map((chip, index) => (
          <span className="chip" key={index}>
            {chip}{" "}
            <button
              onClick={() => {
                setChips((prev) => prev.filter((_, i) => i !== index));
              }}
              className="cross"
            >
              X
            </button>
          </span>
        ))}
    </div>
  );
};

export default ChipsContainer;
