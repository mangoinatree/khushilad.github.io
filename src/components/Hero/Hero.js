import React from 'react'
import styles from './hero.module.css'
import BackgroundAnimation from './BackgroundAnimation'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={`${styles.content} ${styles.fadeIn}`}>
            <h1 className={styles.title}>Hi, I'm Khushi!</h1>
            <p className={styles.description}>I am a computing science student at the University of Alberta who loves to problem solve with code.</p>
        </div>
        <img
          src={"/assets/hero/heroImage.png"}
          alt="Hero Image of me"
          className={styles.heroImg}
        />
           
    </section>
  )
}

export default Hero