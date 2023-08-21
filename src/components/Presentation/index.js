import styles from "./Presentation.module.css"
function Presentation() {
    return (
        <div className={styles.container}>
            <h1 className={styles.name}>Eu sou o Guilherme Schilling</h1>
            <h2 className={styles.dev}>WEB DEVELOPER</h2>
            <h3 className={styles.age}>Tenho 20 anos e muita vontade de aprender!</h3>
        </div>
    )
}

export default Presentation