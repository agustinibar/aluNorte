import styles from './portfolio.module.css';
import cerramientos from '../../assets/cerramientos1.jpg';
import muebles from '../../assets/mueblepetiribi.jpg';
import renovacion from '../../assets/renovaciones.jpg';

const Portfolio = () => {
  return (
    <>
    <h3 className={styles.tittle}> Nuestros productos: </h3>
    <div className={styles.master}>
      <div className={styles.container}>
          {/* <video className={styles.video} autoPlay loop muted>
                  <source src={cerramientos} type="video/mp4" />
          </video> */}
          <img className={styles.image} src={cerramientos} />
          <div className={styles.info}>
              <h4 className={styles.subtittle}>01  Cerramientos</h4>
              <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
      </div>
      <div className={styles.container}>
          {/* <video className={styles.video1} autoPlay loop muted>
                  <source src={muebles} type="video/mp4" />
          </video> */}
          <img className={styles.image} src={muebles} />
          <div className={styles.info}>
              <h4 className={styles.subtittle}>02 Muebles</h4>
              <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
      </div>
      <div className={styles.container}>
          <img className={styles.image} src={renovacion} />
          <div className={styles.info}>
              <h4 className={styles.subtittle}>03 Renovaciones</h4>
              <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
      </div>
    </div>
    </>
  )
}

export default Portfolio;