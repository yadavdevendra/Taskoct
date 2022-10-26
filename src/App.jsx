import { useState } from 'react'
import './App.css'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ShowDataInTable from './components/ShowDataInTable'

function App() {
  const [count, setCount] = useState(0)
  console.log("count",count)

  return (
    <div className="App">
      <input type="number" onChange={(e) => setCount(e.target.value)} />
      <ComponentA count={count} />
      <ShowDataInTable />
    </div>
  );
}

export default App
