import { useState } from 'react'
import './App.css';
import Janelinha from './Janelinha';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Janelinha />
    </div>
  )
}

export default App
