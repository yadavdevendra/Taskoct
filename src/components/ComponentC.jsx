import React from 'react'

const ComponentC = (props) => {
       const ValueofComponentB = props.ValueofComponentB;
       const ValueofComponentC = Number(ValueofComponentB) + Number(1);
    //    console.log(ValueofComponentC);
  return (
    <div style={{ display: "flex", textAlign: "center" }}>
      <h1>{ValueofComponentC}</h1>
      <h2>ComponentC</h2>
    </div>
  );
};

export default ComponentC