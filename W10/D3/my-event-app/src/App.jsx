import { useState } from 'react'
import { EventBasics } from './component/P1'
import { EventObject } from './component/P2'
import { PassingArguments } from './component/P3'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <EventBasics/> */}
      {/* <EventObject/> */}
      <PassingArguments/>
    </>
  )
}

export default App
