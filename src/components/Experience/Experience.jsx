import React, { useState, useEffect } from "react"
import styles from "./Experience.module.css"
import { useTranslation } from 'react-i18next';
import { getImageUrl } from "../../utils"

export const Experience = ({ language }) => {
    const { t, i18n } = useTranslation();
    const [experience, setExperience] = useState([]);
    // alert(i18n.language);

    useEffect(() => {
        const fetchExperience = async () => {
            try {
                const experienceModule = await import(`../../data/experience_${i18n.language}.json`);
                setExperience(experienceModule.default);
            } catch (error) {
                console.error('Error fetching experiences:', error);
                setExperience([]);
            }
        };

        fetchExperience();
    }, [i18n.language]);
    return (
        <section className={styles.container}>
            <h2 className={styles.title} id="experience">{t('experience')}</h2>
            <div className={styles.timeline}>
                {experience.map((myExperience, id) => {
                    return (
                        <div id={id} className={styles.timelineItem}>
                            <a href={myExperience.link}><img src={getImageUrl(myExperience.imgSrc)} className={styles.imgSrc} width="100"></img></a>
                            <div className={styles.timelineContent}>
                                <h3>{myExperience.title}</h3>
                                <h4>{myExperience.institute}</h4>
                                <h4>{myExperience.year}</h4>
                                <p>{myExperience.description}</p>
                            </div>
                        </div>

                    );
                })}

            </div>
        </section>
    );

}