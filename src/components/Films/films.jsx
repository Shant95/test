import MovieCategory from '../MovieCategory/MovieCategory';
import styles from './styles.module.css';   


const Films=()=>{
    return (
        <div className={styles.films}>
            <MovieCategory title={'Боевики'} />
            <MovieCategory title={'Военные'}/>
            <MovieCategory title={'Драмы'}/>
            <MovieCategory title={'Детективы'}/>
            <MovieCategory title={'Для Детей'}/>
            <MovieCategory title={'Мультфильмы'}/>
            <MovieCategory title={'Драмы'}/>
            <MovieCategory title={'Исторические'}/>
            <MovieCategory title={'Ужасы'}/>
            <MovieCategory title={'Фэнтези'}/>
        </div>
    )
}

export default Films;