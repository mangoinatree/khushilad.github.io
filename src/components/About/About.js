import React from 'react'
import styles from './about.module.css'
import { getImageUrl } from '../../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons'


const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                src={"/assets/about/aboutImage.png"}
                alt="Me sitting witha laptop"
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <FontAwesomeIcon icon={faChalkboardUser} className={styles.aboutItemIcon} size="3x"></FontAwesomeIcon>
                    <div className={styles.aboutItemText}>
                    <h3>Programming Instuctor</h3>
                    <p>
                        I have experience leading teams to teach 
                        programming principles, javascript, C#, and web-developement.
                    </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <FontAwesomeIcon icon={faChalkboardUser} className={styles.aboutItemIcon} size="3x"></FontAwesomeIcon>
                    <div className={styles.aboutItemText}>
                    <h3>Computing Science Student</h3>
                    <p>
                        I am heading into my 3rd year of computing science! I gained valuable experience in data structure, databases, OOP, practical programming and more!
                    </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About