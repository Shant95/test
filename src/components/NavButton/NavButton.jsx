import styles from './styles.module.css';

const NavButton = ({ icon, iconAlt, text }) => {
    return (
        <div className={styles.navButton}>
            < div className={styles.icon}>
                <img src={icon} alt={iconAlt} />
            </div>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default NavButton;