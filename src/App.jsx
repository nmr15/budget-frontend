import { useState } from 'react'
import './App.css'

function App() {
  const [item, setItem] = useState({
    title: '',
    username: 'testdummy',
    budget: '',
    expenses: [],
  });
  const [msg, setMsg] = useState('');

  return (
    <>
      {/* Add item */}
      <div>
        <h3>Enter title and amount</h3>
        <form>
          <input type="text" name="title" placeholder="Budget title" />
          <input type="number" name="budget" placeholder="Budget amount"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
