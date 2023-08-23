import { BsLinkedin, BsGithub, BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";
import styles from './Header.module.css'
function Header() {
    return (
        <header>
            <div className={styles.headerall}>
                <div className={styles.all}>
                    <h1 className={styles.title}>Portfólio</h1>
                </div>
                <div className={styles.all}>
                    <div className={styles.darkbutton}>
                        <input className={styles.checkdark} type="checkbox" name="theme" id="theme" />
                        <label className={styles.label} htmlFor="theme">
                            <BsFillSunFill className={styles.darkicon1}/>
                            <BsFillMoonFill className={styles.darkicon2}/>
                            <div className={styles.ball}></div>
                        </label>
                    </div>
                    <BsLinkedin
                        className={styles.icon}
                        onClick={() => window.open("https://www.linkedin.com/in/guilherme-schilling-619353229/", "_blank")}
                    />
                    <BsGithub
                        className={styles.icon}
                        onClick={() => window.open("https://github.com/GuilhermeSchilling/", "_blank")}
                    />
                    <IoDocumentText
                        className={styles.icon}
                        onClick={() =>
                            window.open(
                                "https://drive.google.com/drive/folders/1CF7Dgmqss_fOqs5yXzYRJ0VHd3MaI7x0",
                                "_blank"
                            )
                        }
                    />
                </div>
            </div>
        </header>
    )
}

export default Header