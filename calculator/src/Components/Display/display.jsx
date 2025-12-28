import styles from './display.module.css'
let Display = ({displayValue}) => {
    return (
        <>
            <input id="display" className={styles.display} type="text" value={displayValue} readOnly/>
        </>
    )
}
export default Display;