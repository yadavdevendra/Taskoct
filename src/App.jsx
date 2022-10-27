import { useCallback } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ShowDataInTable from "./components/ShowDataInTable";

function App() {

  return (
    <div className="App">
      <ComponentA  />
      <ShowDataInTable/>
    </div>
  );
}

export default App;
