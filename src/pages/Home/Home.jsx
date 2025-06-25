import Carousel from '../../components/Carousel/Carousel';
import styles from './styles.module.css';
import Films from '../../components/Films/films';


const Home = () =>{
    return (
        <div className={styles.home}>
            <div className={styles.container}>
              <Carousel/>
              <Films/>
            </div>
        </div>
    )
}
export default Home;