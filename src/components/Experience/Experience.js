import React, { useState, useEffect } from 'react';
import styles from './experience.module.css';
import skills from '../../data/skills.json';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const Experience = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 850) {
                setSlidesToShow(1);
            } else {
                setSlidesToShow(3);
            }
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const goToNextSlide = () => {
        if (currentIndex < skills.length - slidesToShow) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const goToPrevSlide = () => {
        if (currentIndex === 0) {
            setCurrentIndex(skills.length - slidesToShow);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const visibleSkills = skills.slice(currentIndex, currentIndex + slidesToShow);

    return (
        <section id="experience" className={styles.container}>
            <div className={styles.content}>
                <BsArrowLeftCircleFill
                    className={`${styles.arrow} ${styles.arrowLeft}`}
                    onClick={goToPrevSlide}
                />
                <div className={styles.carousel}>
                    {visibleSkills.map((skill, index) => (
                        <div key={index} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={skill.imageSrc} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    ))}
                </div>
                <BsArrowRightCircleFill
                    className={`${styles.arrow} ${styles.arrowRight}`}
                    onClick={goToNextSlide}
                />
            </div>
        </section>
    );
};

export default Experience;
