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
                <Link text={'Военные'}/>
                <Link text={'Детективы'}/>
                <Link text={'Для Детей'}/>
                <Link text={'Документальные'}/>
                <Link text={'Драмы'}/>
                <Link text={'Исторические'}/>
                <Link text={'Комедии'}/>
                <Link text={'Криминал'}/>
                <Link text={'Мелодрамы'}/>
                <Link text={'Приключения'}/>
                <Link text={'Триллеры'}/>
                <Link text={'Ужасы'}/>
                <Link text={'Фантастика'}/>
                <Link text={'Фэнтези'}/>
               </div>
                  <div className={styles.menu__links}>
                <h2 className={styles.title}>Страна</h2>
                <Link text={'Россия'}/>
                 <Link text={'Сша'}/>
                  <Link text={'Заруубежные'}/>
               </div>

            </div>
        </>
    );
}
export default Menu;
