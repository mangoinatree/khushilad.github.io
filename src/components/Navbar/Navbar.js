import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import styles from "./navbar.module.css"
import { useState } from 'react'


const Navbar = () => {
    const[menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">MyPortfolio</a>
        <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? "/assets/nav/closeIcon.png"
              : "/assets/nav/menuIcon.png"
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <ul className={styles.menuItems}>
                        <li>
                            <a target="_blank" rel="noreferrer" href='http://www.linkedin.com/in/khushilad'>
                                <FontAwesomeIcon icon={faLinkedin} color="rgb(97, 62, 70)" className={styles.anchorIcon}></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href='https://github.com/mangoinatree?ocid=AIDcmmli8vlwie_SEM__k_EAIaIQobChMI0ZimvvHvhQMVoQWtBh1_HgRcEAAYASAAEgIwn_D_BwE_k_'>
                                <FontAwesomeIcon icon={faGithub} color="rgb(97, 62, 70)" className={styles.anchorIcon}></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href='/assets/nav/resumeklad.docx' >
                                <FontAwesomeIcon icon={faFile} color="rgb(97, 62, 70)" className={styles.anchorIcon}></FontAwesomeIcon>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            
        </div>
    </nav>
  )
}

export default Navbar