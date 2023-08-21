import { BsGithub } from "react-icons/bs";
import styles from "./Container.module.css"
import image1 from "../../images/PrintCineTube.png"
import image2 from "../../images/organo-image.png"
function Container() {
    return (
        <div className={styles.container}>
            <div className={styles.projectContainer}>
                <img src={image1} alt="Projeto Cine Tube" className={styles.projectMM} />
                <a className={styles.projectTitle} rel="noreferrer" href="https://cine-tube.vercel.app/" target="_blank">Cine Tube</a>
                    <a href="https://github.com/GuilhermeSchilling/CineTube" className={styles.projectLink} rel="noreferrer" target="_blank">
                        <BsGithub className={styles.gicon} />
                    </a>
            </div>


            <div className={styles.projectContainer}>
                <img src={image2} alt="Projeto Organo" className={styles.projectMM} />
                <a className={styles.projectTitle} rel="noreferrer" href="https://organo-typescript-sigma.vercel.app/" target="_blank">Organo</a>
                    <a href="https://github.com/GuilhermeSchilling/OrganoTypescript" className={styles.projectLink} rel="noreferrer" target="_blank">
                        <BsGithub className={styles.gicon} />
                    </a>
            </div>

            <div className={styles.projectContainer}>
                <img src="https://res.cloudinary.com/dv61ldehl/image/upload/v1687314736/foneUP_Mockup_fdmk2u.png" alt="Project Mockup" className={styles.projectMM} />
                <a className={styles.projectTitle} rel="noreferrer" href="https://www.youtube.com/watch?v=-LTFoxgsNs4&list=RD-LTFoxgsNs4&start_radio=1&ab_channel=Dashdot" target="_blank">Em breve</a>
                    <a href="https:/youtube.com" className={styles.projectLink} rel="noreferrer" target="_blank">
                        <BsGithub className={styles.gicon} />
                    </a>
            </div>


        </div>
    )
}

export default Container