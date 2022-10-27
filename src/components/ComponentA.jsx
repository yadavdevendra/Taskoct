import React, { useState } from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <input
          type="number"
          placeholder="0"
          onChange={(e) => setCount(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          border: "3px solid whitesmoke",
        }}
      >
        <h1>{Number(count) + 1}</h1>
        <h2>ComponentA</h2>
      </div>
      <div>
        <ComponentB count={count} />
      </div>
    </>
  );
};

export default ComponentA;
