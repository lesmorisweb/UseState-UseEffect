import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { FirstComponent } from './components/FirstCard/FistCard'
import { SecondComponent } from './components/SecondCard/SecondCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FirstComponent onChangeNumber={(receivedNumber)=> setCount(receivedNumber)}/>
      <SecondComponent number={count}/>
    </div>
  )
}

export default App
