import Carousel from '../../components/Carousel/Carousel';
import styles from './styles.module.css';


const Home = () =>{
    return (
        <div className={styles.home}>
            <div className={styles.container}>
              <Carousel/>
            </div>
        </div>
    )
}
export default Home;