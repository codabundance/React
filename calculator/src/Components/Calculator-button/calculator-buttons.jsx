import styles from './calculator-buttons.module.css'
let CalculatorButton = ({buttomClickHandler}) => {
    const buttonNames = ['C', '1', '2', '+','3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
    return <>
    <div id="buttons-container" className={styles.buttonsContainer}>
        {buttonNames.map(name => (
            <button key= {name} onClick={() => buttomClickHandler(name)} className={styles.button}>{name}</button>
        ))}
    </div>
    </>
}
export default CalculatorButton;