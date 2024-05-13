import styles from './products.module.css';
import Product from './Product/Product';

const Products = ({ products }) => {
  return (
    <>
    <h3 className={styles.tittle}>Nuestros Trabajos: </h3>
    { products ?  products.map((product)=>(
      <Product key={product.id} product={product} isVideo={product.id !== 2}/>

    ))
  : "cargando..."}
    </>
  )
}

export default Products;