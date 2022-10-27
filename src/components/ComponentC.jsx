import React from "react";
import ShowDataInTable from "./ShowDataInTable";

const ComponentC = (props) => {
  return (
      <div
        style={{
          display: "flex",
          textAlign: "center",
          border: "3px solid whitesmoke",
        }}
      >
        <h1>{Number(props.count)+3}</h1>
        <h2>ComponentC</h2>
      </div>
     
  );
};

export default ComponentC;
