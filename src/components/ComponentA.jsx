import React from 'react'
import ComponentB from './ComponentB';

const ComponentA = (props) => {
    const prieviousstate = props.count;
    const ValueofComponentA = Number(prieviousstate) + Number(1);
    // console.log(ValueofComponentA);
  return (
    <>
      <div style={{ display: "flex", textAlign: "center" }}>
        <h1>{ValueofComponentA}</h1>
        <h2>ComponentA</h2>
      </div>
      <div>
        <ComponentB ValueofComponentA={ValueofComponentA} />
      </div>
    </>
  );
}

export default ComponentA