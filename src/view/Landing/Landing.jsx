
import styles from './landing.module.css';
import backgroundVideo from '../../assets/background.mp4';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const handleClickIngresar = ()=>{
    navigate('/home')
  }
  return (
    <div className={styles.landingContainer}>
      <video className={styles.video} autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          </video>
      <header className={styles.header}>
        <div className={styles.textContainer}>
          <h1>Bienvenido a AluNorte</h1>
          <p><button className={styles.ingresar} onClick={handleClickIngresar}>Ingresar</button></p>
          
        </div>
      </header>
    </div>
  );
};

export default Landing;
