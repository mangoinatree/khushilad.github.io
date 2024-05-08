import React from 'react'
import styles from './hero.module.css'
import Tree from './Tree'

const Hero = () => {
  return (
    <section className={styles.container}>
      
        <div className={`${styles.content} ${styles.fadeIn}`}>
            <h1 className={styles.title}>Hi, I'm Khushi!</h1>
            <p className={styles.description}>I am a computing science student at the University of Alberta who loves to problem solve with code.</p>
        </div>  
        <div className={styles.tree}>
          <Tree />
        </div>
        
    </section>
  )
}

export default Hero