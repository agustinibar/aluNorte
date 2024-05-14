import styles from './bottombanner.module.css';
import banner from '../../assets/fraseFinal.jpg'
const BottomBanner = () => {
  return (
    <div className={styles.container}>
        <img src={banner} className={styles.imagen} />
        <div className={styles.textContainer}>
        <h2>La comodidad de esta foto,</h2>
        <h4> la queremos para tu vida</h4>
        </div>
    </div>
  )
}

export default BottomBanner