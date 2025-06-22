import NavButton from '../NavButton/NavButton';
import styles from './styles.module.css';
import logo from '../../images/UI/logo.png'

const Header = ({onOpenMenu}) => {
    const handleClickMenu=()=>{
        onOpenMenu();
    }
    return (
        <div className={styles.header}>
            <div className={styles.content}>
                <a href="/" className={styles.container}>
                    <div className={styles.wrapper}>
                        <div className={styles.logo}>
                            <img src={logo} alt="logo" />
                        </div>
                        <p className={styles.title}>Good Movies</p>
                    </div>
                </a>
                <div className={styles.texts}>
                    <p className={styles.text} onClick={handleClickMenu}>Фильмы</p>
                    <p className={styles.text} onClick={handleClickMenu}>Сериалы</p>
                    <p className={styles.text}>Мультфильмы</p>
                </div>
                <div className={styles.buttonsWrapper}>
                    <NavButton text={'Поиск'} />
                    <NavButton text={'Войти'} />
                </div>
            </div>
        </div>
    )
}

export default Header;