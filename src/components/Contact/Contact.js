import React from 'react'
import styles from './contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <ul className={styles.links}>
            <li className={styles.link}>
                <a target="_blank" rel="noreferrer" href='http://www.linkedin.com/in/khushilad'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon" size='3x'></FontAwesomeIcon>
                </a>
            </li>
            <li className={styles.link}>
                <a target="_blank" rel="noreferrer" href='https://github.com/mangoinatree?ocid=AIDcmmli8vlwie_SEM__k_EAIaIQobChMI0ZimvvHvhQMVoQWtBh1_HgRcEAAYASAAEgIwn_D_BwE_k_'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon"size='3x'></FontAwesomeIcon>
                </a>
            </li>
            <li className={styles.link}>
                <a target="_blank" rel="noreferrer" href='/assets/resume.pdf'>
                    <FontAwesomeIcon icon={faFile} color="#4d4d4e" className="anchor-icon" size='3x'></FontAwesomeIcon>
                </a>
            </li>
        </ul>
        <div className={styles.footerName}>
            <p >khushilad</p>
        </div>
        
    
    </footer>
  )
}

export default Contact