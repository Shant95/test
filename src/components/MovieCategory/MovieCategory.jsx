import MovieCard from '../MovieCard/MovieCard';
import styles from './styles.module.css';

const MovieCategory =({title,textColor})=>{

    return(
        <div className={styles.movieCategory}>
           <div className={styles.titleContainer}>
            <h2 className={`${styles.title} ${textColor ? styles[textColor]: ''}`}>{title}</h2>
           </div>
           <div className={styles.cardsContainer}>
            <MovieCard/>
           </div>
        </div>
    )
}

export default MovieCategory;