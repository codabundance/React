import styles from './Container.module.css'

let Container = ({children, name }) => {
    return <><div className={styles.container}>{children}</div>
    <div>{name}</div></>
}
export default Container;