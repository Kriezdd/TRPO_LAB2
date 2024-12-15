import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstNum, setFirstNum] = useState(0)
  const [secondNum, setSecondNum] = useState(0)
  const [sum, setSum] = useState(0)
  const [count, setCount] = useState(0)

  const handleClickSum = () => {
    setSum(firstNum + secondNum)
  }

  const handleClickIncrement = () => {
    setCount(count + 1)
  }

  const handleClickDecrement = () => {
    setCount(count - 1)
  }

  return (
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo"/>
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo"/>
          </a>
        </div>
        <h1>trpo_lab2</h1>
        <div className="main-container">
          <div className="mini-card">
            <h2>Калькулятор</h2>
            <div className="row-container">
              <input className="calculator_input" value={firstNum} onChange={(e) => setFirstNum(Number(e.target.value))}
                     type="text"/>
              <span className="calculator_operator">+</span>
              <input className="calculator_input" value={secondNum}
                     onChange={(e) => setSecondNum(Number(e.target.value))}
                     type="text"/>
              <button className="calculator_button" onClick={handleClickSum}>
                =
              </button>
              <span className="calculator_result">{sum}</span>
            </div>
          </div>
          <div className="mini-card">
            <h2>Счётчик: {count}</h2>
            <div className="row-container">
              <button onClick={handleClickDecrement}>-</button>
              <button onClick={handleClickIncrement}>+</button>
            </div>
          </div>
          <p>
          Пустой проект для лабораторной по ТРПО
          </p>
        </div>
      </>
  )
}

export default App
