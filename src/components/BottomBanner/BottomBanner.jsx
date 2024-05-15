import styles from './bottombanner.module.css';
import banner from '../../assets/fraseFinal.jpg'
const BottomBanner = () => {
  return (
    <div className={styles.containerBanner}>
        <img src={banner} className={styles.imagen} />
        <div className={styles.textContainer}>
        <h2>La comodidad de esta foto,</h2>
        <h4> la queremos para tu vida.</h4>
        <button>Empeza ahora</button>
        </div>
    </div>
  )
}

export default BottomBanner