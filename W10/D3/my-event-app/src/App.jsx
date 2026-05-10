import { useState } from 'react'
import { EventBasics } from './component/P1'
import { EventObject } from './component/P2'
import { PassingArguments } from './component/P3'
import { UseCallbackEvents } from './component/P5'
import { EventDeligation } from './component/P6'
import { FormsPatterns } from './component/P7'
import { KeyBoardEvents } from './component/P8'
import { EventObj } from './component/P9'
import { Accessibility } from './component/P10'
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
      {/* <FormsPatterns/> */}
      {/* <KeyBoardEvents/> */}
      {/* <EventObj/> */}
      <Accessibility/>
    </>
  )
}

export default App
