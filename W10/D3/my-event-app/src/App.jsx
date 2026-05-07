import { useState } from 'react'
import { EventBasics } from './component/P1'
import { EventObject } from './component/P2'
import { PassingArguments } from './component/P3'
import { UseCallbackEvents } from './component/P5'
import { EventDeligation } from './component/P6'
import { FormsPatterns } from './component/P7'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <EventBasics/> */}
      {/* <EventObject/> */}
      {/* <PassingArguments/> */}
      {/* <UseCallbackEvents/> */}
      {/* <EventDeligation/> */}
      <FormsPatterns/>
    </>
  )
}

export default App
