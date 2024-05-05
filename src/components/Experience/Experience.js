import React from 'react'
import styles from './experience.module.css'
import skills from "../../data/skills.json"

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
        <h2>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                    <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                        <img src={skill.imageSrc} alt={skill.title} />
                        </div>
                        <p>{skill.title}</p>
                    </div>
                    );
                })}
            </div>
        </div>
    </section>
  )
}

export default Experience