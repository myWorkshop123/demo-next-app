// pages/ssr-example.js
import { URL } from "@/constant";

const SSRExample = ({ product }) => {
    return (
      <div>
        <h1>Server-Side Rendering Example</h1>
        <h2>Name: {product.title}</h2>
        <p>Description: {product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    );
  };
  
  export async function getServerSideProps() {
    try {
    //   const response = await fetch(`http://0.0.0.0:1234/products/1`);
      const response = await fetch(URL);
      const productData = await response.json();
  
      return {
        props: {
          product: productData,
        },
      };
    } catch (error) {
      console.error('Error fetching product data:', error);
      return {
        props: {
          product: null,
        },
      };
    }
  }
  
  export default SSRExample;
  