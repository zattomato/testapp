import { useState } from 'react'
import './App.css'

function App() {
  const [randomNum, setRandomNum] = useState(null)

  async function fetchNumber() {
    try {
      const response = await fetch('http://localhost:3000/number');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      setRandomNum(data.randomNumber);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  return (
    <>
      <h1>Test Application</h1>
      <p>Making a test application to containerize a React Frontend and Express Backend.</p>
      <div className="card">
        <button onClick={fetchNumber}>
          Generate
        </button>
      </div>
      <p className="read-the-docs">
        Random rumber is: {randomNum}
      </p>
    </>
  )
}

export default App
