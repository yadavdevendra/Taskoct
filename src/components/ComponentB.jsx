import React from 'react'
import ComponentC from './ComponentC';

const ComponentB = (props) => {
        const ValueofComponentA = props.ValueofComponentA;
        const ValueofComponentB = Number(ValueofComponentA) + Number(1);
        // console.log(ValueofComponentB);
    
  return (
    <>
      <div style={{ display: "flex", textAlign: "center",border:"3px solid whitesmoke" }}>
        <h1>{ValueofComponentB}</h1>
        <h2>ComponentB</h2>
      </div>
      <div>
        <ComponentC ValueofComponentB={ValueofComponentB} />
      </div>
    </>
  );
};

export default ComponentB