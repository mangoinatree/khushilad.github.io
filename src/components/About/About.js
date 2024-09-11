import React from 'react'
import styles from './about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardUser, faBook } from '@fortawesome/free-solid-svg-icons'


const About = () => {
  return (
    <section className={styles.container} id="about">
        <div className={styles.content}>
            
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <div className={styles.iconDiv}>
                    <FontAwesomeIcon icon={faChalkboardUser} className={styles.aboutItemIcon} size="3x"></FontAwesomeIcon>
                    </div>
                    <div className={styles.aboutItemText}>
                    <h3>Programming Instuctor</h3>
                    <p>
                        I lead teams to teach 
                        programming principles, javascript, C#, web-developement, and 3D design.
                    </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.iconDiv}>
                    <FontAwesomeIcon icon={faBook} className={styles.aboutItemIcon} size="3x"></FontAwesomeIcon>
                    </div>
                    <div className={styles.aboutItemText}>
                    <h3>Computing Science Student</h3>
                    <p>
                        I am in my 3rd year of computing science! I gained valuable experience in data structure, databases, OOP, software developement and more!
                    </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About