
import styles from './landing.module.css';
import backgroundVideo from '../../assets/background.mp4';

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <video className={styles.video} autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          </video>
      <header className={styles.header}>
        <div className={styles.textContainer}>
          <h1>Bienvenido a AluNorte</h1>
          <p>aberturas</p>
        </div>
      </header>
    </div>
  );
};

export default Landing;
