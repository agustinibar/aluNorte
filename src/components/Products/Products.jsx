import styles from './products.module.css';
import Product from './Product/Product';

const Products = ({ products }) => {
  return (
    <>
      <h3 className={styles.title}>Nuestros Servicios:</h3>
      <div className={styles.productsContainer}>
        {products ? products.map((product) => (
          <Product key={product.id} product={product} isVideo={product.id !== 2} />
        )) : "Cargando..."}
      </div>
  </>
  )
}

export default Products;