import styles from './obra.module.css';

const Obra = ({ obra, isVideo}) => {
  return (
    <>
        { isVideo ? (
        <video className={styles.video} autoPlay loop muted>
                <source src={obra.video} type="video/mp4" />
        </video>
        ):(
            <img className={styles.image} src={obra.video} alt={obra.title} />
        )}
        <div className={styles.info}>
            <h4 className={styles.subtittle}>{obra.tittle}</h4>
            <p className={styles.text}>{obra.text}</p>
        </div>
    </>

  )
}

export default Obra