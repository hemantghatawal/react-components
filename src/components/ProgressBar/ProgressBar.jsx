import "./ProgressBar.styles.css";

const ProgressBar = ({ progress = 25 }) => {
  return (
    <div className="progress">
      <div
        style={{
          backgroundColor: "#0d6efd",
          width: `${progress}%`,
          textAlign: "center",
          color: "white",
        }}
      >
        {progress}%{" "}
      </div>
    </div>
  );
};

export default ProgressBar;
