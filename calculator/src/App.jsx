import styles from './App.module.css'
import CalculatorButton from './Components/Calculator-button/calculator-buttons.jsx'
import Display from './Components/Display/display.jsx'

function App() {
  
  return(
  <>
  <div id="calculator" className={styles.calculator}>
    <Display></Display>
    <CalculatorButton></CalculatorButton> 
  </div>
  </>
  )
}

export default App
