import styles from "./Skills.module.css"

function Skills() {
    return (
        <div className={styles.container}>

            <h1 className={styles.title}>Tecnologias</h1>
            <div className={styles.listcontainer}>
                <div className={styles.list}>
                    <ul>
                        <li>☑️ Javascript</li>
                        <li>☑️ Typescript</li>
                        <li>☑️ HTML</li>
                        <li>☑️ CSS</li>
                        <li>☑️ NodeJs</li>
                        <li>☑️ ReactJs</li>
                        <li>☑️ GitHub</li>
                    </ul>
                </div>
                <div className={styles.list}>
                    <ul>
                        <li>☑️ Git</li>
                        <li>☑️ Angular</li>
                        <li>☑️ MySql</li>
                        <li>☑️ ExpressJs</li>
                        <li>☑️ Bootstrap</li>
                        <li>☑️ Redux</li>
                        <li>☑️ Axios</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills