import { useState } from 'react'
import { Outlet } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '56px'}}>
        <h2>Household Expenses</h2>
        <div style={{ backgroundColor: '#FF7F50', borderRadius: '50%', padding: '3px', cursor: 'pointer'}}>
          <div style={{ backgroundColor: '#008080', borderRadius: '50%', padding: '12px'}}>MB</div>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default App
