import { useState } from 'react'

import './App.css'
import {FunctionName} from "./components/FunctionalCompOne.jsx"
import { FunctionalComponentsBasics } from './components/FunctionalComponentsBAsics.jsx'
import { ClassComponentsBasics } from './components/ClassComponentsBasics.jsx'
import { FunctionComp } from './components/FunctionalComponentsAdv.jsx'
import { ClassComponentsState } from './components/ClassComponentState.jsx'
function App() {
  

  return (
    //Fragment in react: <> </>
    <>
     {/* <FunctionName/>  */}
     {/*Component name */}
     {/* <FunctionalComponentsBasics/> */}
     {/* <ClassComponentsBasics/> */}
     {/* <FunctionComp/> */}
     <ClassComponentsState/>

    </>
  )
}

export default App
