import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = (props) => {

  return (
    <>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          border: "3px solid whitesmoke",
        }}
      >
        <h1>{Number(props.count)+2}</h1>
        <h2>ComponentB</h2>
      </div>
      <div>
        <ComponentC count={props.count} />
      </div>
    </>
  );
};

export default ComponentB;
