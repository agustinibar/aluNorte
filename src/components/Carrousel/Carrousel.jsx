import styles from '../Carrousel/carrousel.module.css';


const Carrousel = ({ images }) => {

    return (
    <div className={styles.carousel}>
        <div className={styles.slide}>
            <img src={images} alt="path" className={styles.portada}/>
            <h1 className={styles.tittle}> Construyendo sueños, transformando espacios y creando momentos.</h1>
        </div>
    </div>
  )
}

export default Carrousel;