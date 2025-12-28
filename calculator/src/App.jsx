import styles from './App.module.css'
import CalculatorButton from './Components/Calculator-button/calculator-buttons.jsx'
import Display from './Components/Display/display.jsx'
import { useState } from 'react';

function App() {
      let [dispValue, setDispValue] = useState("");
      let OnButtonClick = (itemValue) => {
        if(itemValue === "C")
          setDispValue("");
        else if(itemValue === "=")
        {
            let result = eval(dispValue);
            setDispValue(result);
        }
        else
        {
          let newdispValue = dispValue + itemValue;
          setDispValue(newdispValue);
        }
      }
  return(
  <>
  <div id="calculator" className={styles.calculator}>
    <Display displayValue={dispValue}></Display>
    <CalculatorButton buttomClickHandler={OnButtonClick}></CalculatorButton> 
  </div>
  </>
  )
}

export default App
