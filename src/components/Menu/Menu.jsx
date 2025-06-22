import Overlay from '../Overlay/Overlay';
import styles from './styles.module.css';
import { MenuLinks } from '../../utils/MenuLinks.js';
import Link from '../Link/Link.jsx';


const Menu = ({ onClose }) => {
    const filtered = MenuLinks.filter(link => link.id === 1);

    console.log(filtered)
    return (
        <>
            <Overlay onClose={onClose} />
            <div className={styles.menu}>
               <div className={styles.menu__links}>
                <h2 className={styles.title}>Жанры</h2>
                <Link text={'Боевики'}/>
               </div>
                  <div className={styles.menu__links}>
                <h2 className={styles.title}>Страна</h2>
                <Link text={'Россия'}/>
               </div>

            </div>
        </>
    );
}
export default Menu;
