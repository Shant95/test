import styles from './styles.module.css';

const Overlay = ({onClose}) => {
    const handleClick = () =>{
        onClose();
    }
    return ( 
        <div className={styles.overlay} onClick={handleClick} >  
        </div>
     );
}
 
export default Overlay;