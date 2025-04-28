import { useState } from 'react';
import styles from './Section.module.css'; 

export default function Section({ products }) {
  const [totalPrice, setTotalPrice] = useState(0);

  const handleBuyClick = (price) => {
    setTotalPrice(prevTotalPrice => prevTotalPrice += +price);
  };

  return (
    <div className={styles.section}>
      {products.map((product) => (
        <div key={product.id} className={styles.item}>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <button onClick={() => handleBuyClick(product.price)}>Buy</button>
          {totalPrice > 0 && <p>Price: {totalPrice}</p>}
        </div>
      ))}
    </div>

);
  
}