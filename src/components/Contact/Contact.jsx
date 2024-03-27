import React from "react"
import { useTranslation } from 'react-i18next';
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css"

export const Contact = () => {
    const { t } = useTranslation();
    return (<footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>{t('contact')}</h2>
            <p>{t('feel free to contact me')}</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedin.png")} width="70"></img>
                <a href="https://www.linkedin.com/in/mohamed-mekadmini/">in/mohamed-mekadmini</a>

            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/github-white.png")} width="70"></img>
                <a href="https://github.com/medislamm123">@medislamm123</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/gitlab.png")} width="70"></img>
                <a href="https://gitlab.com/medislamm123">@medislamm123</a>
            </li>
        </ul>
    </footer>);
}