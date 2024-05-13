import styles from './products.module.css';
import video from '../../assets/background.mp4';
const Products = () => {
  return (
    <>
    <h3 className={styles.tittle}>Nuestros Trabajos: </h3>
    <div className={styles.container}>
       <video className={styles.video} autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className={styles.text}>
            <h4>Tittle</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta provident vel nisi enim quo dolorum. Eveniet, ducimus recusandae quaerat animi harum ex, quos esse repudiandae nisi officia quam non laudantium!</p>
            <button>CONSULTANOS YA</button>
        </div>
    </div>
    </>
  )
}

export default Products;