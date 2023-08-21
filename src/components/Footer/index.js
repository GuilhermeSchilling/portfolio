import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

import styles from './Footer.module.css'

function Footer(){
    return(
        <>
      <div className={styles.container}>
        <h1 className={styles.title}>ENTRE EM CONTATO</h1>
        <div className={styles.iconcontainer}>
          <div className={styles.iconsep}>
            <BsFillTelephoneFill className={styles.icon} />
            <p>(51) 9 9252-0810</p>
          </div>
          <div className={styles.space}></div>
          <div className={styles.iconsep}>
            <IoMdMail className={styles.icon} />
            <p>guilhermeschill@gmail.com</p>
          </div>
        </div>
      </div>
    </>
    )
}

export default Footer