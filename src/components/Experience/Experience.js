import React from 'react'
import styles from './experience.module.css'
import skills from "../../data/skills.json"
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

const Experience = () => {
    const [slide, setSlide] = useState(0)
    const nextSlide = () => {
        setSlide(slide === skills.length -1 ? 0 : slide + 1)
    }

    const prevSlide =() => {
        setSlide(slide === 0 ? skills.length -1 : slide - 1)

    }

  return (
    <section id="experience" className={styles.container}>
        <div className={styles.content}>
            <BsArrowLeftCircleFill className={`${styles.arrow} ${styles.arrowLeft}`} onClick={nextSlide}></BsArrowLeftCircleFill>
            {skills.map((skill, id) => (
                <div key={id} className={`${slide === id ? styles.skill : `${styles.skill} ${styles.hidden}`}`}>
                    <div className={styles.skillImageContainer}>
                        <img src={skill.imageSrc} alt={skill.title} />
                    </div>
                </div>
            ))}
            <BsArrowRightCircleFill className={`${styles.arrow} ${styles.arrowRight}`} onClick={prevSlide}></BsArrowRightCircleFill>
            
        </div>
    </section>
  )
}

export default Experience