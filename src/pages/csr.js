// pages/csr-example.js

import { URL } from "@/constant";
import { useState, useEffect } from 'react';

const CSRExample = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {    
      try {
        const response = await fetch(URL);
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div>
      <h1>Client-Side Rendering Example</h1>
      {product ? (
        <div>
          <h2>Name: {product.title}</h2>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CSRExample;
