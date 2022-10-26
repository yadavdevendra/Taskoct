import { useState } from 'react'
import './App.css'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'

function App() {
  const [count, setCount] = useState(0)
  console.log("count",count)

  return (
    <div className="App">
      <input type="number" onChange={(e) => setCount(e.target.value)} />
      <ComponentA count={count} />
    </div>
  );
}

export default App
