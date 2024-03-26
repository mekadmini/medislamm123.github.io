import React from "react"
import styles from "./Hero.module.css"
import { getImageUrl } from "../../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello World,<br></br> I'm Mohamed!</h1>
            <p className={styles.description}>I'm a computer science student,<br></br> aspiring software developer,<br></br> and data science enthusiast.</p>
            <a href="mailto:mohamedislamm@gmail.com" className={styles.contactBtn}>Contact Me.</a>
        </div>
        <img src={getImageUrl("hero/mohamed.jpg")} alt="image of me" className={styles.heroImg}></img>
    </section>;
}