import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";
import styles from './Header.module.css'

function Header() {
    return (
        <header>
            <div className={styles.headerall}>
                <h1 className={styles.title}>Portfólio</h1>
                <div>
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