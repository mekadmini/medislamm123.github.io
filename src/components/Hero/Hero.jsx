import React from "react"
import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils";
import { useTranslation } from 'react-i18next';


export const Hero = () => {
    const { t } = useTranslation();
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>{t('welcome')}</h1>
            <p className={styles.description}>{t('hero description')}</p>
            <a href="mailto:mohamedislamm@gmail.com" className={styles.contactBtn}>{t('contact me')}</a>
        </div>
        <img src={getImageUrl("hero/mohamed.jpg")} alt="image of me" className={styles.heroImg}></img>
    </section>;
}