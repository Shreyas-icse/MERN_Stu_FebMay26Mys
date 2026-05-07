import { useState } from 'react'
import { EventBasics } from './component/P1'
import { EventObject } from './component/P2'
import { PassingArguments } from './component/P3'
import { UseCallbackEvents } from './component/P5'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <EventBasics/> */}
      {/* <EventObject/> */}
      {/* <PassingArguments/> */}
      <UseCallbackEvents/>
    </>
  )
}

export default App
