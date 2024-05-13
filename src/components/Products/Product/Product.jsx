
import styles from './product.module.css';

const Product = ({ product  }) => {
    
  
    return (
      <div className={styles.container}>
            <video className={styles.video} autoPlay loop muted>
                <source src={product.video} type="video/mp4" />
            </video>
            <div className={styles.text}>
                <h4>{product.tittle}</h4>
                <p>{product.text}</p>
                <button>CONSULTANOS YA</button> 
            </div>
      </div>
    );
  }
  
  export default Product;