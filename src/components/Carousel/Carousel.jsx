import styles from './styles.module.css';
import krushenie from '../../images/carousel/kryshenie.jpeg';
import hannibal from '../../images/carousel/hannibal.jpg';
import family from '../../images/carousel/family.jpeg';
import { useState } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleBack = () => {
        setCurrentIndex(activeIndex - 1);
    }


    return (
        <div className={styles.carousel}>
            <div className={styles.imageContainer}>
                <img src={krushenie} alt="krushenie" className={styles.image} />
            </div>
            <div className={styles.imageContainer} index={currentIndex}>
                <img src={hannibal} alt="hannibal" className={styles.image} />
            </div>
            <div className={styles.imageContainer}>
                <img src={family} alt="family" className={styles.image} />
            </div>
            <div className={styles.buttonNext} onClick={handleBack}>L</div>
            <div className={styles.buttonBack} onClick={handleNext}>R</div>
        </div>
    )
}

export default Carousel;