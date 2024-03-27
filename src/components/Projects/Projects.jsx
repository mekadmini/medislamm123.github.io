import React, { useState, useEffect } from "react"
import styles from "./Projects.module.css"
import { useTranslation } from 'react-i18next';
import { getImageUrl } from "../../utils"

export const Projects = ({ language }) => {
    const { t, i18n } = useTranslation();
    const [projects, setProjects] = useState([]);
    // alert(i18n.language);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projectsModule = await import(`../../data/projects_${i18n.language}.json`);
                setProjects(projectsModule.default);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setProjects([]);
            }
        };

        fetchProjects();
    }, [i18n.language]);
    return (
        <section className={styles.container}>
            <h2 className={styles.title} id="projects">{t('projects')}</h2>
            <div>
                {projects.map((project, id) => {
                    return (
                        <div key={id} className={styles.projects}>
                            <img src={getImageUrl(project.imgSrc)} width="200" alt={`Image of ${project.title}`} className={styles.imgSrc}></img>
                            <div className={styles.projectsContainer}>
                                <h3 >{project.title}</h3>
                                <p>{project.description}</p>
                                {project.skills.map((skill, id) => {
                                    return (
                                        <li key={id} className={styles.skill}>
                                            {skill}
                                        </li>
                                    );
                                })}
                                <a href={project.source} className={styles.linkBtn}>{t('link')}</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}