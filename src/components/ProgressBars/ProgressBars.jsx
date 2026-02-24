import { useState } from "react";
import "./ProgressBars.styles.css"


export default function ProgressBars() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Add</button>

      {[...Array(count)].map((_, index) => (
        <div key={index} className="progress-container">
          <div className="progress-bar"> </div>
        </div>
      ))}
    </div>
  );
}
