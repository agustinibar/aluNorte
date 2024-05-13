import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.tittle}>SOBRE NOSOTROS</h1> 
    <div className={styles.about}>En <p className={styles.brand}>Alunorte</p>, nos especializamos en aberturas de alta calidad y proyectos de construcción residencial, comercial e industrial. Nuestro compromiso es crear espacios seguros, funcionales y estéticamente atractivos que superen las expectativas de nuestros clientes. ¡Bienvenido a la excelencia en construcción!</div>
    </div>
  )
}

export default About